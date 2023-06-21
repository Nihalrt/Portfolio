import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faC, faSquare } from '@fortawesome/free-solid-svg-icons';

const About = () => {


    return(
        <>
        <div className="container about-page">
            <div className='text-zone'>

                <h1>
                    <AnimatedLetters
                    strArray = {['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                    idx = {15}>
                        
                    </AnimatedLetters>
                     
                </h1>

                <p>As an experienced web developer with proficiency in HTML, CSS, and JavaScript, I am seeking a role in an innovative company that prioritizes continuous learning. My commitment to staying up-to-date with the latest trends allows me to create high-quality websites and applications. I am eager to contribute to a collaborative and dynamic work environment.</p>

                <p>I am confident, curious and perpetually working on improving my skills</p>
                <p></p>


            </div>

            <div className="stage-cube-cont">
                <div className='cubespinner'>
                    <div className="face1">
                        <FontAwesomeIcon icon={faPython} color="#DD0031"></FontAwesomeIcon>

                    </div>
                    
                    <div className="face2">
                        <FontAwesomeIcon icon={faReact} color="#F06529"></FontAwesomeIcon>

                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faC} color="#28A4D9"></FontAwesomeIcon>

                    </div>

                    <div className="face4">
                        <FontAwesomeIcon icon={faHtml5} color="#5ED4F4"></FontAwesomeIcon>

                    </div>

                    <div className="face5">
                        <FontAwesomeIcon icon={faCss3} color="#EFD81D"></FontAwesomeIcon>

                    </div>

                    <div className="face6">
                        <FontAwesomeIcon icon={faJava} color="#EC4D28"></FontAwesomeIcon>

                    </div>


                </div>



            </div>
        </div>
        </>
        
    )
}

export default About;