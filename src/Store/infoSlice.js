import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info: {
        name: "",
        country: "",
        city: [],
        img: null,
        link: ""
    },
  };
  
  const infoSlice = createSlice({
    name: "info",
    initialState,
    reducers: {
      setInfo: (state, action) => {
        state.info = {
            name: action.payload.get("name"),
            country: action.payload.get("country"),
            city: action.payload.get("city"),
            img: action.payload.get("img"),
            link: action.payload.get("link")
        };
      },
    },
  });
  
export const { setInfo } = infoSlice.actions;
export default infoSlice.reducer;