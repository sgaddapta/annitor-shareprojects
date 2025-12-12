import { useParams, useNavigate } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { projectsData } from '@/db/projectsData'
import { projectDocumentsData } from '@/db/projectDocumentsData'
import { projectDocumentationI18nData } from '@/db/i18n/projectDocumentationData'
import { useEffect } from 'react'

const ProjectDocumentation = () => {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const { currentLanguage } = useLanguage()
  const tData = projectDocumentationI18nData

  useEffect(() => {
    const metaRobots = document.createElement('meta')
    metaRobots.name = 'robots'
    metaRobots.content = 'noindex, nofollow'
    document.head.appendChild(metaRobots)

    return () => {
      document.head.removeChild(metaRobots)
    }
  }, [])

  const project = projectsData.find(p => p.id === Number(projectId))
  const documents = projectDocumentsData.filter(doc => doc.projectId === Number(projectId))

  if (!project) {
    return (
      <div className="container section-padding">
        <div className="alert alert-warning">
          {currentLanguage === 'es' && 'Proyecto no encontrado'}
          {currentLanguage === 'en' && 'Project not found'}
          {currentLanguage === 'fr' && 'Projet non trouvé'}
          {currentLanguage === 'it' && 'Progetto non trovato'}
        </div>
      </div>
    )
  }

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <button
              onClick={() => navigate('/')}
              className="btn btn-secondary mb-3"
            >
              ← {tData.backToProjects[currentLanguage]}
            </button>
            <div className="section-title">
              <h2>{tData.pageTitle[currentLanguage]}</h2>
              <h3 className="mt-3">
                {tData.projectLabel[currentLanguage]} N° {project.projectNumber} - {project.municipality}, {project.province}
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h4 className="mb-4">{tData.documentationTitle[currentLanguage]}</h4>

            {documents.length === 0 ? (
              <div className="alert alert-info">
                {tData.noDocuments[currentLanguage]}
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      <th style={{ width: '200px' }}>{tData.tableHeaders.preview[currentLanguage]}</th>
                      <th>{tData.tableHeaders.title[currentLanguage]}</th>
                      <th>{tData.tableHeaders.description[currentLanguage]}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((doc) => (
                      <tr key={doc.id}>
                        <td>
                          <a
                            href={doc.documentUrl}
                            download
                            className="d-block"
                            style={{ cursor: 'pointer' }}
                          >
                            <img
                              src={doc.thumbnailUrl}
                              alt={doc.title[currentLanguage]}
                              className="img-fluid"
                              style={{
                                maxWidth: '150px',
                                height: 'auto',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                transition: 'transform 0.2s'
                              }}
                              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                          </a>
                        </td>
                        <td className="align-middle">
                          <strong>{doc.title[currentLanguage]}</strong>
                        </td>
                        <td className="align-middle">
                          {doc.description[currentLanguage]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDocumentation
