import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const Cities = ({name, register, message}) => {

    const [cities, setCities] = useState([]);
    const [selectedCities, setSelectedCities] = useState([]);
  
  const countryName = useSelector((state) => state.countryName.countryName);
  const countries = useSelector((state) => state.countries.countries.data);

  useEffect(()=>{
    if(countryName){
      const citiesOfCountry = countries.filter((obj => obj.country === countryName));
      setCities(citiesOfCountry[0].cities);
      console.log(cities , 'fromlllllllll');
    }
    setSelectedCities([])
  },[countryName])

  const handleChange = (e) => {
    const { target: { value }, } = e;
    setSelectedCities(typeof value === 'string' ? value.split(',') : value)
  };

  return (
    <div>
      <FormControl sx={{ width: 300 , mt:1 }}>
        <InputLabel id="demo-multiple-checkbox-label">Cities</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          {...register && register(name, { required: message })}
          value={selectedCities}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          name={name}
          MenuProps={MenuProps}>
          {cities.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selectedCities.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
  }
