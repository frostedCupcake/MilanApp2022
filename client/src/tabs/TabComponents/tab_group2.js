import React, { useState } from "react";
import FirstTab from "../overall/sports_boys";
import SecondTab from "../overall/sports_girls";
import ThirdTab from "../overall/culty";
import FourthTab from "../overall/techy";
import Culty from "../../components/culti/Scores";
import Techy from "../../components/techy/Scores";
import SportsB from "../../components/sports/ScoresB";
import SportsG from "../../components/sports/ScoresG";

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
      <h2
        className="heading-secondary leaderboard__heading"
        style={{
          color: "#ffc93c",
          borderBottom: "2px solid #ffc93c",
        }}
      >
        Events
      </h2>
      <ul className="nav2">
        <li
          className={activeTab === "tab1" ? "active" : "text-gold"}
          onClick={handleTab1}
        >
          Sports Boys
        </li>
        <li
          className={activeTab === "tab2" ? "active" : "text-gold"}
          onClick={handleTab2}
        >
          Sports Girls
        </li>
        <li
          className={activeTab === "tab3" ? "active" : "text-gold"}
          onClick={handleTab3}
        >
          Culty
        </li>
        <li
          className={activeTab === "tab4" ? "active" : "text-gold"}
          onClick={handleTab4}
        >
          Techy
        </li>
      </ul>

      <div className="outlet">
        {activeTab === "tab1" ? (
          <div>
            <FirstTab />
            <SportsB />
          </div>
        ) : activeTab === "tab2" ? (
          <div>
            <SecondTab />
            <SportsG />
          </div>
        ) : activeTab === "tab3" ? (
          <div>
            <ThirdTab />
            <Culty />
          </div>
        ) : (
          <>
            <FourthTab />
            <Techy />
          </>
        )}
      </div>
    </div>
  );
};
export default Tabs;
