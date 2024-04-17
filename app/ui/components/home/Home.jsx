"use client"

import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import styles from './home.module.css';

import photo from "../../assets/logo/logo-photo.png";

function Home() {
  return (
    <section className= "mt-5 py-5" id="about">
      <div className="container-fluid">
        <div className="container">
          <div className="row my-5 py-5">
            <div className="col-md-4 ">
              <Tilt>
                <Image src={photo} className={`img-fluid`} alt="photo merzak benaissi" width={500} height={500} priority/>
              </Tilt>
            </div>
            <div className={`col-md-8 text-white`}>
              <h1 style={{ fontSize: "2.6em" }}>
                PERMETTEZ-MOI DE ME<span className="text-secondary"> PRÉSENTER </span>
              </h1>
                <p className="fs-5 my-2" style={{lineHeight: "1.5"}}> 
                    Je me suis plongé dans le monde fascinant de la programmation, et je peux dire que j&apos;ai déjà acquis une solide base, du moins je l&apos;espère… 🤷‍♂️
                    <br />
                    <br />Je suis à l&apos;aise avec l&apos;univers <i className="bg-secondary rounded px-1 text-primary"><b>JavaScript</b></i> et ses différentes bibliothèques et frameworks tel que 
                    <i className="bg-secondary rounded px-1 text-primary ms-1"><b>React</b></i>, 
                    <i className="bg-secondary rounded px-1 text-primary ms-1"><b>Next.js</b></i>,  
                    <i className="bg-secondary rounded px-1 text-primary ms-1"><b>Bootstrap</b></i>, 
                    <i className="bg-secondary rounded px-1 text-primary ms-1"><b>Sass</b></i>, 
                    <i className="bg-secondary rounded px-1 text-primary ms-1"><b>Node.js</b></i> 
                    
                    <br />
                    <br />
                    <i>
                        <b>Je suis enthousiaste à l&apos;idée de continuer à développer mes compétences et de contribuer à des projets qui repoussent les limites de la technologie web.
                        </b>
                    </i>
                    <br />
                    <br />
                </p>
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
                    <AiFillGithub className={` text-primary p-2  ${styles.icon}`} />
                  </Link>
                </li>
                <li className={` me-2 bg-secondary rounded-circle p-2 ${styles.link}`}>
                  <Link
                    href="https://twitter.com/__merzak"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsTwitterX  className={` text-primary p-2  ${styles.icon}`}/>
                  </Link>
                </li>
                <li className={` me-2 bg-secondary rounded-circle p-2 ${styles.link}`}>
                  <Link
                    href="https://www.linkedin.com/in/merzak-b-0300b9289/"
                    target="_blank"
                    rel="noreferrer"
                    className={`icon-colour home-social-icons `}
                  >
                    <FaLinkedinIn className={` text-primary p-2  ${styles.icon}`} />
                  </Link>
                </li>
              </ul>
              <p className="fs-6"> 
                N&apos;hésitez pas à me <b className="bg-white rounded p-1 text-primary"><Link href="/contact"  className="text-decoration-none">contacter</Link></b>
              </p>     
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
