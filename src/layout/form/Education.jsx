import React from 'react'
import './form.styles.css'


function Education(props) {
    const {nav, education } = props
    return (
        <div id={nav.id} className="education">
            <h2>{nav.id}</h2>
            {education.map( studies => {
              return(
                <div key={studies.id} className="box">
                    <h4>{studies.title}</h4>
                    <h5>{studies.institute}, {studies.city}|{studies.start} - {studies.end}</h5>
                    <p className="description">
                        {studies.description}
                    </p>
                </div>
              )
            })}
        </div>
    )
}

export default Education
