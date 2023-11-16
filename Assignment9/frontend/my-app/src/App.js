import './App.css';
import Login from './Login/login';
import Home from './Pages/Home/Home';
import Jobs from './Pages/Jobs/Jobs';
import About from './Pages/AboutUs/About';
import Contact from './Pages/Contact/Contact';
import {BrowserRouter, Router, Route, Routes } from "react-router-dom";
import MainPage from './Main/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link}from "react-router-dom"
import List from './Pages/Layout/List';

function App() {
  return (
    <BrowserRouter>
        {<MainPage/>}
        <Routes>
            <Route path = "/" element = {<Login/>}></Route>
            <Route path = "/home" element = {<Home/>}></Route>
            <Route path = "/about" element = {<About/>}></Route>
            <Route path = "/jobs" element = {<Jobs/>}></Route>
            <Route path = "/contact" element = {<Contact/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
