// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";


// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { FavoritesPage } from './components/FavoritesPage.tsx';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LogIn from './components/LogIn';
import { Provider, useSelector } from 'react-redux';
import { RootState, store } from './store/store.ts';
// import { SignUp } from './components/SignUp.tsx'; 
import './css/Header.css'
import './css/Main.css'
import './css/Carousal.css'
import './css/FilterBar.css'
import './css/Podcast-Preview.css'
import './css/Footer.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogIn />} /> 
        <Route path="/App" element={<App />} />
        {/* <Route path="/./components/SignUp.tsx" element={<SignUp />} /> */}
        {/* Other existing routes */}
        <Route path="/components/FavoritesPage" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
</React.StrictMode>,
)