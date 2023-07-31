import { Input, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
//import styled from "@emotion/styled";

export default function LogIn() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Preview");
  };
  return (
    <>
      <header>
        <img
          src="https://rachelcorbett.com.au/wp-content/uploads/2018/07/Neon-podcast-logo.jpg"
          alt="podcast image"
          className="header--image"
        />
        <h3 className="project--name">Podcast App</h3>
        <button className="signup--button">Sign Up</button>
      </header>
      <div className="landing-page">
        <div className="page">
          <h2>Login</h2>
          <form className="login-form">
            <label className="landing-label" htmlFor="email">
              email
            </label>
            <Input
              className="input--text"
              //value={email}
              type="email"
              placeholder="email account"
              id="email"
              name="email"
            />
            <label htmlFor="password">password</label>
            <Input
              className="input--text"
              //value={password}
              type="password"
              placeholder="*********"
              id="password"
              name="password"
            />
            <Button 
            onClick={handleButtonClick} variant="outlined" className="btn" type="submit">
              Log In
            </Button>
          </form>
          <button className="link-btn">
            Don't have an account? Register here.
          </button>
        </div>
      </div>
    </>
  );
}
