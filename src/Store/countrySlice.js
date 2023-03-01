import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getCountries = createAsyncThunk('countries/fetch', async(_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
        const res = await axios.get('https://countriesnow.space/api/v0.1/countries')
        // console.log("res,",res.data.data);;
        return res.data;
    }
    catch (err){
        return rejectWithValue(err.message);
    }
    
});

const countrySlice = createSlice({
    name: "countries",
    initialState: {
        countries: [],
        isLoading: false,
        error: null
},
extraReducers: {
    [getCountries.pending]: (state, action) => {
        state.isLoading = true;
        state.error = null;
    },
    [getCountries.fulfilled]: (state, action) => {
        state.isLoading = false;     
        state.countries = action.payload;
    },
    [getCountries.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },
}});

export default countrySlice.reducer;