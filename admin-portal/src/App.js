import Selection from "./components/Selection";

function App() {
  const sportsList = [
    "esports",
    "lawn tennis",
    "hockey",
    "table tennis",
    "volleyball",
    "cricket",
    "badminton",
    "football",
    "basketball",
    "dodgeball",
    "carrom",
    "chess",
    "athletics",
    "aquatics",
    "weightlifting",
    "squash",
  ];
  return (
    <div>
      <Selection sportsList={sportsList} />
    </div>
  );
}

export default App;
