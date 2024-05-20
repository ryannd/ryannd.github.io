import ExperienceCard from "../components/experience/experience_card";
import Layout from "../components/layout";
import ExperienceData from '../data/experience.json'

export default function Experience() {
    return <>
        <Layout>
            <div className="grid grid-cols-5 gap-4 lg:p-10">
               {
                    ExperienceData.data.map((exp) => {
                        return <ExperienceCard experience={exp} key={exp.company} />
                    })
               }
            </div>
        </Layout>
    </>
}