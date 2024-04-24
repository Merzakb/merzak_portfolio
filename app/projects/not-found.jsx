import React from 'react'
import Link from 'next/link';

function NotFound() {
    return (
        <div className="notFound text-white d-flex flex-column align-items-center justify-content-center">
            <p className="notFound__paragraph1 text-secondary">404</p>
            <p className="notFound__paragraph2">Oups! le projet que vous cherchez n&apos;existe pas.</p>
            <Link href="/projects" className="notFound__paragraph3 text-tertiary">Retourner sur la page des projets</Link>
        </div>
    )
}

export default NotFound
