import Layout from "../components/layout";
import ProjectCard from "../components/project_card";
import ProjectData from "../data/projects.json"
import {motion} from 'framer-motion'

export default function Projects() {
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
            <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col w-full lg:p-10 gap-16">
                {
                    ProjectData.projects.map((project) => {
                        return <motion.div variants={item} key={project.name}><ProjectCard  project={project}/></motion.div>
                    })
                }
            </motion.div>
        </Layout>
    </>
}