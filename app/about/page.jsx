import React from "react";
import Image from 'next/image';
import Techstack from "@/ui/components/about/Techstack";
import Aboutcard from "@/ui/components/about/AboutCard";
import Toolstack from "@/ui/components/about/Toolstack";
import  Github  from "@/ui/components/about/Github";
import laptopImg from "@/ui/assets/about.png";

function AboutPage() {
    return (
        <div className="container about-section text-white px-0 my-5 py-5">
            <div className=" row gy-5 m-0">
                <section className="row justify-content-center align-items-center px-2 px-md-5">
                    <div className="col-md-7">
                        <h1 className="text-center pb-4 fs-1" >
                        QUI <span className="fw-bold text-secondary">SUIS-JE?</span>
                        </h1>
                        <Aboutcard />
                    </div>
                    <div className="col-md-5">
                        <Image src={laptopImg} alt="about" className="img-fluid"  width={450}  height={310} style={{ paddingTop: "120px", paddingBottom: "50px" }} priority />
                    </div>
                </section>
                <section className="px-5">
                    <h2 className="project-heading text-center">
                    Compétences <span className="text-secondary fw-bolder">Professionnelles </span>
                    </h2>
                    <Techstack />
                </section>
                <section className="px-5">
                    <h2 className="project-heading text-center">
                        <span className="text-secondary fw-bolder">Les Outils</span> que j&apos;utilise
                    </h2>
                    <Toolstack />
                </section>
                <section className="px-3 px-md-5">
                    <h2 className="project-heading text-center pb-3">
                        Quand je <span className="text-secondary fw-bold" > Code ?</span>
                    </h2>
                    <Github />
                </section>
            </div>
        </div>
    );
}

export default AboutPage;

