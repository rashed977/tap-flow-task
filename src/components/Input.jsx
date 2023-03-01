import './Input.css';

export const Input = ({type, placeholder, className , register , name, message, regex, valMessage }) => {
  
  return (
    <input type={type} placeholder={placeholder} className={className} name={name}  {...register && register(name, { required: message,  pattern: { value: regex, message: valMessage }, validate: {
      validFileType: (value) => {
        if (typeof(value) == typeof('string')){
          return
        }else{
          const fileType = value[0].type.split("/")[1];
          return fileType === "jpg" || fileType === "jpeg" || fileType === "png" || valMessage;
        }
       
      },
    },
    })}/>
    )
  } 
