import { useNavigate } from "react-router-dom";
import MicIcon from "@mui/icons-material/Mic";
//import { Switch }  from "@mui/material"

export const Header = () => {
const navigate = useNavigate()
  const favoritesIcon = () => {
    navigate('/components/FavoritesPage');
  };
  return (
    <div className="header--container">
      <div className="nav--name">
        <h1 className="podcast--name">O.M Podcast</h1>
        <MicIcon style={{ fontSize: 50 }} className="mic--icon" />
      </div>
      <div className="right--elements">
        
          <button onClick={favoritesIcon} className="favorites--button">❤️</button>
        
      </div>
    </div>
  );
};
