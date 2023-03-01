import './Hobby.css';

export const Hobby = ({text}) => {
  return (
    <div className='hobby-cont'>
        <div className='text-cont'>
            <h4>{text}</h4>
        </div>
    </div>
  )
}
