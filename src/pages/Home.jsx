// import { Route , Routes } from "react-router-dom";
import './Home.css';
import { Header } from "../components/Header";
import { Profile } from "../pages/Profile";
import { Settings } from "../pages/Settings";
import { Friends } from "../pages/Friends";
import { SideNav } from "../pages/SideNav";
import { Route, Routes } from 'react-router-dom';

export const Home = () => {
  return (
    
      <div className='main'>
        <Header/>
        <div className="main-cont">
          <SideNav/>
          <Routes>
          <Route exact path="/" element={<Profile/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
        </div>
      </div>

    )
  }
