import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <div className="quote-card-view">
            <div className="card bg-transparent text-white border-0">
                <div className="card-body ">
                    <blockquote className="blockquote mb-0">
                        <p style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus voluptates distinctio, perspiciatis magni voluptatibus unde harum autem dolorem laborum quam. Nemo doloribus quibusdam itaque nam veritatis. Aspernatur neque iste ab?
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
