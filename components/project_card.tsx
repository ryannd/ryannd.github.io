import Image from "next/image"
import { titleFont } from "../globals/fonts"
import StackBadge from "./experience/stack_badge";

interface Project {
    cover: string;
    name: string;
    year: string;
    tech_stack: string[];
    link: string;
}

export default function ProjectCard({ project } : {project: Project}) {
    return <>
        <div className="">
            <a href={project.link} target="_blank">
                <Image
                    src={project.cover}
                    alt={`${project.name} cover image`}
                    width={1920}
                    height={1080}
                    className="aspect-video object-fill shadow-2xl shaddow-inner border-2"
                />
            </a>
            <div className="flex flex-col justify-center items-start mt-4">
                <h1 className={`${titleFont.className} text-xl`}>{project.year}</h1>
                <h1 className={`${titleFont.className} text-2xl`}>{project.name}</h1>
                <div className="flex flex-wrap gap-2 mt-2">
                {
                    project.tech_stack.map((text) => {
                        return <StackBadge key={text} text={text} />
                    })
                }
                </div>
            </div>
        </div>
    </>
}