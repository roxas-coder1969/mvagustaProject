import React from "react";
import ReactDOM from "react-dom";
import { AboutUs } from "../bodyHomePage/aboutUsComponent";
export function scrollFunction() {
  if (document.documentElement.scrollTop > window.innerHeight / 3) {
    ReactDOM.render(<AboutUs />, document.getElementById("mv-about-us"));
  } else {
    // ReactDOM.render(<AboutUs />, document.getElementById("mv-about-us"));
  }
}
export function NavWhiteCompact() {
  if (document.documentElement.scrollTop > 30) {
    document.getElementsByClassName("mv-nav")[0].classList.add("mv-nav__white");
    document
      .getElementsByClassName("mv-nav-desktop")[0]
      .classList.add("mv-nav__white");
    for (
      var i = 0;
      i < document.getElementsByClassName("mv-container-div").length;
      i++
    ) {
      document
        .getElementsByClassName("mv-container-div")
        [i].classList.add("mv-container-div-onScroll");
    }
  } else {
    document
      .getElementsByClassName("mv-nav")[0]
      .classList.remove("mv-nav__white");
    document
      .getElementsByClassName("mv-nav-desktop")[0]
      .classList.remove("mv-nav__white");

    for (
      var key = 0;
      key < document.getElementsByClassName("mv-container-div").length;
      key++
    ) {
      document
        .getElementsByClassName("mv-container-div")
        [key].classList.remove("mv-container-div-onScroll");
    }
  }
}
