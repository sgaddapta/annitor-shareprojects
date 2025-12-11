import PageTitle from "@/components/sections/pageTitle"
import ProjectCard from "@/components/sections/projects/projectCard"
import { projectsThreeData } from "@/db/projectsThreeData"

const ProjectCarousel = () => {
    return (
        <>
            <PageTitle title="Project Carousel" currentPage="Project Carousel" />
            <section id="projects" className="project-section fix section-padding pt-0 mt-4">
                <div className="container">
                    <div className="row">
                        {projectsThreeData.map((project, index) => (
                            <div key={project.id} className="col-xl-4 col-lg-6 col-md-6 wow slideUp" data-delay={`.${3 + index * 2}`}>
                                <ProjectCard project={project} className="style-2" isIconShow={false} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectCarousel