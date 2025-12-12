/*
  # Crear tabla de proyectos

  1. Nueva Tabla
    - `projects`
      - `id` (uuid, clave primaria)
      - `project_number` (integer, nullable)
      - `province` (text)
      - `municipality` (text, nullable)
      - `closest_se` (text, nullable)
      - `se_available_power` (numeric, nullable) - Potencia disponible en SE (MW)
      - `mvl_se_distance` (numeric, nullable) - Distancia MVL/SE (m)
      - `usable_surface` (numeric, nullable) - Superficie útil (Ha)
      - `selling_price` (numeric, nullable) - Precio de venta (€)
      - `unit_price` (numeric, nullable) - Precio unitario (€/Ha)
      - `renting_price` (numeric, nullable) - Precio de alquiler (€/Ha/año)
      - `pv_power` (numeric, nullable) - Potencia PV (MW)
      - `bess_power` (numeric, nullable) - Potencia BESS (MWh)
      - `land_contract_status` (text, nullable) - Estado del contrato de terreno
      - `peak_power` (numeric, nullable) - Potencia Pico (MW)
      - `access_capacity` (numeric, nullable) - Capacidad de Acceso (MW)
      - `technology` (text, nullable) - Tecnología (Fija/Tracker)
      - `production` (numeric, nullable) - Producción (KWh)
      - `administrative_status` (text, nullable) - Estado administrativo
      - `rtb_estimation` (text, nullable) - Estimación RTB
      - `cod_estimation` (text, nullable) - Estimación COD
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Seguridad
    - Habilitar RLS en la tabla `projects`
    - Agregar política para que usuarios autenticados puedan leer
    - Agregar política para que usuarios autenticados puedan insertar
    - Agregar política para que usuarios autenticados puedan actualizar
    - Agregar política para que usuarios autenticados puedan eliminar
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_number integer,
  province text NOT NULL,
  municipality text,
  closest_se text,
  se_available_power numeric,
  mvl_se_distance numeric,
  usable_surface numeric,
  selling_price numeric,
  unit_price numeric,
  renting_price numeric,
  pv_power numeric,
  bess_power numeric,
  land_contract_status text,
  peak_power numeric,
  access_capacity numeric,
  technology text,
  production numeric,
  administrative_status text,
  rtb_estimation text,
  cod_estimation text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuarios autenticados pueden leer proyectos"
  ON projects
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Usuarios autenticados pueden insertar proyectos"
  ON projects
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Usuarios autenticados pueden actualizar proyectos"
  ON projects
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Usuarios autenticados pueden eliminar proyectos"
  ON projects
  FOR DELETE
  TO authenticated
  USING (true);