
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getCountries } from "../Store/countrySlice";
import './Settings.css';
import { Form } from '../components/Form';
import { UserCard } from '../components/UserCard';

export const Settings = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);


  return (
    <div className="settings-main-cont">
      <h3 className='text-start'>User Settings</h3> 
      <UserCard/>
        <div className="information">
          <h4>Information</h4>
          <div className="inputs-cont">
            <Form />
          </div>
        </div>

      
    </div>
  )
}
