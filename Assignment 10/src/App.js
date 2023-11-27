import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Weather from './components/Weather';
import HourlyWeather from './components/HourlyWeather';


function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Weather />} />
    <Route path="/:day" element={<HourlyWeather />} />
    </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
