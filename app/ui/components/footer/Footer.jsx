import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../assets/logo/logo-white-yellow.png"

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <footer className="footer bg-black text-white py-3 fs-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2  text-center">
                        <Link href="/" className="navbar-brand">
                            <Image src={logo} alt="Logo" width={60} height={60} priority/>
                        </Link>
                    </div>  
                    <div className="col-md-5 ">
                        <h3 className="fs-5 text-center">Développé par Merzak BENAISSI</h3>
                    </div>
                    <div className="col-md-3 ">
                        <h3 className="fs-5 text-center">Copyright © {year} MB</h3>
                    </div>
                    <div className="col-md-2">
                        <ul className=" d-flex justify-content-center list-unstyled fs-5 text-center">
                            <li className="me-2 md-col">
                                <Link
                                    href="https://github.com/Merzakb"
                                    style={{ color: "white" }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiFillGithub />
                                </Link>
                            </li>
                            <li className="me-2 md-col">
                                <Link
                                    href="https://twitter.com/__merzak"
                                    style={{ color: "white" }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <BsTwitterX />
                                </Link>
                            </li>
                            <li className="me-2 md-col">
                                <Link
                                    href="https://www.linkedin.com/in/merzak-b-0300b9289/"
                                    style={{ color: "white" }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
