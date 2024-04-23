import { fetchProjectByName } from '@/backend/data' 
import Image from 'next/image'
import Link from 'next/link';
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FaArrowLeft } from "react-icons/fa";
import { notFound } from 'next/navigation'
import styles from './page.module.css'

async function projectDetailsPage({params})  {
    // Transforme le slug en nom de projet réel
    const transformFromSlug = (slug) => {
        return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    // Obtenez le nom du projet du paramètre d'URL
    const slug = params.name
    const name = transformFromSlug(slug);
    
    const project = await fetchProjectByName(name)

    if (!project) {
        notFound()
    } 

    return (
        <div className='container-fluid row justify-content-center py-5'>
           <div>
                <Link href="/projects" className='bg-secondary rounded-circle p-2'>
                        <span className="visually-hidden-focusable">Retour</span>
                        < FaArrowLeft className='text-primary' />
                </Link>
           </div>
            <article  className='container my-5 row justify-content-center col-sm-11 col-lg-10'>
                <div className={`card mb-5 p-0 border-0`} >
                    <div className="row bg-dark">
                        <div  className={`${styles.cardImage} col-md-6 bg-dark row justify-content-center`}>
                            <Image src={project.images[0]}  alt="card-img" width={400} height={320} priority className='bg-dark'/>
                        </div>
                        <div className={`${styles.cardBody} col-md-6 bg-dark text-white`}>
                            <div className="card-body">
                                <h1 className="card-title text-uppercase text-secondary fw-bold">{project.name}</h1>
                                <h2 className="card-text">{project.title}</h2>
                                <div className="text-start my-2">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="badge bg-tertiary text-primary me-2 mb-2">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="d-flex flex-wrap justify-content-end">
                                    <div className="mt-2">
                                        <a 
                                            href={project.github_url} 
                                            className="btn btn-secondary text-primary fw-bold" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <AiFillGithub />
                                            &nbsp; {"Github"}
                                        </a>
                                    </div>
                                    {project.demo_url && (
                                        <div className="ms-2 mt-2">
                                            <a
                                                href={project.demo_url}
                                                className="btn btn-secondary text-primary fw-bold" 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <CgWebsite />
                                                &nbsp; {"Demo"}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.descriptions} bg-white fs-5`}>
                    <h2 className='text-primary'>Context du projet</h2>
                    <p className='text-black'>{project.description}</p>
                </div>
            </article>
        </div>
    )
}

export default projectDetailsPage