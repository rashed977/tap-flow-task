import { Img } from "../components/Img";
import { useEffect , useState} from 'react'
import Vector from "../assets/images/vector.svg";
import { Link } from 'react-router-dom';
import './SideNav.css';

export const SideNav = () => {
  const [selectedTab, updateSelected] = useState('');
  useEffect(() => {
    if(selectedTab.length == 0){

      const selected = getSelectedTab()
      updateSelected(selected)
    }
  }, []);
  const getSelectedTab = () =>{
    return localStorage.getItem('selectedItem')
  }
  const setSelected = (selected) => {
    localStorage.setItem('selectedItem', selected);
    const selectedTab = localStorage.getItem('selectedItem')
    updateSelected(selectedTab)
  }
  return (
    <div className="sidenav-cont">
      <div className={`profile ${selectedTab == `profile` ? `selected-tab` : ``}`} onClick={()=>setSelected('profile')}>
        <Img src={Vector}/>
        <Link to="/profile" className='nav-link'><h3>Profile</h3></Link>
      </div>
      <div className={`settings ${selectedTab == `settings` ? `selected-tab` : ``}`} onClick={()=>setSelected('settings')}>
        <Img src={Vector}/>
        <Link to="/settings" className='nav-link'><h3>Settings</h3></Link>
      </div>
      <div className={`friends ${selectedTab == `friends` ? `selected-tab` : ``}`} onClick={()=>setSelected('friends')}>
        <Img src={Vector}/>
        <Link to="/friends" className='nav-link'><h3>Friends</h3></Link>
      </div>
    </div>
  )
}
