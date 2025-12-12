import { projectsData } from '@/db/projectsData'

const ProjectsTable = () => {
  const projects = projectsData

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row mb-40">
          <div className="col-12">
            <div className="section-title text-center">
              <h2>Lista de Proyectos</h2>
              <p>Total de proyectos: {projects.length}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>N°</th>
                    <th>Provincia</th>
                    <th>Municipio</th>
                    <th>SE Más Cercana</th>
                    <th>Potencia PV (MW)</th>
                    <th>Potencia BESS (MWh)</th>
                    <th>Potencia Pico (MW)</th>
                    <th>Capacidad Acceso (MW)</th>
                    <th>Tecnología</th>
                    <th>Producción (KWh)</th>
                    <th>Superficie (Ha)</th>
                    <th>Precio Alquiler (€/Ha/año)</th>
                    <th>Project Status</th>
                    <th>Estimación RTB</th>
                    <th>Estimación COD</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id}>
                      <td>{project.projectNumber === 'NA' ? '-' : project.projectNumber}</td>
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
                <h5 className="card-title">Totales PV+BESS Cataluña</h5>
                <p className="mb-1">
                  <strong>Total Potencia PV:</strong>{' '}
                  {projects
                    .filter(p => typeof p.pvPower === 'number')
                    .reduce((sum, p) => sum + (p.pvPower as number), 0)
                    .toFixed(2)}{' '}
                  MW
                </p>
                <p className="mb-0">
                  <strong>Total Potencia BESS:</strong>{' '}
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
                <h5 className="card-title">Totales Proyectos Disponibles</h5>
                <p className="mb-1">
                  <strong>Total Potencia Pico:</strong>{' '}
                  {projects
                    .filter(p => typeof p.peakPower === 'number')
                    .reduce((sum, p) => sum + (p.peakPower as number), 0)
                    .toFixed(2)}{' '}
                  MW
                </p>
                <p className="mb-0">
                  <strong>Total Capacidad Acceso:</strong>{' '}
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
