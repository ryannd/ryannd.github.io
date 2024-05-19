import Image from "next/image"
import { textFont, titleFont } from "../globals/fonts"

interface Project {
    cover: string;
    name: string;
    year: string;
    tech_stack: string;
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
                    <h1 className={`${titleFont.className}`}>{project.year}</h1>
                    <h1 className={`${titleFont.className}`}>{project.name}</h1>
                    <p className={`${textFont.className}`}>{project.tech_stack}</p>
            </div>
        </div>
    </>
}