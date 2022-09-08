import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Members from "./components/Members";
import Sponsors from "./components/Sponsors";
import Schedule from "./components/Schedule";
import Events from "./components/Events";
import "./css/tabs/tab_group1.css";
import "./css/tabs/tab_group2.css";

function App() {
  return (
    <div className="App">
      <Router basename="/milan">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/members" element={<Members />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
