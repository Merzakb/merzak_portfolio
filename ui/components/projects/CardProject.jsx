import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import Image from 'next/image';
import Link from 'next/link';
import styles from "./projectCard.module.css"
import { syne } from '@/ui/assets/fonts/fonts';


function ProjectCards({name, title, technologies, github_url, demo_url, createdat, projectcard}) {
    // Supprimer les espaces du nom
    const formattedName = name.replace(/\s+/g, '-');

    //formated date
    function formatDate(dateString) {
        const options = { month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
    }
    const formattedDate = formatDate(createdat);
    
    return (
        <div className={`card ${styles.projectCardView}`}>
           <Image src={projectcard} alt={`image de la page d'accueil du projet ${name}`} width={300} height={300} priority className="card-img-top rounded-top p-md-3"/>
            <div className="card-body row">
                <h2 className={`card-title text-uppercase text-secondary fw-bold mb-0 ${syne.className}`}>{name}</h2>
                <p className="text-tertiary fs-6 pt-0 mt-0 mb-3">{formattedDate}</p>
                <p className="card-text fs-5">{title}</p>
                <div className="text-start my-2">
                    {technologies.map((tech, index) => (
                        <span key={index} className="badge bg-white text-primary me-2 mb-2">
                            {tech.charAt(0).toUpperCase() + tech.slice(1)}
                        </span>
                    ))}
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                    {github_url && (
                        <div className={`mt-2`}>
                            <a 
                                href={github_url} 
                                className={`btn btn-secondary text-primary fw-bold ${styles.link}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                                &nbsp; {"Github"}
                            </a>
                        </div>
                    )}
                    {demo_url && (
                        <div className="ms-2 mt-2">
                            <a
                                href={demo_url}
                                className={`btn btn-secondary text-primary fw-bold ${styles.link}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <CgWebsite />
                                &nbsp; {"Demo"}
                            </a>
                        </div>
                    )}
                </div>
                <div className="mt-5 text-end align-self-end">
                    <Link href={`/projects/${formattedName}`}  className={`btn btn-light text-black  ${styles.link}`}>
                        plus d&apos;infos...
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectCards;
