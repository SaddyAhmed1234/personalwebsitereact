import { useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Aos from "aos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { animateScroll as Scroll, Element } from "react-scroll";
import Scrollbar from "react-smooth-scrollbar";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Router>
      <div>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
