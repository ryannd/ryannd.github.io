import * as React from "react";
import { projects } from "../../globals/data";

type Props = {
    backToMenu: () => void;
}

const Projects = ({backToMenu}: Props) => {
    return (
        <div className="self-start mb-auto mt-16 md:mt-0 pb-16">
            <h1 className="text text-green-500 text-4xl md:text-5xl xl:text-6xl text-left self-start mb-2 md:mb-10 sticky top-0 py-2 md:py-0"><span onClick={backToMenu}>{`<<< `}</span>PROJECTS</h1>
            {
                projects.map((project) => {
                    return (
                        <div className="mb-5 xl:mb-12">
                            <a href={project.link} target="_blank"><h2 className="text text-white text-2xl md:text-4xl xl:text-5xl">{project.title} {`>>>`}</h2></a>
                            <p className="text text-white text-md md:text-xl xl:text-2xl mb-2">{project.stack}</p>
                            <p className="text text-yellow-400 text-md md:text-lg xl:text-2xl">{project.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Projects;