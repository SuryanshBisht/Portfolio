import React from 'react'
import { Home } from "./MyComponents/Home/Home.js";
import { Header } from "./MyComponents/Header/Header.js";
import { Body } from "./MyComponents/Body/Body.js";
import { Footer } from "./MyComponents/Footer/Footer.js";

const App = () => {
  return (
    <div className="app">
      <div>
        <Header/>
      </div>
      <div>
        <Home/>
      </div>
      <div>
        <Body/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App
