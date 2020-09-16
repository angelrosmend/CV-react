import React from 'react'
import './nav.styles.css'
import photo from '../../img/photo.jpeg'
import SwitchLanguages from '../../components/SwitchLanguages'

function Nav() {
    return (
        <div className='nav'>
            <figure className='photo'>
                <img src={photo}/>
            </figure>
            <ul className='links'>
                <li className="link"><a href="#about">ABOUT</a></li>
                <li className="link"><a href="#experience">EXPERIENCE</a></li>
                <li className="link"><a href="#education">EDUCATION</a></li>
                <li className="link"><a href="#skills">SKILLS</a></li>
                <li className="link"><a href="#interests">INTERESTS</a></li>
            </ul>  
            <SwitchLanguages/>
        </div>
    )
}

export default Nav