import { useForm } from "react-hook-form";
import { Input } from "../components/Input";
import { Country } from "../components/Country";
import { Name } from '../components/Name';
import { Cities } from '../components/City';
import { useSelector } from 'react-redux';
import { Button } from "../components/Button";
import { Error } from "./Error";
import { setInfo } from "../Store/infoSlice";
import { useDispatch } from "react-redux";
import './Form.css';

export const Form = () => {
    const options = useSelector((state) => state);
    const uploadedImg = useSelector((state) => state.infoSlice.info.img);

    const dispatch = useDispatch();
    const { register, handleSubmit ,formState: { errors, isValid }} = useForm();
    console.log("errors",errors);
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;


    
    const onSubmit = (data) => {
        const form = new FormData();
        form.append("img", data.img[0]);
        form.append("name", data.name);
        form.append("country", data.country);
        form.append("city", data.city);
        form.append("link", data.link);
        dispatch(setInfo(form));
        const formData = {
            name: data.name,
            country: data.country,
            img: data.img,
            city: data.city,
            link: data.link,
        };
        localStorage.setItem("formData", JSON.stringify(formData));
    };
    
return (
    <form id={'generalForm'} onSubmit={handleSubmit(onSubmit)}>
        <Name register={register} name="name" message="You must enter a name"/>
        {errors.name && <Error errorMessage={errors.name.message}/>}
        <Country countries={options} register={register} name="country" message="You must select a country"/>
        {errors.country && <Error errorMessage={errors.country.message}/>}
        <Cities register={register} name="city" message="You must select a city"/>
        {errors.city && <Error errorMessage={errors.city.message}/>}
        <Input register={register} type="file" valMessage = "Image should be jpg or png" name="img" className="user-img" message="This field is required"/>
        {errors.img && <Error errorMessage={errors.img.message}/>}
        <Input register={register} type="text" regex={urlRegex} valMessage="data should be https://www.Link.com" name="link" message="This field is required" placeholder="Link" className="user-link"/>
        {errors.link && <Error errorMessage={errors.link.message}/>}
        <Button type="submit" className="submit" content="Submit"/>
    </form>
)
}
