import React from "react";
import SideNavbar from "../components/SideNavbar";
import PanelDivisor from "../components/PanelDivisor";

const Page = () => {
  return <div className="w-4/5">Home Page</div>;
};
const HomePage = () => {
  return <PanelDivisor Page={<Page />} />;
};

export default HomePage;