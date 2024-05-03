"use client"

import React from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search({ technologies }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (term) => {
        const params = new URLSearchParams(searchParams);

        // Vérifier si la technologie est déjà présente dans l'URL
        const isTechnologyInUrl = params.get('query') === term;

        if (isTechnologyInUrl) {
            // Si la technologie est déjà présente, supprimer-la de l'URL
            params.delete('query');
        } else {
            // Sinon, ajouter la technologie à l'URL
            params.set('query', term);
        }

        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="container d-flex justify-content-center flex-wrap">
            {technologies.map((technology, index) => (
                <button
                    key={index}
                    onClick={() => handleSearch(technology)}
                    className={searchParams.get('query') === technology ? 'active btn btn-secondary m-1' : 'btn btn-light m-1'}
                >
                    {technology}
                </button>
            ))}
        </div>
    );
}
