import React from 'react'


function About(props) {
 const {nav, about} = props;
 const {name, title, addrese, phone, email, description } = about;
    return (
            <div id={nav.id} className="about" >
            <h1>{name}</h1>
            <h3>{title}</h3>

            <div className="info">
            <h5><i className="fas fa-house-user"></i>  {addrese}</h5>
            <h5><i className="fas fa-mobile-alt"></i>   {phone}</h5>
            <h5><i className="fas fa-envelope-open-text"></i> {email}</h5>

            <p>{description}</p>
            </div>

            <ul className="contact">
                <li className="icon">
                    <a className="contact-icon" href="https://www.linkedin.com/in/angelrosmend" target='_blank' rel="noopener noreferrer" ><i  className="fab fa-linkedin-in"></i></a>
                </li>
                <li className="icon">
                <a className="contact-icon" href="https://github.com/angelrosmend" target='_blank' rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                </li>
                <li className="icon">
                    <a className="contact-icon" href="https://gitlab.com/angelrosmend" target='_blank' rel="noopener noreferrer"><i className="fab fa-gitlab"></i></a>
                </li>
                <li className="icon">
                <a className="contact-icon" href="https://www.instagram.com/angelrosmend" target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </li>
            </ul>
        </div>
    )
}

export default About
