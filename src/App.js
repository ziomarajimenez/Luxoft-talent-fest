import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from './Pages/Landing Page/LandingPage'
import { Emotions } from './Pages/Emotions/Emotions'
import { Description } from './Pages/Description/Description'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<LandingPage />} />
          <Route path='/emotions' element={<Emotions />} />
          <Route path='/description' element={<Description />} />
          {/* <Route path='/step1' element={<Step1 />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
