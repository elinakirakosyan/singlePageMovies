import userAvatar from "../assets/icons/user-avatarjpg.jpg";
import { useState } from "react";

const NavBar = ({ isOpen, setIsOpen, menuItems }) => {
  const [wasOpen, setWasOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setWasOpen(true);
      }}
      className={`navbar-container ${wasOpen && "shrink-animation"}`}
    >
      <div className="navbar-inner">
        <div className="user-info" style={{ opacity: isOpen ? 1 : 0 }}>
          <img src={userAvatar} alt="user_image" className="avatar" />
          <span className={isOpen ? "menu-nav-item-name" : null}>Daniel</span>
        </div>
        <div className="menuItems-inner">
          {menuItems.map((eachItem, idx) => (
            <div key={eachItem.menuName + idx} className="navbar-item">
              <img src={eachItem.icon} alt="icon" />
              {isOpen && (
                <span className={isOpen ? "menu-nav-item-name" : null}>
                  {eachItem.menuName}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="setting-block">
          <span>LANGUAGE</span>
          <span>GET HELP</span>
          <span>EXIT</span>
        </div>
      )}
    </div>
  );
};

export default NavBar;
