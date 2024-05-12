
import React from 'react'
import Projects from '@/ui/components/projects/Projects'
import Search from '@/ui/components/Search';
import { fetchAllTechnologies} from "@/backend/data";


export const metadata = {
    title: 'Projets',
};

const Page = async  ({searchParams}) => {
    const technologies = await fetchAllTechnologies()
    const query = searchParams?.query || '';
    return (
        <div className='mt-5 py-5'>
            <div className="container-fluid container-xl text-white project-section">
                <div className="justify-content-center">
                    <h1 className="project-heading text-center">
                        Mes <strong className="text-secondary">Projets</strong>
                    </h1>
                    <p className="text-white text-center">
                        Voici quelques projets sur lesquels j&apos;ai récemment travaillé.
                    </p>
                    <div className='mt-5'>
                        <Search technologies={technologies} />
                    </div>
                    
                    {/* <TechnologyFilter /> */}
                    <Projects query={query} />
                </div>
            </div>  
        </div>
    )
}

export default Page
