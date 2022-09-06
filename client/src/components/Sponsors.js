import * as React from "react";
import "../sass/main.css";
import logo1 from "../assets/sponsors/Alumin.png";
import logo2 from "../assets/sponsors/gouravs.png";
import logo3 from "../assets/sponsors/sachdev.png";
import logo4 from "../assets/sponsors/sakthi's kitchen.png";
import logo5 from "../assets/sponsors/sbi.png";
import logo6 from "../assets/sponsors/Tihan.png";

const Sponsors = () => {
  return (
    <section className="sponsors">
      <h2 className="heading-secondary sponsors__heading">Sponsors</h2>
      <div class="grid grid-3">
        <div class="card">
          <h3 class="title">Alumin</h3>
          <div class="square">
            <img class="square__image" src={logo1} alt="" />
          </div>
        </div>
        <div class="card">
          <h3 class="title">gouravs</h3>
          <div class="square">
            <img class="square__image" src={logo2} alt="" />
          </div>
        </div>

        <div class="card">
          <h3 class="title">sachdev</h3>
          <div class="square">
            <img class="square__image" src={logo3} alt="" />
          </div>
        </div>
        <div class="card">
          <h3 class="title">sakthi</h3>
          <div class="square">
            <img class="square__image" src={logo4} alt="" />
          </div>
        </div>

        <div class="card">
          <h3 class="title">SBI</h3>
          <div class="square">
            <img class="square__image" src={logo5} alt="" />
          </div>
        </div>
        <div class="card">
          <h3 class="title">Tihan</h3>
          <div class="square">
            <img class="square__image" src={logo6} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
