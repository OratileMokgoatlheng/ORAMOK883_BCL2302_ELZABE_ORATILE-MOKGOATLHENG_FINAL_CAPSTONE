// Preview.tsx
import { useState, useEffect } from "react";
import NavBar from './NavBar'
const API_URL = "https://podcast-api.netlify.app/shows";

interface Podcast {
  image: string;
  title: string;
  description: string;
  seasons: number;
}
function Preview() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [selectedPodcast, setSelectedPodcast] = useState<Podcast | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json();
          setPodcasts(data);
        } else {
          throw new Error("Failed to fetch podcast data");
        }
      } catch (error: any) {
        console.error("Error fetching podcast data:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleSeeDescriptionClick = (podcast: Podcast) => {
    setSelectedPodcast(podcast);
  };

  const handleCloseModal = () => {
    setSelectedPodcast(null);
  };

  if (podcasts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <div className="card-container">
        {podcasts.map((podcast, index) => (
          <div className="card" key={index}>
            <img
              src={podcast.image}
              alt={podcast.title}
              className="card-image"
            />
            <div className="card-content">
              <h1>{podcast.title}</h1>
              {selectedPodcast === podcast ? (
                <div className="description-modal">
                  <div className="description-modal-content">
                    <p>{podcast.description}</p>
                    <button onClick={handleCloseModal}>Close</button>
                  </div>
                  <div
                    className="description-modal-overlay"
                    onClick={handleCloseModal}
                  />
                </div>
              ) : (
                <button onClick={() => handleSeeDescriptionClick(podcast)}>
                  See Description
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Preview;
