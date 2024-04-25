import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <div className="quote-card-view">
            <div className="card bg-transparent text-white border-0">
                <div className="card-body ">
                    <blockquote className="blockquote mb-0">
                        <p className="fs-5 lh-md" >
                            Bonjour à tous, je suis <span className="text-secondary">Merzak BENAISSI </span>
                            et je réside à <span className="text-secondary"> Strasbourg</span>, en France.
                            <br />
                            Récemment diplômé de la formation d&apos;intégrateur web chez OpenClassrooms, j&apos;ai acquis des compétences solides dans le domaine du développement web.
                            <br />
                            Je suis désormais à la recherche d&apos;une opportunité professionnelle en tant que développeur web frontend.
                            <br />
                            <br />
                            <span className="fst-italic fw-bolder">Je suis passionné par l&apos;idée de continuer à développer mes compétences et de contribuer à des projets innovants qui repoussent les limites de la technologie web.</span> 
                            <br />
                            <br />
                            A part coder, quelques activités que j&apos;aime faire!
                        </p>
                        <ul>
                            <li className="about-activity">
                                <ImPointRight /> Apprendre de nouvelles compétences encore et encore...🤷‍♂️
                            </li>
                            <li className="about-activity">
                                <ImPointRight /> Voyager
                            </li>
                            <li className="about-activity">
                                <ImPointRight /> Lire 
                            </li>
                        </ul>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}

export default AboutCard;
