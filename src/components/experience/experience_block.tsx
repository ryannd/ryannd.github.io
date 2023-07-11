import * as React from "react";

type Props = {
    company: string;
    title: string;
    dates: string;
    description: string;
}

const ExperienceBlock = ({company, title, dates, description}: Props) => {
    return (
        <div className="mb-5 xl:mb-12">
            <h2 className="text text-white text-2xl md:text-4xl xl:text-5xl">{company}</h2>
            <p className="text text-white text-md md:text-xl xl:text-2xl">{title}</p>
            <p className="text text-white text-sm md:text-lg xl:text-xl mb-2">{dates}</p>
            {description.split('\n').map((line) => <p className="text text-yellow-400 text-md md:text-xl xl:text-2xl">{line}</p>)}
        </div>
    )
}

export default ExperienceBlock;