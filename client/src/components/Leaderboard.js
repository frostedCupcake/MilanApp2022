import * as React from "react";
import "../sass/main.css";
import Tabs from "../tabs/TabComponents/tab_group1";

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <h3 className="heading-secondary leaderboard__heading">
        overall Leaderboard
      </h3>
      <Tabs />
    </div>
  );
};

export default Leaderboard;
