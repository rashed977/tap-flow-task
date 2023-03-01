import Logo from ".././assets/images/logo.svg";
import Search from ".././assets/images/search.svg";
import './Header.css';
import { Img } from "./Img";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export const Header = () => {

  const handleClick = () => {
    console.log('rashed');
}
  return (
    <div className="header-cont">
        <div className="header">
            <div className='header-logo'>
                <Img src={Logo}/>
            </div>
            <div className='header-search'>
                <Input type="text" placeholder="Search" className="header-input"/>
                <Button type="submit" onClick={handleClick} className="header-btn" content={<Img src={Search}/>}/>
            </div>
        </div>
    </div>
  )
}
