// Preview.tsx
import { useState, useEffect } from 'react';

const API_URL = 'https://podcast-api.netlify.app/shows'; 

interface Podcast {
  image: string;
  title: string;
  description: string;
  seasons: number;
}

function Preview() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json();
          setPodcasts(data);
        } else {
          throw new Error('Failed to fetch podcast data');
        }
      } catch (error: any) {
        console.error('Error fetching podcast data:', error.message);
      }
    };

    fetchData();
  }, []);

  if (podcasts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {podcasts.map((podcast, index) => (
        <div key={index}>
          <h1>{podcast.title}</h1>
          <img src={podcast.image} alt={podcast.title} />
          <p>{podcast.description}</p>
          <p>Number of Seasons: {podcast.seasons}</p>
          <hr /> 
        </div>
      ))}
    </div>
  );
}

export default Preview;
