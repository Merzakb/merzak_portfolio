"use client"

import React from 'react'
import { BiError } from "react-icons/bi";

const Error = () => {
    return (
        <div className="text-white px-3 py-5 px-md-5 row justify-content-center">
            <p className="notFound__paragraph1 text-danger text-center "><BiError className='text-center m-auto'/></p>
            <p className="notFound__paragraph2 text-center text-danger" >Une erreur est survenue !</p>
            <p className="fs-5 text-center">Impossible de récupérer les données des projets. <br/> Veuillez réessayer ultérieurement !</p>
        </div>
    )
}

export default Error

