
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MenuLateral from './Components/MenuLateral'
import Dashboard from './Pages/Dashboard'
import Discover from './Pages/Discover'
import Settings from './Pages/Settings'
import Transaction from './Pages/Transaction'
import Tickets from './Pages/Tickets'
import Favorites from './Pages/Favorites'
import './Components/MenuLateral.css'
import LogOut from './Pages/LogOut'
import LateralRight from './Components/LateralRight'

function App() {
 

  return (
    <div className="App">
      <div className='Options'>
        <MenuLateral/>
      </div>
      <div className='Main'>
       <Routes>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/Discover' element={<Discover/>}/>
          <Route path='/Tickets' element={<Tickets/>}/>
          <Route path='/Favorites' element={<Favorites/>}/>
          <Route path='/Transaction' element={<Transaction/>}/>
          <Route path='/Settings' element={<Settings/>}/>
          <Route path='/LogOut' element={<LogOut/>}/>
       </Routes>
       </div>
       <div className='LateralRight'>
        <LateralRight/>
       </div>
   </div>
  )
}

export default App;
