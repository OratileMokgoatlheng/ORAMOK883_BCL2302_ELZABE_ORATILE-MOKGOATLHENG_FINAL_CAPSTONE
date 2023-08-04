import { useState } from "react";
import { Input, Button } from "@mui/material";
import { supabase } from "../store/client";

interface LogginIn {
  username: string;
  email: string;
  password: string;
}

export default function LogIn() {
  const [formData, setFormData] = useState<LogginIn>({
    username: "",
    email: "",
    password: "",
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmitButton(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { user, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        alert(error.message);
      } else {
        // Save additional user details to the database
        if (user) {
          const { username, email } = formData;
          await supabase.from("users").insert([{ username, email }]);
        }
        alert("Check your email verification link");
      }
    } catch (error) {
      alert(error.message);
    }
  }

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
          <form onSubmit={handleSubmitButton} className="login-form">
            <label className="landing-label" htmlFor="username">
              username
            </label>
            <Input
              className="input--text"
              type="text"
              placeholder="username"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <label className="landing-label" htmlFor="email">
              email
            </label>
            <Input
              className="input--text"
              type="email"
              placeholder="email account"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="password">password</label>
            <Input
              className="input--text"
              type="password"
              placeholder="*********"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <Button variant="outlined" className="btn" type="submit">
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
