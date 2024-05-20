import Image from "next/image"
import { titleFont } from "../globals/fonts"
import StackBadge from "./experience/stack_badge";
import { FaExternalLinkAlt } from "react-icons/fa";
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
            <div className="relative group">
                <a href={project.link} target="_blank" className="absolute inset-0 z-10 bg-black text-4xl text-center flex items-center justify-center opacity-0 hover:opacity-100 bg-opacity-40 duration-300">
                    <h1 className={`${titleFont.className} flex gap-4`} >Github <FaExternalLinkAlt /></h1> 
                </a>
                <Image
                    src={project.cover}
                    alt={`${project.name} cover image`}
                    width={1920}
                    height={1080}
                    className="transition ease-in-out duration-200 grayscale group-hover:grayscale-0 aspect-video object-fill shadow-2xl shaddow-inner border-2 blur-none group-hover:blur-[2px]"
                />
            </div>
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