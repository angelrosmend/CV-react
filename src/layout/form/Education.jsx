import React from 'react'
import './form.styles.css'


function Education() {
    return (
        <div id="education" className="education">
            <h2>Education</h2>
            <div className="box">
            <h4>Professional Full-Stack Developer</h4>
            <h5>Universidad Tecnologica Nacional, CABA | February 2020 - July 2020</h5>
            <p className="description">
                This diplomat course is meant to teach its participants to apply and
                adapt the knowledge in web programming to the single-page
                applications (SPA) development using ReactJS advantages such as
                building large-scale applications with data that changes repeatedly
                over time while also boosting its productivity and making it easy to
                maintain. 
            </p>
            </div>
            <div className="box">
                <h4>English as a foreign Language</h4>
                <h5>Centro Venezolano Americano, Caracas | 2015 - 2016</h5>
                <p>This course focuses on taking English basic knowledge up to a high
                    level, where the student is able to maintain a fluent conversation,
                    write and read proficiently.
                </p>
            </div>
            <div className="box">
                <h4>Anthropology</h4>
                <h5>Universidad Central de Venezuela, Caracas | 2013 - 2015</h5>
                <p>Scientific studies of humankind general aspects such as language,
                   culture, biology, and society.</p>
            </div>
        </div>
    )
}

export default Education
