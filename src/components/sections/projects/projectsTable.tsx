import { projectsData } from '@/db/projectsData'
import { projectsTableI18nData } from '@/db/i18n/projectsTableData'
import { useLanguage } from '@/hooks/useLanguage'
import { useNavigate } from 'react-router-dom'

const ProjectsTable = () => {
  const projects = projectsData
  const { currentLanguage } = useLanguage()
  const tData = projectsTableI18nData
  const navigate = useNavigate()

  const handleRowClick = (projectId: number) => {
    navigate(`/project-documentation/${projectId}`)
  }

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row mb-40">
          <div className="col-12">
            <div className="section-title text-center">
              <h2>{tData.pageTitle[currentLanguage]}</h2>
              <p>{tData.totalProjects[currentLanguage]}: {projects.length}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>{tData.headers.number[currentLanguage]}</th>
                    <th>{tData.headers.province[currentLanguage]}</th>
                    <th>{tData.headers.municipality[currentLanguage]}</th>
                    <th>{tData.headers.closestSe[currentLanguage]}</th>
                    <th>{tData.headers.pvPower[currentLanguage]}</th>
                    <th>{tData.headers.bessPower[currentLanguage]}</th>
                    <th>{tData.headers.peakPower[currentLanguage]}</th>
                    <th>{tData.headers.accessCapacity[currentLanguage]}</th>
                    <th>{tData.headers.technology[currentLanguage]}</th>
                    <th>{tData.headers.production[currentLanguage]}</th>
                    <th>{tData.headers.surface[currentLanguage]}</th>
                    <th>{tData.headers.rentingPrice[currentLanguage]}</th>
                    <th>{tData.headers.projectStatus[currentLanguage]}</th>
                    <th>{tData.headers.rtbEstimation[currentLanguage]}</th>
                    <th>{tData.headers.codEstimation[currentLanguage]}</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr
                      key={project.id}
                      onClick={() => handleRowClick(project.id)}
                      style={{ cursor: 'pointer' }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
                    >
                      <td>
                        {project.projectNumber === 'NA' ? (
                          '-'
                        ) : (
                          <a
                            href={`/project-documentation/${project.id}`}
                            onClick={(e) => {
                              e.stopPropagation()
                              navigate(`/project-documentation/${project.id}`)
                            }}
                            style={{
                              color: '#007bff',
                              textDecoration: 'underline',
                              fontWeight: 'bold'
                            }}
                          >
                            {project.projectNumber}
                          </a>
                        )}
                      </td>
                      <td>{project.province}</td>
                      <td>{project.municipality === 'NA' ? '-' : project.municipality}</td>
                      <td>{project.closestSe === 'NA' ? '-' : project.closestSe}</td>
                      <td>{typeof project.pvPower === 'number' ? project.pvPower.toFixed(2) : '-'}</td>
                      <td>{typeof project.bessPower === 'number' ? project.bessPower.toFixed(2) : '-'}</td>
                      <td>{typeof project.peakPower === 'number' ? project.peakPower.toFixed(2) : '-'}</td>
                      <td>{typeof project.accessCapacity === 'number' ? project.accessCapacity.toFixed(2) : '-'}</td>
                      <td>{project.technology === 'NA' ? '-' : project.technology}</td>
                      <td>{typeof project.production === 'number' ? project.production.toLocaleString() : '-'}</td>
                      <td>{typeof project.usableSurface === 'number' ? project.usableSurface.toFixed(2) : '-'}</td>
                      <td>{typeof project.rentingPrice === 'number' ? project.rentingPrice.toLocaleString() : '-'}</td>
                      <td>{project.projectStatus === 'NA' ? '-' : project.projectStatus}</td>
                      <td>{project.rtbEstimation === 'NA' ? '-' : project.rtbEstimation}</td>
                      <td>{project.codEstimation === 'NA' ? '-' : project.codEstimation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{tData.totals.pvBessCatalunaTitle[currentLanguage]}</h5>
                <p className="mb-1">
                  <strong>{tData.totals.totalPvPower[currentLanguage]}:</strong>{' '}
                  {projects
                    .filter(p => typeof p.pvPower === 'number')
                    .reduce((sum, p) => sum + (p.pvPower as number), 0)
                    .toFixed(2)}{' '}
                  MW
                </p>
                <p className="mb-0">
                  <strong>{tData.totals.totalBessPower[currentLanguage]}:</strong>{' '}
                  {projects
                    .filter(p => typeof p.bessPower === 'number')
                    .reduce((sum, p) => sum + (p.bessPower as number), 0)
                    .toFixed(2)}{' '}
                  MWh
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{tData.totals.availableProjectsTitle[currentLanguage]}</h5>
                <p className="mb-1">
                  <strong>{tData.totals.totalPeakPower[currentLanguage]}:</strong>{' '}
                  {projects
                    .filter(p => typeof p.peakPower === 'number')
                    .reduce((sum, p) => sum + (p.peakPower as number), 0)
                    .toFixed(2)}{' '}
                  MW
                </p>
                <p className="mb-0">
                  <strong>{tData.totals.totalAccessCapacity[currentLanguage]}:</strong>{' '}
                  {projects
                    .filter(p => typeof p.accessCapacity === 'number')
                    .reduce((sum, p) => sum + (p.accessCapacity as number), 0)
                    .toFixed(2)}{' '}
                  MW
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsTable
