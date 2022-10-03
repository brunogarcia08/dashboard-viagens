import './CardDoneTrip.css';


const CardDoneTrip = (props) => {

 
    return (
        <div className="cardDoneTrip">
    
          <img className='cardDoneImage' src={ props.image }/>
          <div className='dataDone'>
             <p> { props.name } </p>
             <p> {new Date(props.dateTrip).toString() } </p>
   

        </div>
        </div>
    )
}

export default CardDoneTrip;