import React, { Suspense } from "react";
import CardProject from "./CardProject";
import { fetchFilteredProjects} from "@/backend/data";
import Spinner from "@/ui/components/spinner/Spinner";

async function Projects({query}) {
    const filteredProjects = await fetchFilteredProjects(query)
    
    return (
        <div className="row justify-content-center mx-0">
            <div className="row justify-content-center mx-0 my-5">
                {filteredProjects.map((project) => (
                    <div key={project.id} className={`col-sm-6 col-xl-4 p-4`}>
                        <Suspense fallback={<Spinner />}>
                            <CardProject {...project}/>
                        </Suspense>
                    </div>
                ))}
            </div>
        </div>
            
    );
}

export default Projects;
