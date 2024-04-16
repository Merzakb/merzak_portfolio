"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import logo from "../../assets/logo/logo.png"
import styles from './header.module.css';
import {  syne } from '../../assets/fonts/fonts';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return (
        <header>
            <nav className={`navbar navbar-expand-lg bg-tertiary-light py-1 sticky-top m-0 ${syne.className} ${isOpen ? styles.navbarOpen : ''}`}>
                <div className="container-fluid">
                    {/* Logo */}
                    <Link href="/" className="navbar-brand">
                        <Image src={logo} alt="Logo" width={60} height={60} priority/>
                    </Link>
    
                    {/* Bouton de toggle pour mobile */}
                    <button
                    className={`navbar-toggler custom-toggler ${isOpen ? styles.togglerOpen : ''}`}
                    type="button"
                    onClick={toggleMenu}
                    >
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    </button>
    
                    {/* Liens */}
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className={`navbar-nav ms-auto fs-5 ${styles.navLinks}`}>
                        <li className="nav-item">
                        <Link href="/" className={`nav-link text-primary rounded px-4 ${styles.linkHover}` }>
                            <FaHome /> Accueil
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link href="/about" className={`nav-link text-primary rounded px-4 ${styles.linkHover}` }>
                            <IoPerson /> A Propos
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link href="/projects" className={`nav-link text-primary rounded px-4 ${styles.linkHover}` }>
                            <AiOutlineFundProjectionScreen /> Projets
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link href="/resume" className={`nav-link text-primary rounded px-4 ${styles.linkHover}` }>
                            <IoDocumentTextOutline /> Mon CV
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link href="/contact" className={`nav-link text-primary rounded px-4 ${styles.linkHover}` }>
                            <MdContactMail /> Contact
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
