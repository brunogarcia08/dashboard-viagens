import { Link } from 'react-router-dom';
import { GiWhiteTower } from 'react-icons/gi';
import { TbSmartHome } from 'react-icons/tb';
import { RiCompassDiscoverLine } from 'react-icons/ri';
import { TbTicket } from 'react-icons/tb';
import { MdFavoriteBorder } from 'react-icons/md';
import { AiOutlineTransaction } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { useRef } from 'react';
import './MenuLateral.css';


const MenuLateral = () => {
    const LinkRef = useRef()

    function Click (event) {
        LinkRef.current.querySelector(".selected").classList.remove("selected") 
        while (event.target.tagName != "LI") {
            event.target = event.target.parentNode
        }
        event.target.classList.add("selected")
    }



    const IconStyle = {
        margin: "10px",
        width: "22px",
        heigth: "22px"
    }

    return (
        <div className='containerMenu'>
            <ul ref={ LinkRef } className='listMenuLateral'>
            <li className='Home' onClick={ Click }>
                <Link to='/Dashboard'> <GiWhiteTower size={"30px"} style={{margin: "10px"}}/> Alcazar</Link>
            </li>
            <li className='list selected' onClick={ Click }>
                <Link to='/Dashboard'> <TbSmartHome style={IconStyle}/> Dashboard</Link>
            </li>
            <li className='list' onClick={ Click }>
                <Link to='/Discover'> <RiCompassDiscoverLine style={IconStyle}/> Discover</Link>
            </li>
            <li className='list' onClick={ Click }>
                <Link to='/Tickets'> <TbTicket style={IconStyle}/> Tickets</Link>
            </li>
            <li className='list' onClick={ Click }>
                <Link to='/Favorites'> <MdFavoriteBorder style={IconStyle}/> Favorites</Link>
            </li>
            <li className='list' onClick={ Click }>
                <Link to='/Transaction'> <AiOutlineTransaction style={IconStyle}/> Transaction</Link>
            </li>
            <li className='list' onClick={ Click }>
                <Link to='/Settings'> <FiSettings style={IconStyle}/> Settings</Link>
            </li>
            </ul>
            <div className='containerLogOut'>
                <ul className='listLogOut'>
                    <li>
                        <Link to='/LogOut'> <FiLogOut style={IconStyle}/> Log Out</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuLateral;