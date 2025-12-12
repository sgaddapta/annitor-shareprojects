export interface Project {
  id: number
  projectNumber?: number
  province: string
  municipality?: string
  closestSe?: string
  seAvailablePower?: number
  mvlSeDistance?: number | string
  usableSurface?: number
  sellingPrice?: string
  unitPrice?: string
  rentingPrice?: number
  pvPower?: number
  bessPower?: number
  landContractStatus?: string
  peakPower?: number
  accessCapacity?: number
  technology?: string
  production?: number
  administrativeStatus?: string
  rtbEstimation?: string
  codEstimation?: string
}

export const projectsData: Project[] = [
  {
    id: 1,
    projectNumber: 1,
    province: 'Barcelona',
    closestSe: 'LA ROCA',
    technology: 'Fija',
    seAvailablePower: 138.1,
    mvlSeDistance: 30,
    usableSurface: 5.50,
    sellingPrice: 'NA',
    unitPrice: 'NA',
    rentingPrice: 1500,
    pvPower: 4.00,
    bessPower: 8.00,
    landContractStatus: 'Contract signed'
  },
  {
    id: 2,
    projectNumber: 2,
    province: 'Barcelona',
    closestSe: 'LA ROCA',
    technology: 'Fija',
    seAvailablePower: 138.1,
    mvlSeDistance: 270,
    usableSurface: 9.00,
    sellingPrice: 'NA',
    unitPrice: 'NA',
    rentingPrice: 2000,
    pvPower: 4.00,
    bessPower: 8.00,
    landContractStatus: 'Contract signed'
  },
  {
    id: 3,
    projectNumber: 3,
    province: 'Gerona',
    closestSe: 'JUIA',
    technology: 'Fija',
    mvlSeDistance: 400,
    usableSurface: 7.50,
    sellingPrice: 'NA',
    unitPrice: 'NA',
    rentingPrice: 2700,
    pvPower: 3.20,
    bessPower: 8.00,
    landContractStatus: 'Contract signed'
  },
  {
    id: 4,
    projectNumber: 4,
    province: 'Gerona',
    closestSe: 'BUIXALLEU',
    technology: 'Fija',
    seAvailablePower: 27.7,
    mvlSeDistance: 'Inside',
    usableSurface: 7.70,
    sellingPrice: 'NA',
    unitPrice: 'NA',
    rentingPrice: 2393,
    pvPower: 4.00,
    bessPower: 8.00,
    landContractStatus: 'Negotiated. Under Legal revisión'
  },
  {
    id: 5,
    projectNumber: 5,
    province: 'Barcelona',
    closestSe: 'LLINARS',
    technology: 'Fija',
    seAvailablePower: 95,
    mvlSeDistance: 'Inside',
    usableSurface: 7.00,
    sellingPrice: 'NA',
    unitPrice: 'NA',
    rentingPrice: 2393,
    pvPower: 3.20,
    bessPower: 8.00,
    landContractStatus: 'Negotiated. Under Legal revisión'
  },
  {
    id: 6,
    projectNumber: 6,
    province: 'Barcelona',
    closestSe: 'SALLENT',
    technology: 'Fija',
    seAvailablePower: 20.4,
    mvlSeDistance: 'Inside',
    usableSurface: 8.50,
    sellingPrice: 'NA',
    unitPrice: 'NA',
    rentingPrice: 2000,
    pvPower: 4.00,
    bessPower: 8.00,
    landContractStatus: 'Under negotiation'
  },
  {
    id: 7,
    projectNumber: 7,
    province: 'Barcelona',
    closestSe: 'ANOIA',
    technology: 'Fija',
    seAvailablePower: 21.4,
    mvlSeDistance: 0,
    usableSurface: 12.00,
    pvPower: 4.00,
    bessPower: 8.00,
    landContractStatus: 'Under negotiation'
  },
  {
    id: 8,
    projectNumber: 8,
    province: 'Barcelona',
    closestSe: 'MOJA',
    technology: 'Fija',
    seAvailablePower: 93.7,
    mvlSeDistance: 50,
    usableSurface: 8.90,
    pvPower: 4.00,
    bessPower: 8.00,
    landContractStatus: 'Under negotiation'
  },
  {
    id: 9,
    projectNumber: 9,
    province: 'Barcelona',
    closestSe: 'MOJA',
    technology: 'Fija',
    seAvailablePower: 93.7,
    mvlSeDistance: 50,
    usableSurface: 8.00,
    pvPower: 4.00,
    bessPower: 8.00,
    landContractStatus: 'Under negotiation'
  },
  {
    id: 10,
    projectNumber: 10,
    province: 'Barcelona',
    closestSe: 'MANRESA',
    technology: 'Fija',
    seAvailablePower: 41.7,
    mvlSeDistance: 2.4,
    usableSurface: 8.00,
    pvPower: 4.00,
    bessPower: 8.00,
    landContractStatus: 'Under negotiation'
  },
  {
    id: 11,
    province: 'Girona',
    peakPower: 2.06,
    accessCapacity: 1.7,
    technology: 'Fija',
    production: 3329,
    administrativeStatus: 'Obtenida AE Definitiva. En operación',
    rtbEstimation: '-',
    codEstimation: 'sep-25'
  },
  {
    id: 12,
    province: 'Lleida',
    peakPower: 3.28,
    accessCapacity: 2.75,
    technology: 'Fija',
    production: 5304,
    administrativeStatus: 'Obtenida AE Provisional.',
    rtbEstimation: '-',
    codEstimation: 'nov-25'
  },
  {
    id: 13,
    province: 'Teruel',
    peakPower: 2,
    accessCapacity: 1.6,
    technology: 'Tracker',
    production: 3914,
    administrativeStatus: 'Solicitada licencia de obras',
    rtbEstimation: 'Q4-2025',
    codEstimation: 'Q2-2027'
  },
  {
    id: 14,
    province: 'Barcelona',
    peakPower: 2.2,
    accessCapacity: 1.8,
    technology: 'Tracker',
    production: 3966,
    administrativeStatus: 'Pendiente solicitar licencia de obras',
    rtbEstimation: 'Q4-2025',
    codEstimation: 'Q2-2027'
  },
  {
    id: 15,
    province: 'Barcelona',
    peakPower: 2.5,
    accessCapacity: 2,
    technology: 'Fija',
    production: 3966,
    administrativeStatus: 'Solicitada licencia de obras',
    rtbEstimation: 'Q4-2025',
    codEstimation: 'Q2-2027'
  },
  {
    id: 16,
    province: 'Barcelona',
    peakPower: 2.4,
    accessCapacity: 2,
    technology: 'Fija',
    production: 3856,
    administrativeStatus: 'Obtenida licencia de obras',
    rtbEstimation: 'Q4-2025',
    codEstimation: 'Q2-2027'
  },
  {
    id: 17,
    province: 'Zaragoza',
    peakPower: 30,
    accessCapacity: 25,
    technology: 'Tracker',
    production: 58606,
    administrativeStatus: 'Obtenida licencia de obras',
    rtbEstimation: 'Q4-2025',
    codEstimation: 'Q2-2027'
  },
  {
    id: 18,
    province: 'Barcelona',
    peakPower: 3.1,
    accessCapacity: 2.75,
    technology: 'Fija',
    production: 4805,
    administrativeStatus: 'Obtenida licencia de obras',
    rtbEstimation: 'Q4-2025',
    codEstimation: 'Q2-2027'
  }
]
