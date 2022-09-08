import React, { useState } from "react";
import FirstTab from "../overall/sports_boys";
import SecondTab from "../overall/sports_girls";
import ThirdTab from "../overall/culty";
import FourthTab from "../overall/techy";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    // update the state to tab2
    setActiveTab("tab3");
  };
  const handleTab4 = () => {
    // update the state to tab2
    setActiveTab("tab4");
  };
  return (
    <div className="Tabs2">
      <h2 className="heading-secondary leaderboard__heading">Events</h2>
      <ul className="nav2">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Sports Boys
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Sports Girls
        </li>
        <li
          className={activeTab === "tab3" ? "active" : ""}
          onClick={handleTab3}
        >
          Culty
        </li>
        <li
          className={activeTab === "tab4" ? "active" : ""}
          onClick={handleTab4}
        >
          Techy
        </li>
      </ul>

      <div className="outlet">
        {activeTab === "tab1" ? (
          <FirstTab />
        ) : activeTab === "tab2" ? (
          <SecondTab />
        ) : activeTab === "tab3" ? (
          <ThirdTab />
        ) : (
          <FourthTab />
        )}
      </div>
    </div>
  );
};
export default Tabs;
