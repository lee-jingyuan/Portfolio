import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import WRORobot from "./Pages/WRORobot";
import NOI from "./Pages/NOI";
import EVO from "./Pages/EVO";
import FLL from "./Pages/FLL";
import Runs from "./Pages/Runs";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/robot" element={<WRORobot />} />
        <Route path="/FLL" element={<FLL/>} />
        <Route path="/EVO" element={<EVO/>} />
        <Route path="/NOI" element={<NOI />} />
        <Route path="/runs" element={<Runs />} />
      </Routes>
    </HashRouter>
  );
};

export default App;