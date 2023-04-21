import React, { useEffect, useId, useState } from "react";
import list from "./Navbar.json";
import "./Navbar.css";

export default function Navbar() {
  // lista item del menu
  const [navList, setNavList] = React.useState(list.navbar);

  // stato della pagina corrent
  const [number, setNumber] = useState(-1);

  //unique id
  const inputId = React.useId();

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 0 && document.getElementById("navbar-content")) {
        // document.getElementById("navbar-content").style.background =
        //   "var(--color-green800)";
        // document.getElementById("navbar-content").style.backdropFilter =
        //   "blur(20px) saturate(1.7)";

        document.getElementById("navbar-content").classList.add("glass");
        document.getElementById("navbar-content").classList.add("blur");
      } else {
        document.getElementById("navbar-content").style.background =
          "var(--color-green800)";
        document.getElementById("navbar-content").style.backdropFilter =
          "blur(0)";
        document.getElementById("navbar-content").classList.remove("glass");
        document.getElementById("navbar-content").classList.remove("blur");
      }
    };
  }, []);

  // handle page selected
  const handleSelected = (pos) => {
    // todo: set item hovered

    // retrive values
    let links = document.getElementsByClassName("pageLink");
    let dot = document.getElementById("dot");

    if (!links[pos]) return;
    // 1. get current child length
    let length = 0;
    for (let i = 0; i < pos; i++) {
      length += links[i].offsetWidth;
    }

    // 3. Move dot to current item position
    dot.style.left = pos == 0 ? "calc(var(--20px) - 6px)" : length + 14 + "px";
    dot.style.width = links[pos].offsetWidth + "px";
  };

  useEffect(() => {
    setNumber(0);
    handleSelected(0);
  }, []);

  return (
    <div className="navbar" id="navbar">
      <div className="navbar-content" id="navbar-content">
        {navList?.map((item, pos) => (
          <div
            key={pos}
            onClick={() => {
              setNumber(pos);
              handleSelected(pos);
            }}
            className="pageLink"
          >
            <a href="#">{item}</a>
          </div>
        ))}
        <span className="dot" id="dot"></span>
      </div>
    </div>
  );
}
