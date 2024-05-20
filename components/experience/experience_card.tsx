import { subtitleFont, textFont, titleFont } from "../../globals/fonts";
import StackBadge from "./stack_badge";

interface Experience {
    company: string;
    years: string;
    titles: string[];
    description: string;
    tech_stack: string[];
}

export default function ExperienceCard({ experience }: { experience: Experience }) {
    return <>
        <div>
            <p className={`${textFont.className}`}>{experience.years}</p>
        </div>
        <div className="col-span-4 lg:col-span-3">
            <h1 className={`${titleFont.className} text-2xl`}>{experience.company}</h1>
            {
                experience.titles.map((title) => {
                    return <p className={`${textFont.className}`} key={title}>{title}</p>
                })
            }
            <p className={`${subtitleFont.className} text-lg mt-3 leading-1`}>{experience.description}</p>
            <div className="flex flex-wrap mt-3 gap-3">
                {
                    experience.tech_stack.map((text) => {
                        return <StackBadge key={text} text={text} />
                    })
                }
            </div>
        </div>
        <div className="hidden lg:block"></div>
        <div className="col-span-5 my-3"></div>
    </>
}