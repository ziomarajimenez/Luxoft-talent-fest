import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from './Pages/Landing Page/LandingPage'
import { Emotions } from './Pages/Emotions/Emotions'
import { Description } from './Pages/Description/Description'
import { Words } from './Pages/Words/Words';
import { Step1 } from './Pages/Step 1/Step1'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<LandingPage />} />
          <Route path='/emotions' element={<Emotions />} />
          <Route path='/description' element={<Description />} />
          <Route path='/words' element={<Words />} />
          <Route path='/step1' element={<Step1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
