import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import styles from "./homeprojectcard.module.css"
import { syne } from '@/ui/assets/fonts/fonts';


function HomeProjectCard({name, title, projectcard}) {
    // Supprimer les espaces du nom
    const formattedName = name.replace(/\s+/g, '-');

    return (
       <div className={`${styles.card} card border-0 col`}>
            <Link href={`/projects/${formattedName}`}>
                <Image src={projectcard} alt="card-img" width={500} height={500} priority className={`${styles.card__image}`} />
                <div className={`${styles.card__overlay}`}>
                    <div  className={`${styles.overlay__text} p-3 text-center text-black fw-bold `}>
                        <h2 className={`card-title text-uppercase text-dark fs-1 fw-bold mb-5 d-none d-sm-block ${syne.className}`}>{name}</h2>
                        <p className="my-5">{title}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default HomeProjectCard;
