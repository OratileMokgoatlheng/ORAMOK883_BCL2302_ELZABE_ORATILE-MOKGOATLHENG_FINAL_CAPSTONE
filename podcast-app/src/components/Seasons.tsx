import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

const API_URL = "https://podcast-api.netlify.app/id";
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

function Seasons() {
  const { seasonId } = useParams<{ seasonId: string }>();
  const [season, setSeason] = React.useState<Season | null>(null);
  const [sortedEpisodes, setSortedEpisodes] = React.useState<Episode[]>([]);

  const sortOptions: {
    [key in SortOption]: (a: Episode, b: Episode) => number;
  } = {
    titleAZ: (a, b) => a.title.localeCompare(b.title),
    titleZA: (a, b) => b.title.localeCompare(a.title),
    dateAsc: (a, b) =>
      new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime(),
    dateDesc: (a, b) =>
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  };

  const sortEpisodes = (sortBy: SortOption) => {
    const sortingFunction = sortOptions[sortBy];
    if (sortingFunction) {
      const sorted = [...season.episodes].sort(sortingFunction);
      setSortedEpisodes(sorted);
    }
  };

  const [filteredEpisodes, setFilteredEpisodes] = React.useState<Episode[]>([]);

  const filterEpisodes = (searchQuery: string) => {
    if (!searchQuery) {
      setFilteredEpisodes([...season.episodes]);
      return;
    }

    const options = {
      keys: ["title"],
      threshold: 0.3,
    };
    const fuse = new Fuse(season.episodes, options);
    const result = fuse.search(searchQuery);
    setFilteredEpisodes(result.map((item) => item.item));
  };

  React.useEffect(() => {
    if (season && season.episodes) {
      setSortedEpisodes([...season.episodes]);
      setFilteredEpisodes([...season.episodes]);
    }
  }, [season]);

  if (!season) {
    return <div>Loading...</div>;
  }

  if (!season || !season.episodes) {
    // Handle the case when season is null or season.episodes is null
    return <div>No episodes available!</div>;
  }
  const episodeElements = season.episodes.map((episode) => (
    <div key={episode.episodeNumber}>
      <h2>{episode.title}</h2>
      <p>{episode.description}</p>
      <audio controls>
        <source src={episode.audioFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  ));

  React.useEffect(() => {
    // Fetch the season data using the seasonId from the API

    fetch(`${API_URL}/${seasonId}`)
      .then((response) => response.json())
      .then((data) => setSeason(data));
  }, [seasonId]);

  if (!season) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar onSort={sortEpisodes} onFilter={filterEpisodes} />
      <h1>{season.title}</h1>
      <p>{season.description}</p>
      <img src={season.image} alt={season.title} />
      <div>{episodeElements}</div>;
      <div>
        {filteredEpisodes.map((episode) => (
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
    </div>
  );
}

export default Seasons;
