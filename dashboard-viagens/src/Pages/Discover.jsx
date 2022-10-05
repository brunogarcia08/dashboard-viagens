import './Discover.css'
import { useEffect, useState } from 'react'
import CardTravel from '../Components/CardTravel'

const Discover = () => {
    const [discover, setDiscover] = useState([]);

    function SearchDiscover () {
        fetch('http://localhost:3000/destinations')
        .then((data) => data.json())
        .then((response) => setDiscover(response))
    }

    
    useEffect(() => {
        SearchDiscover()
        
    }, [])

    return (
     <div className="discovercontainer">
        <h2>Discover</h2>
        <div className="discover">
            { discover.map( index => <CardTravel {...index}/>) }
        </div>
     </div>
            
        
    )
}

export default Discover;