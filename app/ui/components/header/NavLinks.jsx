import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import styles from './header.module.css';

const links = [
    { name: 'Accueil', href: '/', icon: FaHome },
    { name: 'À Propos', href: '/about', icon: IoPerson },
    { name: 'Projets', href: '/projects', icon: AiOutlineFundProjectionScreen },
    { name: 'Mon CV', href: '/resume', icon: IoDocumentTextOutline },
    { name: 'Contact', href: '/contact', icon: MdContactMail },
];

export default function NavLinks({closeMobileMenu}) {
    const pathname = usePathname();
    return (
        <ul className={`navbar-nav  ${styles.navLinks}`}>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <li key={link.name} className="nav-item  ">
                        <Link
                            onClick={closeMobileMenu}
                            href={link.href}
                            className={clsx(
                                'nav-link text-primary rounded px-2 mx-2 mb-md-3 fs-5 fs-5',
                                styles.linkHover,
                                { 'bg-secondary': pathname === link.href }
                            )}
                        >
                            <LinkIcon className="me-2" />
                            <span>{link.name}</span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
