import React from 'react'
import Projects from '@/ui/components/projects/Projects'

export const metadata = {
    title: 'Projets',
};

const Page = () => {
    return (
        <div className='mt-5 py-5'>
            <Projects />
        </div>
    )
}

export default Page
