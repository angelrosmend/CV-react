import React from 'react'

function About() {
    return (
        <div className="about" id="about">
            <h1>ANGEL ROSALES</h1>
            <h3>Full-stack developer</h3>

            <div className="info">
            <p className="addrese"><i class="fas fa-house-user"></i>  Aristobulo del valle 1013, Buenos Aires</p>
            <p className="phone"><i class="fas fa-mobile-alt"></i>  +54 112044586</p>
            <p className="email"><i class="fas fa-envelope-open-text"></i>  angelrosmend@gmail.com</p>

            <p className="about-me">Experienced Web Developer adept in an assortment of skills focused
                mainly on JavaScript technologies such as ReactJS, Vue, Redux,
                NodeJS, Express and MongoDB</p>
            </div>

            <ul className="contact">
                <li className="icon">
                    <a className="contact-icon" href="#"><i  class="fab fa-linkedin-in"></i></a>
                </li>
                <li className="icon">
                <a className="contact-icon" href="#"><i class="fab fa-github"></i></a>
                </li>
                <li className="icon">
                   <a className="contact-icon" href="#"><i class="fab fa-gitlab"></i></a>
                </li>
                <li className="icon">
                <a className="contact-icon" href="#"><i class="fab fa-facebook"></i></a>
                </li>
            </ul>
        </div>
    )
}

export default About
