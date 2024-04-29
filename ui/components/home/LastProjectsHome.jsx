import React from "react";
import Link from 'next/link';
import CardProject from "@/ui/components/projects/CardProject";
import styles from "@/ui/components/projects/projects.module.css";
import { fetchRecentProjects } from "@/backend/data";

async function LastProjectsHome() {
    const projects = await fetchRecentProjects();
    const recentProjects = projects.slice(0, 3); 

    return (
        <div className="container-fluid container-xl text-white project-section py-5 my-5 mx-0 px-0">
            <div className="justify-content-center px-0">
                <h1 className="project-heading text-center">
                    Mes derniers <strong className="text-secondary">Projets</strong>
                </h1>
                <div className="row justify-content-center m-0">
                    <div className="row justify-content-center mx-0 my-2">
                        {recentProjects.map((project) => (
                            <div key={project.id} className={`col-sm-12 col-md-6 col-xl-4 my-4 p-md-4 ${styles.projectCard}`}>
                                <CardProject {...project} />
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-end">
                    <span className={`btn fw-bolder bg-white rounded p-1`}><Link href="/projects"  className={`text-decoration-none text-primary`}>Découvrir plus de projets...</Link></span>
                </p>
            </div>
        </div>
    );
}

export default LastProjectsHome
