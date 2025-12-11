import { ProjectDataType } from "@/db/projectsThreeData";
import { useLanguage } from "@/hooks/useLanguage"
import { projectsI18nData } from "@/db/i18n/projectsData"

type ProjectCardPropsType = {
    project: ProjectDataType;
    className?: string;
    iconCalss?: string;
    isIconShow?: boolean;
}
const ProjectCard = ({ project, className}: ProjectCardPropsType) => {
    const { t } = useLanguage();
    
    // Find the corresponding i18n data
    const projectI18n = projectsI18nData.find(p => p.id === project.id);
    
    return (
        <div className={`project-items ${className}`}>
            <div className="project-image">
                <img src={project.image} alt="project-img" />
                <div className="project-content">
                    <div className="project-meta">
                        <p className="project-location">
                            {project.city}, {projectI18n ? t(projectI18n.country) : project.country}
                        </p>
                        <p className="project-date">{project.date}</p>
                    </div>
                    <h4 className="project-title">
                        {projectI18n ? t(projectI18n.title) : project.title}
                    </h4>
                    <p className="project-description">
                        {projectI18n ? t(projectI18n.description) : project.description}
                    </p>
                    {project.scope && (
                        <p className="project-scope">
                            <strong>Scope:</strong> {projectI18n ? t(projectI18n.scope) : project.scope}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard