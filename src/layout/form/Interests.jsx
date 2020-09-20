import React from 'react'

function Interests(props) {
    const {name, interests } = props
    return (
        <div id="interests" className="interests">
            <h2>{name.id}</h2>
            {interests.map( interest => {
                return(
                    <div key={interest.id} className="box">
                    <h4>{interest.title}</h4>
                    <p>{interest.description}</p>
                </div>
                )
            })}
            
        </div>
    )
}

export default Interests
