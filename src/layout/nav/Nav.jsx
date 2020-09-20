import React,{useContext} from 'react'
import './nav.styles.css'
import photo from '../../img/photo.jpeg'
import SwitchLanguages from '../../components/SwitchLanguages'
import LanguageContext from '../../context/LanguageContext'

const Nav = () => {
   const { language } = useContext(LanguageContext)
   const { navlinks } = language

    return (
        <div className='nav'>
            <figure className='photo'>
                <img src={photo}/>
            </figure>
            <ul className='links'>
               {navlinks.map( navlink => {
                    return(<li className="link" key={navlink.id}>{navlink.id}</li>)
                })}
            </ul>  
            <SwitchLanguages/>
        </div>
    )
}

export default Nav


/*
  <li className="link"><a href="#experience">EXPERIENCE</a></li>
                <li className="link"><a href="#education">EDUCATION</a></li>
                <li className="link"><a href="#skills">SKILLS</a></li>
                <li className="link"><a href="#interests">INTERESTS</a></li>
*/