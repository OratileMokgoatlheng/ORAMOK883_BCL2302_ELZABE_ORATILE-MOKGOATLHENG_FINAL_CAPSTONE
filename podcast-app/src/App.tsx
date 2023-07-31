//import { useState } from 'react'
import "./App.css";
import LogIn from "./components/LogIn";
import Preview from './components/Previews';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Routes>
        <Route  path="/" element={<LogIn/>} />
        <Route  path="/preview" element={<Preview/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
