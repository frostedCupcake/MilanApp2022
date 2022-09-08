import * as React from "react";
import "../sass/main.css";
import teamData from "./MembersList";

const ImageDiv = (props) => {
  return (
    <div className="members__block">
      <img className="members__photo" src={props.image} alt="" />
      <h3 className="heading-teritiary members__name">{props.name}</h3>
    </div>
  );
};

const Members = () => {
  return (
    <div className="members">
      <div className="members__container">
        <div>
          <h2 className="heading-secondary members__heading main  overall">
            Overall coordinator
          </h2>
          <ImageDiv image={teamData.Minhaz_Nawas} name="Minhaz" />
        </div>
        <h2 className="heading-secondary members__heading main">Heads</h2>
        <div>
          <h2 className="heading-secondary members__heading">
            Sponsorship and Finance
          </h2>

          <ImageDiv image={teamData.sreejith} name="Sreejith R R" />
        </div>
        <div>
          <h2 className="heading-secondary members__heading">
            Hospitality and Infrastructure
          </h2>
          <ImageDiv image={teamData.stephen} name="Stephen VS" />
          <ImageDiv image={teamData.sreevani} name="C Sreevani" />
          <ImageDiv image={teamData.anurag} name="M Anurag" />
        </div>
        <div>
          <h2 className="heading-secondary members__heading">Creatives</h2>
          <ImageDiv image={teamData.govind} name="Govind Pal" />
          <ImageDiv image={teamData.viren} name="Viren Soni" />
          <ImageDiv image={teamData.rishit} name="Rishit Singh" />
        </div>

        <div>
          <h2 className="heading-secondary members__heading">
            Web Development and Management
          </h2>
          <ImageDiv image={teamData.ajay} name="Ajay Patel" />
          <ImageDiv image={teamData.arun} name="Arun S" />
        </div>
        <div>
          <h2 className="heading-secondary members__heading">Multimedia</h2>
          <ImageDiv image={teamData.ramanathan} name="Ramanathan" />
          <ImageDiv image={teamData.uday} name="Uday Ratna" />
        </div>
        <div>
          <h2 className="heading-secondary members__heading">
            Event & Pronites
          </h2>
          <ImageDiv image={teamData.hadiAfnan} name="Hadi Afnan" />
          <ImageDiv image={teamData.ahinraj} name="Ahinraj MS" />
          <ImageDiv image={teamData.divyaM} name="Divya M" />
          <ImageDiv image={teamData.nabeelM} name="Nabeel M" />
          <ImageDiv image={teamData.ravindra} name="Ravinder" />
        </div>
        <h2 className="heading-secondary members__heading main">
          Coordinators
        </h2>
        <div>
          <h2 className="heading-secondary members__heading">
            Sponsorship and Finance
          </h2>
          <ImageDiv image={teamData.harish} name="Harish M" />
          <ImageDiv image={teamData.aman} name="Aman J" />
          <ImageDiv image={teamData.mayuri} name="C Mayuri" />
          <ImageDiv image={teamData.rishi} name="Rishi Kumar" />
          <ImageDiv image={teamData.Diva} name="Diva J" />
          <ImageDiv image={teamData.manikanta} name="Manikanta" />
          <ImageDiv image={teamData.mayur} name="J Mayur" />
          <ImageDiv image={teamData.pradeep} name="Pradeep M" />
        </div>
        <div>
          <h2 className="heading-secondary members__heading">
            Hospitality and Infrastructure
          </h2>
          <ImageDiv image={teamData.sujith} name="Sujith Reddy" />
          <ImageDiv image={teamData.riyaann} name="Riya Ann" />
          <ImageDiv image={teamData.bharath} name="C Bharath" />
          <ImageDiv image={teamData.shravya} name="K Shravya" />
          <ImageDiv image={teamData.akshat} name="Akshat J" />
          <ImageDiv image={teamData.kartik} name="Kartik" />
          <ImageDiv image={teamData.hiya} name="Hiya Mehta" />
          <ImageDiv image={teamData.vishwajith} name="Vishwajith" />
          <ImageDiv image={teamData.dhatri} name="Dhatri Reddy" />
          <ImageDiv image={teamData.harishankar} name="Harishankar" />
          <ImageDiv image={teamData.sreeya} name="Sreeya T" />
          <ImageDiv image={teamData.pushkal} name="Pushkal M" />
        </div>
        <div>
          <h2 className="heading-secondary members__heading">Creatives</h2>
          <ImageDiv image={teamData.siriS} name="Siri S" />
          <ImageDiv image={teamData.pragya} name="Pragya Y" />
          <ImageDiv image={teamData.adheena} name="Adheena" />
          <ImageDiv image={teamData.chaitanya} name="M Chaitanya" />
          <ImageDiv image={teamData.loukik} name="Loukik" />
          <ImageDiv image={teamData.gatikrushna} name="Gatikrushna" />
          <ImageDiv image={teamData.aayush} name="Aayush P" />
        </div>

        <div>
          <h2 className="heading-secondary members__heading">
            Web Development and Management
          </h2>
          <ImageDiv image={teamData.suryaansh} name="Suryaansh J" />
          <ImageDiv image={teamData.surya} name="Surya Sudeep" />
          <ImageDiv image={teamData.ritik} name="Ritik Pal" />
          <ImageDiv image={teamData.jaswanth} name="Jaswanth" />
          <ImageDiv image={teamData.bhanu} name="Bhanu Teja" />
        </div>
        <div>
          <h2 className="heading-secondary members__heading">Multimedia</h2>
          <ImageDiv image={teamData.uttej} name="Uttej" />
          <ImageDiv image={teamData.pranav} name="Pranav V" />
          <ImageDiv image={teamData.aravind} name="Aravind S" />
          <ImageDiv image={teamData.sathvika} name="Sathvika M" />
          <ImageDiv image={teamData.sanaAnesha} name="Sana Anesha" />
        </div>
        <div>
          <h2 className="heading-secondary members__heading">
            Event & Pronites
          </h2>
          <ImageDiv image={teamData.BRohit} name="B Rohit" />
          <ImageDiv image={teamData.BAnvitha} name="Blessy Anvitha" />
          <ImageDiv image={teamData.abhishek} name="Abhishek G" />
          <ImageDiv image={teamData.shubham} name="Shubham M" />
          <ImageDiv image={teamData.shreyas} name="Shreyas W" />
          <ImageDiv image={teamData.suryaTeja} name="SURYA TEJA" />
          <ImageDiv image={teamData.dheeraj} name="Dheeraj" />
          <ImageDiv image={teamData.dhanushikaa} name="Dhanushika" />
          <ImageDiv image={teamData.subiksha} name="Subiksha G" />
          <ImageDiv image={teamData.yashRamteke} name="Yash Ramteke" />
          <ImageDiv image={teamData.nanda} name="Nanda M" />
          <ImageDiv image={teamData.mouktika} name="Mouktika" />
          <ImageDiv image={teamData.gaurang} name="Gaurang D" />
          <ImageDiv image={teamData.raniKR} name="Rani K R" />
          <ImageDiv image={teamData.abhayKumar} name="Abhay Kumar" />
          <ImageDiv image={teamData.anusha} name="Anusha" />
          <ImageDiv image={teamData.rohitS} name="Rohit S" />
          <ImageDiv image={teamData.krithik} name="Krithik M" />
          <ImageDiv image={teamData.kaustubh} name="Kaustubh G" />
          <ImageDiv image={teamData.jayBhanushali} name="Bhanushali" />
          <ImageDiv image={teamData.kanak} name="Kanak Lohiya" />
          <ImageDiv image={teamData.jalaPrajash} name="Jala Prajash" />
        </div>
      </div>
    </div>
  );
};

export default Members;
