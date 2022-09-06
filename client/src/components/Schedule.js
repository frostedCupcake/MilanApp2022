import * as React from "react";
import "../sass/main.css";
import Culti from "../components/culti/Schedule";
import Techy from "../components/techy/Schedule";
import Sports from "../components/sports/Schedule";

const Schedule = () => {
  const [activeTab, setActiveTab] = React.useState("sports");
  const handleTab1 = () => {
    setActiveTab("sports");
  };
  const handleTab2 = () => {
    setActiveTab("culti");
  };
  const handleTab3 = () => {
    setActiveTab("techy");
  };
  return (
    <div className="Tabs2 events">
      <h2 className="heading-secondary leaderboard__heading">Schedule</h2>
      <ul className="nav2">
        <li
          className={activeTab === "sports" ? "active" : ""}
          onClick={handleTab1}
        >
          Sports
        </li>
        <li
          className={activeTab === "culti" ? "active" : ""}
          onClick={handleTab2}
        >
          Culty
        </li>
        <li
          className={activeTab === "techy" ? "active" : ""}
          onClick={handleTab3}
        >
          Techy
        </li>
      </ul>
      <div className="schedule__display">
        {activeTab === "sports" ? <Sports /> : ""}
        {activeTab === "culti" ? <Culti /> : ""}
        {activeTab === "techy" ? <Techy /> : ""}
      </div>
    </div>
  );
};

export default Schedule;
