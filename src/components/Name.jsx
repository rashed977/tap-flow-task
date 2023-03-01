import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Name = ({name, message, register}) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {  width: '300px' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField id="outlined-basic" label="Name" variant="outlined" {...register && register(name, { required: message })} />
    </Box>
    );
}