
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from './Pages/Landing Page/LandingPage'
import { Emotions } from './Pages/Emotions/Emotions'
// import Step1 from './Pages/Step 1/Step1';
import { Step2Mandala } from './Pages/Step 2 - Mandala/Step2-Mandala'


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes >
          <Route path='/' element={<LandingPage />} />
          <Route path='/emotions' element={<Emotions />} />
          {/* <Route path='/step1' element={<Step1 />} /> */}
          <Route path= '/step2-not' element={<Step2Mandala />} />
        </Routes>
      </BrowserRouter>
      {/* <LandingPage /> */}

    </div>
  );
}

export default App;
