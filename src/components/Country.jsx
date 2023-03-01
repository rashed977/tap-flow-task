import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { setCountry } from '../Store/countryNameSlice';
import { useEffect, useState } from 'react';

export const Country = ({countries, name, register, message}) => {
  const options = countries.countries.countries.data;
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

    const handleChange = (e) => {
      dispatch(setCountry(e.target.value));
      setValue(e.target.value);
  };

  
  return (
    <Box sx={{ minWidth: 300, paddingTop:1}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          name={name}
          {...register && register(name, { required: message })}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Country"
          onChange={(e) => handleChange(e)}
        >
        {options && options.map((option, index)=>(
            <MenuItem key={index} value={option.country}>{option.country}</MenuItem>
        ))}
        </Select>
    </FormControl>
    </Box>
    );
}

