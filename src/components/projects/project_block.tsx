import * as React from "react"

type Props = {
    link: string;
    title: string;
    stack: string;
    description: string;
}

const ProjectBlock = ({link, title, stack, description}: Props) => {
    return (
        <div className="mb-5 xl:mb-12">
            <a href={link} target="_blank"><h2 className="text text-white text-2xl md:text-4xl xl:text-5xl">{title} {`>>>`}</h2></a>
            <p className="text text-white text-md md:text-xl xl:text-2xl mb-2">{stack}</p>
            <p className="text text-yellow-400 text-md md:text-lg xl:text-2xl">{description}</p>
        </div>
    )
}

export default ProjectBlock;