import Mood from "./components/Mood/forms";
import Features from "./components/Mood/features";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter className="App">
        <Routes>
          <Route path='' element={<Mood />} />
          <Route path='api/moods/:id' element={<Features />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
