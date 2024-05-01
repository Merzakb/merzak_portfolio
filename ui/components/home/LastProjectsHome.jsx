import React from "react";
import Link from 'next/link';
import { IoMdArrowRoundForward } from "react-icons/io";
import HomeProjectCard from "./HomeProjectCard";
import { fetchRecentProjects } from "@/backend/data";
import styles from './home.module.css';

async function LastProjectsHome() {
    const projects = await fetchRecentProjects();
    const recentProjects = projects.slice(0, 3); 

    return (
        <div className="container-fluid container-xl text-white  py-5 my-5 mx-0 px-0">
            <div className="justify-content-center px-0">
                <h1 className="text-center">
                    Mes derniers <strong className="text-secondary">Projets</strong>
                </h1>
               <div className=" container-fluid my-3">
                    <div className="row justify-content-center">
                        {recentProjects.map((project) => (
                            <div className="col-md-6 col-xxl-3" key={project.id}>
                                <HomeProjectCard   {...project} />
                            </div>
                        ))}
                    </div>
               </div>
                <p className={`text-end pe-md-5 me-md-5  `}>
                    <span className={`btn fw-bolder bg-secondary rounded p-1 ${styles.link}`}><Link href="/projects"  className={`text-decoration-none text-primary`}>plus de projets <IoMdArrowRoundForward /></Link></span>
                </p>
            </div>
        </div>
    );
}

export default LastProjectsHome
