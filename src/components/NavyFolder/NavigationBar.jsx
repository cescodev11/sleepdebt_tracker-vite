import {useState} from 'react'
import './Navbar.css'

const NavigationBar = () => {

  const [isOpen, setisOpen] = useState(false); 
  
  return (
    <nav className='navbar'>
      <div className='web-logo'>Web Logo</div>
      <button className='hamburgerIcon' onClick={()=> setisOpen(!isOpen)}></button>
      <ul className={`nav-links ${isOpen ? 'active': ''}`}>

        <li><a href="">View Hours</a></li>
        <li><a href="">Log New Hours</a></li>


      </ul>
    </nav>
  )
}

export default NavigationBar;