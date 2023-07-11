import * as React from "react";
import { projects } from "../../globals/data";
import PageTitle from "../page_title";
import ProjectBlock from "./project_block";

type Props = {
    backToMenu: () => void;
}

const Projects = ({backToMenu}: Props) => {
    return (
        <div className="self-start mb-auto mt-16 md:mt-0 pb-16">
            <PageTitle title="PROJECTS" backToMenu={backToMenu}/>
            {
                projects.map((project) => {
                    return <ProjectBlock description={project.description} link={project.link} stack={project.stack} title={project.title} key={project.title}/>
                })
            }
        </div>
    )
}

export default Projects;