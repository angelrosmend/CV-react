import React from 'react'
import './form.styles.css'
import About from './About'
import Experience from './Experience'

function Form() {
    return (
        <div className="form-wrapper">
            <About/>
            <Experience/>
            <div id="education" className="education"></div>
            <div id="skills" className="skills"></div>
            <div id="interests" className="interests"></div>  
        </div>
    )
}

export default Form
