import "./Profile.css";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Hobby } from "../components/Hobby";
import { Img } from '../components/Img';
import insta from '../assets/images/instagram-logo.png';
import { ContryInput } from "../components/ContryInput";
import facebook from '../assets/images/facebook.svg';
import youtube from '../assets/images/youtube.svg';
import tiktok from '../assets/images/tiktok.svg';
import twitter from '../assets/images/twitter.svg';

export const Profile = () => {


  return (
    <div className="profile-main-cont">
      <h3 className='text-start'>Welcome to the Profile</h3>
      <div className="section-1">

        <div className="section-info">
          <h4>Section 1</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
            recusandae alias error harum maxime adipisci amet laborum.</p>
        </div>

        <div className="information">
          <h4>Information</h4>
          <div className="inputs-cont">
            <ContryInput/>
            <ContryInput/>
            <ContryInput/>
          </div>

        </div>

        <div className="hobbies">
          <h4>Hobbies</h4>
          <div className="hobbies-cards">
            <Hobby text="Swimming"/>
            <Hobby text="Horse Back okokoko"/>
            <Hobby text="Camping"/>
          </div>
          <div>
            <Button
              type="submit"
              content="Edit"
              className="hobbies-edit"
            />
          </div>
        </div>
      </div>

      <div className="section-2">
        <h4>Section 2</h4>
        <div className="section-2-info">
        <div className="left-info">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
          obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
          nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
          tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
          quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
          sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.</p>
        </div>
        <div className="right-info">
          <div className="img-cont">
            <Img src={insta} className="insta" alt="insta-img"/>
          </div>
          <div className="img-cont">
            <Img src={facebook} alt="facebook-img"/>
          </div>
          <div className="img-cont">
            <Img src={youtube} alt="youtube-img"/>
          </div>
          <div className="img-cont">
            <Img src={tiktok} alt="tiktok-img"/>
          </div>
          <div className="img-cont">
            <Img src={twitter} alt="twitter-img"/>
          </div>
        </div>
        </div>

        <div className="upload-cont">
          <h4>Upload file</h4>
          <div className="upload">
            <div className="upload-text">
              <h4>Drop file here or click to upload</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
