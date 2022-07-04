import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
import About from "./Components/About/about";
import Events from "./Components/Events/events";
import Team from "./Components/Team/team";
import Profile from "./Components/Profile/profile";
import { BrowserRouter as Router, useRoutes} from "react-router-dom";

const Container = () => {
  let routes = useRoutes([
    { path: "/", element: 
    <div>
      <Navbar />
      <Home /> 
      <About />
      <Events />
      <Team />
    </div>
    },
    { path: "profile", element:
    <>
     <Navbar />
     <Profile /> 
    </>
    },
  ]);
  return routes;
};

const SiteContainer = () => {
  return (
    <div>
        <Router>
          <Container />
        </Router>
        {/* <Navbar />
        <Home />
        <About />
        <Events />
        <Team />
        <Profile /> */}
    </div>
  );
};

export default SiteContainer;