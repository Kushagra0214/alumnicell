import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
import About from "./Components/About/about";
import Events from "./Components/Events/events";
import Team from "./Components/Team/team";
import Profile from "./Components/Profile/profile";

const SiteContainer = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Events />
        <Team />
        <Profile />
    </div>
  );
};

export default SiteContainer;