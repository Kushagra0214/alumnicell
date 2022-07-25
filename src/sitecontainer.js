import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
import About from "./Components/About/about";
import Events from "./Components/Events/events";
import EventDesc from "./Components/Events/event_description";

import Team from "./Components/Team/team";
import Profile from "./Components/Profile/profile";
import Login from "./Components/Login_mobile/login";
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
    { path: "login", element:
    <>
     <Navbar />
     <Login /> 
    </>
    },
    { path: "/events/:path", element:
    <>
     <Navbar />
     <EventDesc /> 
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