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
                    <th>Estado Contrato</th>
                    <th>Estado Administrativo</th>
                    <th>Estimación RTB</th>
                    <th>Estimación COD</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id}>
                      <td>{project.projectNumber || project.id}</td>
                      <td>{project.province}</td>
                      <td>{project.municipality || '-'}</td>
                      <td>{project.closestSe || '-'}</td>
                      <td>{project.pvPower?.toFixed(2) || '-'}</td>
                      <td>{project.bessPower?.toFixed(2) || '-'}</td>
                      <td>{project.peakPower?.toFixed(2) || '-'}</td>
                      <td>{project.accessCapacity?.toFixed(2) || '-'}</td>
                      <td>{project.technology || '-'}</td>
                      <td>{project.production?.toLocaleString() || '-'}</td>
                      <td>{project.usableSurface?.toFixed(2) || '-'}</td>
                      <td>{project.rentingPrice?.toLocaleString() || '-'}</td>
                      <td>{project.landContractStatus || '-'}</td>
                      <td>{project.administrativeStatus || '-'}</td>
                      <td>{project.rtbEstimation || '-'}</td>
                      <td>{project.codEstimation || '-'}</td>
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
                    .filter(p => p.pvPower)
                    .reduce((sum, p) => sum + (p.pvPower || 0), 0)
                    .toFixed(2)}{' '}
                  MW
                </p>
                <p className="mb-0">
                  <strong>Total Potencia BESS:</strong>{' '}
                  {projects
                    .filter(p => p.bessPower)
                    .reduce((sum, p) => sum + (p.bessPower || 0), 0)
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
                    .filter(p => p.peakPower)
                    .reduce((sum, p) => sum + (p.peakPower || 0), 0)
                    .toFixed(2)}{' '}
                  MW
                </p>
                <p className="mb-0">
                  <strong>Total Capacidad Acceso:</strong>{' '}
                  {projects
                    .filter(p => p.accessCapacity)
                    .reduce((sum, p) => sum + (p.accessCapacity || 0), 0)
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
