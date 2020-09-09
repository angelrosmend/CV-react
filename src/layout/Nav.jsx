import React from 'react'
import '../css/styles.css'
import photo from '../img/photo.jpeg'

function Nav() {
    return (
        <div className='nav'>
            <figure className='photo'>
                <img src={photo}/>
            </figure>
            <ul className='links'>
                <li className="link"><a href="#">ABOUT</a></li>
                <li className="link"><a href="#">EXPERIENCE</a></li>
                <li className="link"><a href="#">EDUCATION</a></li>
                <li className="link"><a href="#">SKILLS</a></li>
                <li className="link"><a href="#">INTERESTS</a></li>
            </ul>
            
        </div>
    )
}

export default Nav
