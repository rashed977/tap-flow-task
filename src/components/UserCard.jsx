import './UserCard.css';
import { useSelector } from 'react-redux';
import { Img } from './Img';
import { Fragment } from 'react';


export const UserCard = () => {
    const userData = useSelector((state) =>state.infoSlice.info);
    const uploadedImg = useSelector((state) => state.infoSlice.info.img);
    console.log(userData, 'from card');
  return (
    <Fragment>{uploadedImg &&

        <div className="card">
        <div className="card-img">
        <Img src={URL.createObjectURL(uploadedImg)} alt="user-card" className="user-card-img"/>
        </div>
        <div className="card-info">
        <div>
        <h4>Name: {userData.name}</h4>
        <h4>Country: {userData.country}</h4>
        <h4>Cities: {userData.city}</h4>
        <h4>Link: {userData.link}</h4>
        </div>
        </div>
        </div>
    }
    </Fragment>
  )
}
// {uploadedImg && <img src={URL.createObjectURL(uploadedImg)} />}