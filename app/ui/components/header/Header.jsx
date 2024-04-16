"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logo from "../../assets/logo/logo.png"
import styles from './header.module.css';
import { syne } from '../../assets/fonts/fonts';
import NavLinks from './NavLinks';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMobileMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className='sticky-top'>
            <nav className={`navbar navbar-expand-lg bg-tertiary-light py-1 m-0 ${syne.className} ${isOpen ? styles.navbarOpen : ''}`}>
                <div className="container-fluid">
                    {/* Logo */}
                    <Link href="/" className="navbar-brand">
                        <Image src={logo} alt="Logo" width={60} height={60} priority />
                    </Link>

                    {/* toggle mobile button  */}
                    <button
                        className={`navbar-toggler custom-toggler ${isOpen ? styles.togglerOpen : ''}`}
                        type="button"
                        onClick={toggleMobileMenu}
                    >
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </button>

                    {/* links */}
                    <div className={`collapse navbar-collapse justify-content-lg-end ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <NavLinks closeMobileMenu={closeMobileMenu} /> 
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
