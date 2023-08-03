// // Preview.tsx
// import { useState, useEffect } from "react";
// import NavBar from "./NavBar";
// import { Button } from "@mui/material";
// import { Link } from "react-router-dom";


// const API_URL = "https://podcast-api.netlify.app/shows";

// interface Podcast {
//   id: string;
//   image: string;
//   title: string;
//   description: string;
//   seasons: number;
//   updated: string;
//   genres: number[];
//   episodes: Episode[];
// }
// interface Episode {
//   title: string;
//   description: string;
//   episodeNumber: number;
//   audioFile: string;
// }

// function Preview() {
//   const [podcasts, setPodcasts] = useState<Podcast[]>([]);
//   const [selectedPodcast, setSelectedPodcast] = useState<Podcast | null>(null);

//   const getFullYearAndDate = (dateString: string) => {
//     const dateObj = new Date(dateString);

//     // Check if the dateObj is valid
//     if (isNaN(dateObj.getTime())) {
//       // If the dateObj is not valid, return default values or handle the error as needed
//       return "N/A";
//     }

//     const fullYear = dateObj.getFullYear();
//     const dayOfMonth = dateObj.getDate();

//     // Add leading zeros to the day if needed
//     const formattedDay = dayOfMonth.toString().padStart(2, "0");

//     return `${fullYear}/${formattedDay}`;
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(API_URL);
//         if (response.ok) {
//           const data = await response.json();
//           setPodcasts(data);
//         } else {
//           throw new Error("Failed to fetch podcast data");
//         }
//       } catch (error: any) {
//         console.error("Error fetching podcast data:", error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSeeDescriptionClick = (podcast: Podcast) => {
//     setSelectedPodcast(podcast);
//   };

//   const handleCloseModal = () => {
//     setSelectedPodcast(null);
//   };

//   if (podcasts.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <NavBar />
//       <div className="card-container">
//         {podcasts.map((podcast, index) => (
//           <div className="card" key={index}>
//             <img
//               src={podcast.image}
//               alt={podcast.title}
//               className="card-image"
//             />
//             <div className="card-content">
//               <h1>{podcast.title}</h1>
//               {selectedPodcast === podcast ? (
//                 <div className="description-modal">
//                   <div className="description-modal-content">
//                     <p>{podcast.description}</p>
//                     <Button onClick={handleCloseModal}>Close</Button>
//                   </div>
//                   <div
//                     className="description-modal-overlay"
//                     onClick={handleCloseModal}
//                   />
//                 </div>
//               ) : (
//                 <Button
//                   variant="contained"
//                   onClick={() => handleSeeDescriptionClick(podcast)}
//                 >
//                   See Description
//                 </Button>
//               )}
//               <div>
//                 <h1>Available Seasons</h1>

//                 <div key={podcast.id}>
//                   <Link to={`/season/${podcast.id}`}>View Season</Link>
//                 </div>
//               </div>
              
//             </div>

//             <div>
//               <p>Seasons: {podcast.seasons}</p>
//               <p>Last Updated: {getFullYearAndDate(podcast.updated)}</p>
//               <p>Genres: {podcast.genres.join(", ")}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Preview;
