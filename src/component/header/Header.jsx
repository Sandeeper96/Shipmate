import React from 'react'
import './Header.css'
import bgimage from '../../images/background.jpeg'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='header'>
    {/* <img src={bgimage} alt="img" srcset="" /> */}
        <div className='logo'>
            <h3 className='black'>Ship</h3><h3 className='blue'>mate</h3>
        </div>
        {/* <div className='btn-login'> */}
        <Link to='/second'>
        
        <button type="button" id='login' className="btn-login"
              >Login</button>
              </Link>
              <button type="button" id='learn' className="btn-learn">Learn More</button>
        {/* </div> */}
    </div>
  )
}

export default Header