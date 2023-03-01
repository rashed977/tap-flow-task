import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countryName: "",
  };
  
  const countrySlice = createSlice({
    name: "CountryName",
    initialState,
    reducers: {
      setCountry: (state, action) => {
        state.countryName = action.payload;
      },
    },
  });
  
    export const { setCountry } = countrySlice.actions;
    export default countrySlice.reducer;