import React, { useState } from "react";
import "./Nav.scss";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../imgs/Swoosh_Green.png";
import Icons from "../../Icons";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";

import tellorXwhitepaper from "../../docs/tellorX-whitepaper.pdf";

const Nav = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({ query: "(max-width: 810px)" });
  const [navClasses, setNavClasses] = useState("Nav__sight");
  const [navBg, setNavBg] = useState("transp ");

  // SHOW/HIDE NAV FUNCTION
  useScrollPosition(({ prevPos, currPos }) => {
    const scrollDirection = prevPos.y - currPos.y;
    if (prevPos.y === 0) {
      setNavClasses("Nav__sight");
    } else {
      if (scrollDirection > 0) {
        setNavClasses("Nav__hide");
      } else {
        setNavClasses("Nav__sight");
      }
    }
  });

  // CHANGE NAV BG COLOUR FUNCTION
  const scroller = () => {
    if (location.pathname === "/") {
      if (window.pageYOffset > 710) {
        setNavBg("whitish ");
      } else {
        if (window.pageYOffset > 130) {
          setNavBg("greyish ");
        } else {
          setNavBg("transp ");
        }
      }
    } else {
      if (window.pageYOffset > 20) {
        setNavBg("whitish ");
      } else {
        setNavBg("transp ");
      }
    }
  };

  window.addEventListener("scroll", scroller);
  return (
    <>
      {isMobile ? (
        <div className={"Nav " + navBg}>
          <Menu
            right
            customBurgerIcon={<Icons.Hamburger />}
            customCrossIcon={<Icons.Closer />}
          >
            <a id="home" className="menu-item" href="/">
              Home
            </a>
            <a
              href={tellorXwhitepaper}
              className="menu-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              tellorX
            </a>
            <a id="howitworks" className="menu-item" href="/howitworks">
              How it works
            </a>
            <a id="about" className="menu-item" href="/about">
              About
            </a>
            <a id="howitworks" className="menu-item" href="/bounties">
              Bounties
            </a>
            <a
              id="documentation"
              className="menu-item"
              href="https://docs.tellor.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
            <a
              id="git"
              className="menu-item"
              href="https://github.com/tellor-io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.Github height="30px" width="30.81px" />
            </a>
          </Menu>
          <Link to="/">
            <div className="Logo">
              <img src={Logo} alt="Tellor logo" />
              {location.pathname !== "/" ? <p>tellor</p> : null}
            </div>
          </Link>
        </div>
      ) : (
        <div className={"Nav " + navBg + navClasses}>
          <Link to="/">
            <div className="Logo">
              <img src={Logo} alt="Tellor logo" />
              {location.pathname !== "/" ? <p>tellor</p> : null}
            </div>
          </Link>
          <div className="flexer"></div>
          <div className="Menu_Total">
            <div className="Menu">
              <a
                href={tellorXwhitepaper}
                target="_blank"
                rel="noopener noreferrer"
              >
                tellorX
              </a>
              <Link
                className={
                  location.pathname === "/howitworks" ? "selected" : null
                }
                to="/howitworks"
              >
                How it works
              </Link>
              <Link
                className={location.pathname === "/about" ? "selected" : null}
                to="/about"
              >
                About
              </Link>
              <Link
                className={
                  location.pathname === "/bounties" ? "selected" : null
                }
                to="/bounties"
              >
                Bounties
              </Link>
              <a
                href="https://docs.tellor.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </div>
            <a
              href="https://github.com/tellor-io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.Github height="30px" width="30.81px" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
