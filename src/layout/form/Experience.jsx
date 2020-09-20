import React from 'react'

function Experience(props) {
    const { name, experiences} = props;
    return (
        <div id="experience" className="experience">
            <h2>{name.id}</h2>
            {experiences.map( experience => {
                return( 
                    <div key={experience.id} className="box">
                        <h4>{experience.title}</h4>
                        <h5>{experience.company} | 
                            {experience.start} - 
                            <i>{experience.end}</i>
                        </h5>
                        <p>{experience.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Experience
