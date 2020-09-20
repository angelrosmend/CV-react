import React,{useContext} from 'react'
import './form.styles.css'
import About from './About'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import Interests from './Interests'
import LanguageContext from '../../context/LanguageContext'

function Form() {
    const { language } = useContext(LanguageContext)
    const { about, experiences, education, interests, navlinks } = language
    const [Ab, Exp, Ed, Sk, Int] = navlinks

    
    return (
        <div className="form-wrapper">
            <About about={about}/>
            <Experience name={Exp} experiences={experiences}/>
            <Education name={Ed} education={education}/>
            <Skills name={Sk}/>
            <Interests name={Int}interests={interests}/>
        </div>
    )
}

export default Form
