import { Link } from "react-router-dom";
import MicIcon from "@mui/icons-material/Mic";
//import { Switch }  from "@mui/material"

export const Header = () => {
  return (
    <div className="header--container">
      <div className="nav--name">
        <MicIcon style={{ fontSize: 60 }} />
        <h1 className="podcast--name">O.M Podcast</h1>
      </div>
      <div className="right__elements">
        <Link to="./components/FavoritesPage">
          <button className="favorites__button">❤️</button>
        </Link>
      </div>
    </div>
  );
};
