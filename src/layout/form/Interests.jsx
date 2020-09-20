import React from 'react'

function Interests(props) {
    const {nav, interests } = props
    return (
        <div id={nav.id} className="interests">
            <h2>{nav.id}</h2>
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
