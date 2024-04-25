"use client"

import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import styles from './home.module.css';

import photo from "../../assets/logo/logo-white-yellow.png";

function Home() {
    return (
        <section className= "pb-5" id="about">
            <div className="container-fluid">
                <div className="container">
                    <div className="row mb-5">
                        <div className={`col-md-8 text-white text-wrap order-md-1`}>
                            <h1 style={{ fontSize: "2.6em" }}>
                                PERMETTEZ-MOI DE ME<span className="text-secondary"> PRÉSENTER </span>
                            </h1>
                            <p className="fs-5 my-2 text-break lh-base"> 
                                Je me suis plongé dans le monde fascinant de la programmation, et je peux dire que j&apos;ai déjà acquis une solide base, du moins je l&apos;espère… 🤷‍♂️
                                <br />
                                <br />
                                Je suis à l&apos;aise avec l&apos;univers <span className="fst-italic fw-bolder bg-secondary rounded px-1 text-primary">JavaScript</span> et ses différentes bibliothèques et frameworks tel que <span className="fst-italic fw-bolder bg-secondary rounded px-1 text-primary ms-1">React</span>, <span className="fst-italic fw-bolder bg-secondary rounded px-1 text-primary ms-1">Next.js</span>, <span className="fst-italic fw-bolder bg-secondary rounded px-1 text-primary ms-1">Bootstrap</span>, <span className="fst-italic fw-bolder bg-secondary rounded px-1 text-primary ms-1">Sass</span>, <span className="fst-italic fw-bolder bg-secondary rounded px-1 text-primary ms-1">Node.js</span>... 
                            </p>
                        </div>
                        <div className="col-md-4 order-md-0">
                            <Tilt>
                                <Image src={photo} className={`img-fluid`} alt="logo merzak" width={500} height={500} priority/>
                            </Tilt>
                        </div>
                    </div>
                    <div className="row">
                        <div className={`col-md-12 d-flex flex-column text-center justify-content-center text-white `}>
                            <h1>TROUVEZ MOI SUR</h1>
                            <ul className="d-flex justify-content-center list-unstyled">
                                <li className={` me-2 bg-secondary rounded-circle p-2 ${styles.link}`}>
                                <Link
                                    href="https://github.com/Merzakb"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="visually-hidden-focusable">Github</span>
                                    <AiFillGithub className={` text-primary p-2  ${styles.icon}`} />
                                </Link>
                                </li>
                                <li className={` me-2 bg-secondary rounded-circle p-2 ${styles.link}`}>
                                <Link
                                    href="https://twitter.com/__merzak"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="visually-hidden-focusable">Twitter</span>
                                    <BsTwitterX  className={` text-primary p-2  ${styles.icon}`}/>
                                </Link>
                                </li>
                                <li className={` me-2 bg-secondary rounded-circle p-2 ${styles.link}`}>
                                <Link
                                    href="https://www.linkedin.com/in/merzak-b-0300b9289/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="visually-hidden-focusable">Linkedin</span>
                                    <FaLinkedinIn className={` text-primary p-2  ${styles.icon}`} />
                                </Link>
                                </li>
                            </ul>
                            <p className="fs-6"> 
                                N&apos;hésitez pas à me <span className={`fw-bolder bg-white rounded p-1 ${styles.link}`}><Link href="/contact"  className={`text-decoration-none text-primary`}>contacter</Link></span>
                            </p>     
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
