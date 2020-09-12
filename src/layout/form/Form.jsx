import React from 'react'
import './form.styles.css'
import About from './About'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import Interests from './Interests'

function Form() {
    return (
        <div className="form-wrapper">
            <About/>
            <Experience/>
            <Education/>
            <Skills/>
            <Interests/>
        </div>
    )
}

export default Form
