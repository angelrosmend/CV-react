import React,{useContext} from 'react'
import './nav.styles.css'
import photo from '../../img/photo.jpeg'
import SwitchLanguages from '../../components/SwitchLanguages'
import LanguageContext from '../../context/LanguageContext'

const Nav = () => {
   const { language } = useContext(LanguageContext)
   const { navlinks } = language;

    return (
        <div className='nav'>
            <figure className='photo'>
                <img src={photo}/>
            </figure>
            <ul className='links'>
               {navlinks.map( navlink => {
                    return(<li className="link" key={navlink.id}><a href={`#${navlink.id}`}>{navlink.id}</a></li>)
                })}
            </ul>  
            <SwitchLanguages/>
        </div>
    )
}

export default Nav
