import { supabase } from "../store/client";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin, setShowAuth }) => {
    const navigate = useNavigate()

    const handleSubmit = () =>{
        navigate('/App')
    }
  const handleSession = (session) => {
    if (session?.user) {
      handleLogin(session);
    }
  };

  return (
    <div className="login">
      <header className="App-Header">
        <Auth
          onClick={handleSubmit}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["google", "GitHub"]}
          handleSession={handleSession} // Call handleLogin when the session is available
        />
        <button className="submit--button--login" variant="contained" onClick={handleSubmit} >You may now go to the podcast</button>
      </header>
      
    </div>
  );
};
export default Login;
