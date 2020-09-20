import React from 'react'

function Skills({nav}) {
    return (
        <div id={nav.id} className="skills">
            <h2>{nav.id}</h2>
            <div className="skills-icon">
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-sass"></i>
            <i className="fab fa-js-square"></i>
            <i className="fab fa-react"></i>
            <i className="fab fa-vuejs"></i>
            <i className="fab fa-angular"></i>
            <i className="fab fa-node"></i>
            <i className="fab fa-npm"></i>
            <i className="fab fa-git"></i>
            </div>
        </div>
    )
}

export default Skills
