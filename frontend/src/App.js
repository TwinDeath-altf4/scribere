import NotePage from "./Components/Pages/Note.page";
import WeatherPage from "./Components/Pages/Weather.page";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Weather" element={<WeatherPage />}/>
          <Route path="/Note" element={<NotePage />}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
