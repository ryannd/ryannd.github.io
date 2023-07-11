import * as React from "react"
import { workExperience } from "../../globals/data";
import PageTitle from "../page_title";
import ExperienceBlock from "./experience_block";

type Props = {
    backToMenu: () => void;
}

const Experience = ({backToMenu}: Props) => {
    return (
        <div className="self-start mb-auto md:mb-24 mt-16 md:mt-0 pb-16">
            <PageTitle title="EXPERIENCE" backToMenu={backToMenu}/>
            {
                workExperience.map((job) => {
                    return (
                        <ExperienceBlock  company={job.company} dates={job.dates} description={job.description} title={job.title} key={job.title}/>
                    )
                    
                })
            }
        </div>
    )
}

export default Experience;