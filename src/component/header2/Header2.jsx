import React from 'react'

function Header2() {
  return (
    <div className='header'>
    {/* <img src={bgimage} alt="img" srcset="" /> */}
        <div className='logo'>
            <h3 className='black'>Ship</h3><h3 className='blue'>mate</h3>
        </div>
        {/* <div className='btn-login'> */}
        <button type="button" className="btn-dollor"
              >Login</button>
              <button type="button" id='learn' className="shipment">Learn More</button>
        {/* </div> */}
    </div>
  )
}

export default Header2