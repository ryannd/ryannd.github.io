import Layout from "../components/layout";
import ProjectCard from "../components/project_card";
import ProjectData from "../data/projects.json"

export default function Projects() {
    return <>
        <Layout>
            <div className="flex flex-col w-full lg:p-10 gap-16">
                {
                    ProjectData.projects.map((project) => {
                        return <ProjectCard key={project.name} project={project}/>
                    })
                }
            </div>
        </Layout>
    </>
}