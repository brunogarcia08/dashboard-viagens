import './CardMost.css';
import { HiLocationMarker } from 'react-icons/hi';

const CardMost = (props) => {

 
    return (
        <div className="cardMost">
          <img className='cardMostImage' src={ props.image }/>
          <div className='dataMost'>
            <div>
                <p> { props.name } </p>
                <p> <HiLocationMarker className='locationIcon'/> { props.location } </p>

            </div>
            <p className='priceMost'> $ { props.price } </p>
          </div>
        </div>
    )
}

export default CardMost;