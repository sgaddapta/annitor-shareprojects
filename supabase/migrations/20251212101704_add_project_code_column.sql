/*
  # Add project_code column to projects table

  1. Changes
    - Add `project_code` column to store codes like '013FCAT25', '017FCAT25', etc.
    - Create unique index on project_code for fast lookups
    - Populate existing projects with their codes based on known mappings
*/

-- Add project_code column
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'project_code'
  ) THEN
    ALTER TABLE projects ADD COLUMN project_code text UNIQUE;
  END IF;
END $$;

-- Update existing projects with known project codes
UPDATE projects SET project_code = '017FCAT25' WHERE project_number = 1;
UPDATE projects SET project_code = '008FCAT25' WHERE project_number = 3;

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_projects_project_code ON projects(project_code);