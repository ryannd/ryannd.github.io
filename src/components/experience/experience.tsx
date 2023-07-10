import * as React from "react"
import { workExperience } from "../../globals/data";

type Props = {
    backToMenu: () => void;
}

const Experience = ({backToMenu}: Props) => {
    return (
        <div className="self-start mb-auto md:mb-24 mt-16 md:mt-0 pb-16">
            <h1 className="text text-green-500 text-4xl md:text-5xl xl:text-6xl text-left self-start mb-2 md:mb-10 sticky top-0 py-2 md:py-0"><span onClick={backToMenu}>{`<<< `}</span>EXPERIENCE</h1>
            {
                workExperience.map((job) => {
                    return (
                        <div className="mb-5 xl:mb-12">
                            <h2 className="text text-white text-2xl md:text-4xl xl:text-5xl">{job.company}</h2>
                            <p className="text text-white text-md md:text-xl xl:text-2xl">{job.title}</p>
                            <p className="text text-white text-sm md:text-lg xl:text-xl mb-2">{job.dates}</p>
                            {job.description.split('\n').map((line) => <p className="text text-yellow-400 text-md md:text-xl xl:text-2xl">{line}</p>)}
                        </div>
                    )
                    
                })
            }
        </div>
    )
}

export default Experience;