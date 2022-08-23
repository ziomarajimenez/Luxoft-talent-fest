import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./Pages/Landing Page/LandingPage";
import { Emotions } from "./Pages/Emotions/Emotions";
// import Step1 from './Pages/Step 1/Step1';
import Step3 from "./Pages/Step 3/Step3";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/emotions" element={<Emotions />} />
          {/* <Route path='/step1' element={<Step1 />} /> */}
          <Route path="/step3" element={<Step3 />} />
        </Routes>
      </BrowserRouter>
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
