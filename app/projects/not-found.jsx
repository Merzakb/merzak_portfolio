import React from 'react'
import Link from 'next/link';

function NotFound() {
    return (
        <div className="text-white px-3 py-5 px-md-5 row justify-content-center">
            <p className="notFound__paragraph1 text-danger text-center ">404</p>
            <p className="notFound__paragraph2 text-center text-danger ">Oups! le projet que vous cherchez n&apos;existe pas.</p>
            <p className="text-tertiary text-center"><Link href="/projects" className="text-tertiary notFound__paragraph3">Retourner sur la page des projets</Link></p>
        </div>
    )
}

export default NotFound
