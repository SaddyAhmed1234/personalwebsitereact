import { useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Aos from "aos";
import AppIcon from "./components/AppIcon";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import colors from "./colors";

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
