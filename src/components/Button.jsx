import './Button.css';

export const Button = ({type, onClick, content, className}) => {


  return (
    <button type={type} onClick={onClick} className={className}>{content}</button>
  )

}
