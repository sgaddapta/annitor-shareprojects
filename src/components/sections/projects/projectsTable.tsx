import { useEffect, useState } from 'react'
import { supabase, Project } from '@/lib/supabase'

const ProjectsTable = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setProjects(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar proyectos')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <h2>Cargando proyectos...</h2>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="section-padding">
        <div className="container">
          <div className="text-center text-danger">
            <h3>Error: {error}</h3>
          </div>
        </div>
      </section>
    )
  }

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
                  {projects.map((project, index) => (
                    <tr key={project.id}>
                      <td>{project.project_number || index + 1}</td>
                      <td>{project.province}</td>
                      <td>{project.municipality || '-'}</td>
                      <td>{project.closest_se || '-'}</td>
                      <td>{project.pv_power?.toFixed(2) || '-'}</td>
                      <td>{project.bess_power?.toFixed(2) || '-'}</td>
                      <td>{project.peak_power?.toFixed(2) || '-'}</td>
                      <td>{project.access_capacity?.toFixed(2) || '-'}</td>
                      <td>{project.technology || '-'}</td>
                      <td>{project.production?.toLocaleString() || '-'}</td>
                      <td>{project.usable_surface?.toFixed(2) || '-'}</td>
                      <td>{project.renting_price?.toLocaleString() || '-'}</td>
                      <td>{project.land_contract_status || '-'}</td>
                      <td>{project.administrative_status || '-'}</td>
                      <td>{project.rtb_estimation || '-'}</td>
                      <td>{project.cod_estimation || '-'}</td>
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
                    .filter(p => p.pv_power)
                    .reduce((sum, p) => sum + (p.pv_power || 0), 0)
                    .toFixed(2)}{' '}
                  MW
                </p>
                <p className="mb-0">
                  <strong>Total Potencia BESS:</strong>{' '}
                  {projects
                    .filter(p => p.bess_power)
                    .reduce((sum, p) => sum + (p.bess_power || 0), 0)
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
                    .filter(p => p.peak_power)
                    .reduce((sum, p) => sum + (p.peak_power || 0), 0)
                    .toFixed(2)}{' '}
                  MW
                </p>
                <p className="mb-0">
                  <strong>Total Capacidad Acceso:</strong>{' '}
                  {projects
                    .filter(p => p.access_capacity)
                    .reduce((sum, p) => sum + (p.access_capacity || 0), 0)
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
