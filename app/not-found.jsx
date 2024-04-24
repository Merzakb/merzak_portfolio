import React from 'react'
import Link from 'next/link';


function NotFound() {
    return (
        <div className="notFound text-white d-flex flex-column align-items-center justify-content-center">
            <p className="notFound__paragraph1 text-secondary">404</p>
            <p className="notFound__paragraph2">Oups! La page que vous demandez n&apos;existe pas.</p>
            <Link href="/" className="notFound__paragraph3 text-tertiary">Retourner sur la page d&apos;accueil</Link>
        </div>
    )
}

export default NotFound
