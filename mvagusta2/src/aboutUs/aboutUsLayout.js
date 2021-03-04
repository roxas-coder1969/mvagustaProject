import React from "react";
import { AboutUsMission } from "./component/aboutUsMission";
import { AboutUsStand } from "./component/aboutUsStand";
import { AboutUsPerfection } from "./component/aboutUsPerfection";
import { AboutUsLegend } from "./component/aboutUsLegend";
import { AboutUsTimeless } from "./component/aboutUsTimeless";
import MvEmail from "../generalLayout/mvEmail";
import Nav from "../generalLayout/nav";
import NavDesktop from "../generalLayout/navDesk";
import PageName from "../generalLayout/pageName";

import { FooterGe } from "../generalLayout/footer_test";
import { AboutUsBanner } from "./component/aboutUsBanner";
export default function AboutUsLayout() {
  return (
    <>
      <div
        className="nav-pc-homepage"
        style={{
          height: "84px",
          width: "100vw",
          background: "#1a1a1a",
        }}
      ></div>
      <NavDesktop />
      <Nav color="white" />
      <PageName namePage="About us" />
      <AboutUsBanner />
      <AboutUsStand />
      <AboutUsMission />
      <AboutUsPerfection />
      <AboutUsLegend />
      <AboutUsTimeless />
      <MvEmail />
      <FooterGe />
    </>
  );
}
