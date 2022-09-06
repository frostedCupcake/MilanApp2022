import * as React from "react";
import "../sass/main.css";
import Section1 from "../components/Section1";
import Leaderboard from "../components/Leaderboard";
import Slider from "../components/Slider";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Section1 />
      <Leaderboard />
      <Slider />
    </div>
  );
};

export default Home;
