import { useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Aos from "aos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { animateScroll as Scroll, Element } from "react-scroll";
import Scrollbar from "react-smooth-scrollbar";

function App() {
  useEffect(() => {
    Aos.init({
      // offset: 200,
      duration: 600,
      easing: "ease-in-out-sine",
      // delay: 100,
    });
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
