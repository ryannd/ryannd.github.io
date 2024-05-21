import ExperienceCard from "../components/experience/experience_card";
import SchoolCard from "../components/experience/school_card";
import Layout from "../components/layout";
import ExperienceData from '../data/experience.json'
import { titleFont } from "../globals/fonts";
import { motion } from 'framer-motion'

export default function Experience() {
    const container = {
        hidden: { opacity: 0},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return <>
        <Layout>
            <motion.div 
                className="grid grid-cols-5 gap-4 lg:p-10 mb-10 lg:mb-0"
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.div className="col-span-5 my-3" variants={item}>
                    <h1 className={`${titleFont.className} text-3xl`}>Work Experience</h1>
                </motion.div>
               {
                    ExperienceData.work.map((exp) => {
                        return <motion.div key={exp.company} className="grid grid-cols-5 col-span-5" variants={item}><ExperienceCard experience={exp} /></motion.div>
                    })
               }
                <motion.div className="col-span-5 my-3" variants={item}>
                    <h1 className={`${titleFont.className} text-3xl`}>Education</h1>
                </motion.div>
                {
                    ExperienceData.school.map((school) => {
                        return <motion.div key={school.school} className="grid grid-cols-5 col-span-5" variants={item}><SchoolCard school={school} key={school.school}/></motion.div>
                    })
                }
            </motion.div>
        </Layout>
    </>
}