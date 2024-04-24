"use client"

import React from 'react'
import { BiError } from "react-icons/bi";

const Error = () => {
    return (
        <div className="notFound text-white d-flex flex-column align-items-center justify-content-center">
            <p className="notFound__paragraph1 text-secondary"><BiError /></p>
            <p className="notFound__paragraph2">Une erreur est survenue !</p>
            <p className="fs-3 text-tertiary">Impossible de récupérer les données des projets. <br/> Veuillez réessayer ultérieurement !</p>
        </div>
    )
}

export default Error
