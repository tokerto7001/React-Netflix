import React from 'react'

function Header() {
    return (
        <div className='navbar'>
            <div className='navbar-image-div'><img className='netflix' src='netflix.png' alt='netflix-logo' /></div>
            <div className='navbar-navigations-div'>
                <h1>About</h1>
                <h1>Contact</h1>
                <i className="fas fa-user-alt fa-2x"></i>
            </div>
        </div>
    )
}

export default Header
