import { configureStore } from "@reduxjs/toolkit";
import countries from './countrySlice';
import countryName from './countryNameSlice';
import infoSlice from "./infoSlice";

export default configureStore({
    reducer: {
        countries,
        countryName,
        infoSlice
    }
})
