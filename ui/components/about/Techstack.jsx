import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { SiNextdotjs, SiTailwindcss, SiRedux } from "react-icons/si";
import { FaBootstrap, FaHtml5, FaCss3Alt, FaSass, FaFigma } from "react-icons/fa";
import styles from "./about.module.css"

function Techstack() {
    return (
        <div className="row justify-content-center">
            <div className={`${styles.techIcons} col-sm-4 col-md-2 text-center border border-3 border-secondary `} data-bs-toggle="tooltip" data-bs-placement="top" title="Javascript">
                <DiJavascript1  />
            </div>
            <div className={`${styles.techIcons} col-sm-4 col-md-2 text-center border border-3 border-secondary `} data-bs-toggle="tooltip" data-bs-placement="top" title="Nodejs">
                <DiNodejs  />
            </div>
            <div className={`${styles.techIcons} col-sm-4 col-md-2 text-center border border-3 border-secondary `} data-bs-toggle="tooltip" data-bs-placement="top" title="React">
                <DiReact  />
            </div>
            <div className={`${styles.techIcons} col-sm-4 col-md-2 text-center border border-3 border-secondary `} data-bs-toggle="tooltip" data-bs-placement="top" title="Mongodb">
                <DiMongodb  />
            </div>
            <div className={`${styles.techIcons} col-sm-4 col-md-2 text-center border border-3 border-secondary `} data-bs-toggle="tooltip" data-bs-placement="top" title="Nextjs">
                <SiNextdotjs  />
            </div>
            <div className={`${styles.techIcons} col-sm-4 col-md-2 text-center border border-3 border-secondary `} data-bs-toggle="tooltip" data-bs-placement="top" title="Git">
                <DiGit  />
            </div>
            <div className={`${styles.techIcons} col-sm-4 col-md-2 text-center border border-3 border-secondary `} data-bs-toggle="tooltip" data-bs-placement="top" title="Bootstrap">
                <FaBootstrap  />
            </div>
            <div className={`${styles.techIcons} col-sm-4 col-md-2 text-center border border-3 border-secondary `} data-bs-toggle="tooltip" data-bs-placement="top" title="Html">
                <FaHtml5  />
            </div>
            <div className={`${styles.techIcons} col-sm-4 col-md-2 text-center border border-3 border-secondary `} data-bs-toggle="tooltip" data-bs-placement="top" title="CSS">
                <FaCss3Alt  />
            </div>
            <div className={`${styles.techIcons} col-sm-4 col-md-2 text-center border border-3 border-secondary `} data-bs-toggle="tooltip" data-bs-placement="top" title="Sass">
                <FaSass  />
            </div>
            <div className={`${styles.techIcons} col-sm-4 col-md-2 text-center border border-3 border-secondary `} data-bs-toggle="tooltip" data-bs-placement="top" title="Figma">
                <FaFigma  />
            </div>
            <div className={`${styles.techIcons} col-sm-4 col-md-2 text-center border border-3 border-secondary `} data-bs-toggle="tooltip" data-bs-placement="top" title="Tailwindcss">
                <SiTailwindcss  />
            </div>
            <div className={`${styles.techIcons} col-sm-4 col-md-2 text-center border border-3 border-secondary `} data-bs-toggle="tooltip" data-bs-placement="top" title="Redux">
                <SiRedux  />
            </div>
        </div>
    );
}

export default Techstack;
