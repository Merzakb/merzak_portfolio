import React from "react";
import Image from 'next/image';
import Techstack from "@/ui/components/about/Techstack";
import Aboutcard from "@/ui/components/about/AboutCard";
import Toolstack from "@/ui/components/about/Toolstack";
import laptopImg from "@/ui/assets/about.png";

function AboutPage() {
  return (
    <div className="about-section text-white py-5">
      <div className="container">
        <div className="row justify-content-center align-items-center p-1">
          <div className="col-md-7">
            <h1 className="text-center pb-4 fs-1" >
              QUI <span className="fw-bold text-secondary">SUIS-JE?</span>
            </h1>
            <Aboutcard />
          </div>
          <div className="col-md-5">
            <Image src={laptopImg} alt="about" className="img-fluid"  width={450}  height={310} style={{ paddingTop: "120px", paddingBottom: "50px" }} priority />
          </div>
        </div>
        <h2 className="project-heading text-center">
          Compétences <span className="text-secondary fw-bolder">Professionnelles </span>
        </h2>
        <Techstack />
        <h2 className="project-heading text-center">
          <span className="text-secondary fw-bolder">Les outils</span> que j&apos;utilise
        </h2>
        <Toolstack />
      </div>
    </div>
  );
}

export default AboutPage;

