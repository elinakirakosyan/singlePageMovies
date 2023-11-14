import React, { useState } from "react";
import NavBar from "./components/NavBar";
import data from "./data.json";
import Body from "./components/Body";
import searchIcon from "./assets/icons/ICON - Search.png";
import homeIcon from "./assets/icons/Group 46.png";
import showsIcon from "./assets/icons/Group 56.png";
import moviesIcon from "./assets/icons/Group 54.png";
import genresIcon from "./assets/icons/Group 53.png";
import watchLaterIcon from "./assets/icons/Group 47.png";

const menuItems = [
  { menuName: "Search", icon: searchIcon },
  { menuName: "Home", icon: homeIcon },
  { menuName: "TV Shows", icon: showsIcon },
  { menuName: "Movies", icon: moviesIcon },
  { menuName: "Genres", icon: genresIcon },
  { menuName: "Watch Later", icon: watchLaterIcon },
];

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [featuredItem, setFeaturedItem] = useState(data.Featured);
  return (
    <div className="main-wrapper">
      <NavBar
        menuItems={menuItems}
        isOpen={isNavbarOpen}
        setIsOpen={setIsNavbarOpen}
      />

      <Body
        featuredItem={featuredItem}
        setFeaturedItem={setFeaturedItem}
        isNavbarOpen={isNavbarOpen}
      />
    </div>
  );
}

export default App;
