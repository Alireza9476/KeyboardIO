import { useEffect, useState } from "react";
import "../styles/header.scss";
import { Link } from "react-router-dom";
import { default as WebsiteLogo } from "../assets/Website_Logo.png";
import HeaderMenu from "../components/HeaderMenu";

import AccountManager from "./AccountManager";
import {
  ADVANCED_URL,
  CUSTOM_SETTINGS_URL,
  HOMEPAGE_URL,
  STANDARD_URL,
} from "../config/URLs";

function Header() {
  const imgDots = "https://www.wearedevelopers.com/menu-24px.svg";
  const menuBar = [
    ["Standard", STANDARD_URL],
    ["Advanced", ADVANCED_URL],
    ["Custom Settings", CUSTOM_SETTINGS_URL],
  ];

  const [scroll, setScroll] = useState(false);

  const scrollListener = () => {
    if (window.scrollY === 0) {
      setScroll(false);
    } else if (window.scrollY !== 0 && !scroll) {
      setScroll(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => scrollListener(e));

    return () => {
      window.removeEventListener("scroll", () => {
        scrollListener();
      });
    };
  }, []);

  return (
    <>
      <div
        className={`header ${
          scroll ? "header-box-shadow" : "header-box-shadow-inactive"
        }`}
      >
        <div className="flex justify-between m-3 h-10">
          <Link to={HOMEPAGE_URL}>
            <img src={WebsiteLogo} alt="img" className="w-20 h-10" />
          </Link>
          <div className="flex space-x-10 items-center">
            {menuBar.map(([title, url], index) => {
              return (
                <Link
                  to={url}
                  key={index}
                  className="sm:hidden md:block bg-header_btn hover:bg-header_btn-100 p-2 rounded"
                >
                  {title}
                </Link>
              );
            })}
          </div>

          <div className="flex gap-5">
            <AccountManager />
            <HeaderMenu />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
