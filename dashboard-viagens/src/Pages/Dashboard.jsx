import './Dashboard.css'
import { BiSearchAlt } from 'react-icons/bi'
import { GoSettings } from 'react-icons/go'
import { useEffect, useState } from 'react'
import CardTravel from '../Components/CardTravel'
import CardMost from '../Components/CardMost'
import { BuscadorTraveling } from '../Services/BuscadorTraveling'

const Dashboard = () => {
    const [travel, setTravel] = useState([]);
    const [most, setMost] = useState([]);

    function SearchTravel () {
        fetch('http://localhost:3000/traveling')
        .then((data) => data.json())
        .then((response) => setTravel(response))
    }

    function SearchMost () {
        fetch('http://localhost:3000/most-popular')
        .then((data) => data.json())
        .then((response) => setMost(response))
    }

    useEffect(() => {
        SearchTravel()
        SearchMost()

    }, [])

    function BuscarTravel(event) {
        event.preventDefault()
        const name = event.target["search-destination"].value
        BuscadorTraveling(name)
        .then(response => console.log(response))
    }

    return (
        <div>
           <h1>Hello, Brother Jow!</h1>
            <p>Welcome back and explore the wolrd</p>
            <br/>
            <form className='searchForm' onSubmit={BuscarTravel}>
                <BiSearchAlt className='searchIcon'/>
                <input  type="text" name="search-destination" id="search-destination" placeholder='Search for your favorite destination'/>
                <button className='btnSettings'><GoSettings size={"18px"}/></button>
                <button className='btnSearch' type='submit'>Search</button>
            </form> 
            <div className='travelPlaning'>
                <h2 className='titleTravelPlaning'>Traveling by Plane</h2>
                <div className='travel'>
                    { travel.map( index => <CardTravel {...index}/>) }
                </div>
            </div>

            <div className='mostPopular'>
                <h2 className='titleMost'>Most Popular</h2>
                <div className='most'>
                    { most.map( index => <CardMost {...index}/>) }
                </div>

            </div>
        </div>
    )
}

export default Dashboard;