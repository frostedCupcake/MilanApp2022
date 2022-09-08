import React from "react";
import "../sass/main.css";
import Culty from "../components/culti/Scores";
import Techy from "../components/techy/Scores";
import SportsB from "../components/sports/ScoresB";
import SportsG from "../components/sports/ScoresG";

const LiveScores = () => {
  const [activeTab, setActiveTab] = React.useState("sportsB");
  const handleTab1 = () => {
    setActiveTab("sportsB");
  };
  const handleTab2 = () => {
    setActiveTab("sportsG");
  };
  const handleTab3 = () => {
    setActiveTab("culti");
  };
  const handleTab4 = () => {
    setActiveTab("techy");
  };
  return (
    <div className="Tabs2 events">
      <h2 className="heading-secondary schedule__heading">Leaderboard</h2>
      <ul className="nav2 text-gold">
        <li
          className={activeTab === "sportsB" ? "active text-black" : ""}
          onClick={handleTab1}
        >
          Sports Boys
        </li>
        <li
          className={activeTab === "sportsG" ? "active text-black" : ""}
          onClick={handleTab2}
        >
          Sports Girls
        </li>
        <li
          className={activeTab === "culti" ? "active text-black" : ""}
          onClick={handleTab3}
        >
          Culti
        </li>
        <li
          className={activeTab === "techy" ? "active text-black" : ""}
          onClick={handleTab4}
        >
          Techy
        </li>
      </ul>
      <div className="schedule__display">
        {activeTab === "sportsB" ? <SportsB /> : ""}
        {activeTab === "sportsG" ? <SportsG /> : ""}
        {activeTab === "culti" ? <Culty /> : ""}
        {activeTab === "techy" ? <Techy /> : ""}
      </div>
    </div>
  );
};

export default LiveScores;
