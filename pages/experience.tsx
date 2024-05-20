import ExperienceCard from "../components/experience/experience_card";
import SchoolCard from "../components/experience/school_card";
import Layout from "../components/layout";
import ExperienceData from '../data/experience.json'
import { titleFont } from "../globals/fonts";

export default function Experience() {
    return <>
        <Layout>
            <div className="grid grid-cols-5 gap-4 lg:p-10 mb-10 lg:mb-0">
                <div className="col-span-5 my-3">
                    <h1 className={`${titleFont.className} text-3xl`}>Work Experience</h1>
                </div>
               {
                    ExperienceData.work.map((exp) => {
                        return <ExperienceCard experience={exp} key={exp.company} />
                    })
               }
                <div className="col-span-5 my-3">
                    <h1 className={`${titleFont.className} text-3xl`}>Education</h1>
                </div>
                {
                    ExperienceData.school.map((school) => {
                        return <SchoolCard school={school} key={school.school}/>
                    })
                }
            </div>
        </Layout>
    </>
}