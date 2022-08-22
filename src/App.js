import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from './Pages/Landing Page/LandingPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path='/home' element={<LandingPage />} />
          <Route path='/emotions' />
        </Routes>
      </BrowserRouter>
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
