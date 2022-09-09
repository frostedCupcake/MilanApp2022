import React, { useState } from "react";
import FirstTab from "../overall/leaderboard";
import SecondTab from "../overall/racebar";

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
  return (
    <div className="Tabs">
      <div className="outlet">
        <FirstTab />
      </div>
    </div>
  );
};
export default Tabs;
