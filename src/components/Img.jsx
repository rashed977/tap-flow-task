import './Img.css';

export const Img = ({src, alt, className}) => {
  return (
        <img src={src} alt={alt} className={className}/>
  )
}
