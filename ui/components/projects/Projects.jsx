import React from "react";
import CardProject from "./CardProject";
import styles from "./projects.module.css";
import { fetchProjects } from "@/backend/data";

async function Projects() {
    const projects = await fetchProjects();
    
    return (
        <div className="container-fluid container-xl text-white project-section">
            <div className="justify-content-center">
                <h1 className="project-heading text-center">
                    Mes derniers <strong className="text-secondary">Projets</strong>
                </h1>
                <p className="text-white text-center">
                    Voici quelques projets sur lesquels j&apos;ai récemment travaillé.
                </p>
                <div className="row justify-content-center mx-0 my-5">
                    <div className="row justify-content-center mx-0 my-5">
                        {projects.map((project) => (
                            <div key={project.id} className={`col-sm-6 col-lg-4 p-4 ${styles.projectCard}`}>
                                <CardProject {...project}
                                   /* images={project.images}
                                    name={project.name}
                                    technologies={project.technologies}
                                    title={project.title}
                                    github_url={project.github_url}
                                    demo_url={project.demo_url}*/
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
