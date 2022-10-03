import './CardTravel.css';
import { HiLocationMarker } from 'react-icons/hi';

const CardTravel = (props) => {

 
    return (
        <div className="cardTravel">
          <img className='cardTravelImage' src={ props.image }/>
          <div className='dataCard'>
            <p> { props.name } </p>
            <p> { props.agency } </p>
          </div>
            <p> <HiLocationMarker className='locationIcon'/> { props.location }</p>
            <p className='price'> $ { props.price } </p>
        </div>
    )
}

export default CardTravel;