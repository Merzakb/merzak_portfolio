import React from "react";
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiVercel,
    SiGithub
} from "react-icons/si";
import styles from "./about.module.css"

function Toolstack() {
    return (
        <div className="row justify-content-center pb-5">
            <div className={`${styles.techIcons} col-sm-4 col-md-2 text-center border border-3 border-secondary `} data-bs-toggle="tooltip" data-bs-placement="top" title="VSCode">
                <SiVisualstudiocode  />
            </div>
            <div className={`${styles.techIcons} col-sm-4 col-md-2 text-center border border-3 border-secondary `} data-bs-toggle="tooltip" data-bs-placement="top" title="Postman">
                <SiPostman  />
            </div>
            <div className={`${styles.techIcons} col-sm-4 col-md-2 text-center border border-3 border-secondary `} data-bs-toggle="tooltip" data-bs-placement="top" title="Vercel">
                <SiVercel  />
            </div>
            <div className={`${styles.techIcons} col-sm-4 col-md-2 text-center border border-3 border-secondary `} data-bs-toggle="tooltip" data-bs-placement="top" title="Slack">
                <SiSlack  />
            </div>
            <div className={`${styles.techIcons} col-sm-4 col-md-2 text-center border border-3 border-secondary `} data-bs-toggle="tooltip" data-bs-placement="top" title="Github">
                <SiGithub  />
            </div>
        </div>
    );
}

export default Toolstack;
