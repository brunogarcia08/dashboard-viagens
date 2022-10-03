import Calendar from 'react-calendar';
import { useState, useEffect } from 'react'; 
import './LateralRight.css'
import 'react-calendar/dist/Calendar.css';
import CardDoneTrip from './CardDoneTrip';
import LoginData from './LoginData';



const LateralRight = () => {

    const [ value, setValue] = useState(new Date());
    const [done, setDone] = useState([]);

    function SearchDone () {
        fetch('http://localhost:3000/done-trip')
        .then((data) => data.json())
        .then((response) => setDone(response))
    }

    useEffect(() => {
        SearchDone()

    }, [])

    return (
        <div className='containerLateralRight'>
            <div className='loginData'>
                <LoginData/>

            </div>
            <div className='Calendar'>
                <Calendar onChange={setValue} value={value}/>
            </div>
            <div className='footerLateralRight'>
                <div>
                    <div className='titleDone'>
                        <h2 >Done Trip</h2>

                    </div>
                    <div className='done'>
                        { done.map( index => <CardDoneTrip {...index}/>) }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LateralRight;