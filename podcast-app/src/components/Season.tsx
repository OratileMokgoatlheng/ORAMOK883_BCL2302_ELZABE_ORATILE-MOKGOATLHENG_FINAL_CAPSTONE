import React from "react";
import { useParams } from "react-router-dom";

const API_URL = 'https://podcast-api.netlify.app/id'
interface Episode {
  title: string;
  description: string;
  episodeNumber: number;
  audioFile: string;
}

interface Season {
  id: string;
  title: string;
  description: string;
  seasonNumber: number;
  image: string;
  episodes: Episode[];
}

function Season() {
  const { seasonId } = useParams<{ seasonId: string }>();
  const [season, setSeason] = React.useState<Season | null>(null);

  React.useEffect(() => {
    // Fetch the season data using the seasonId from the API
    // Replace `API_URL` with your specific API URL to get the season data by ID
    fetch(`${API_URL}/${seasonId}`)
      .then((response) => response.json())
      .then((data) => setSeason(data));
  }, [seasonId]);

  if (!season) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{season.title}</h1>
      <p>{season.description}</p>
      <img src={season.image} alt={season.title} />
      {season.episodes.map((episode) => (
        <div key={episode.episodeNumber}>
          <h2>{episode.title}</h2>
          <p>{episode.description}</p>
          <audio controls>
            <source src={episode.audioFile} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </div>
  );
}

export default Season;
