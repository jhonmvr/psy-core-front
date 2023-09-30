export interface Paciente {
  id: number;
  codigoPaciente: string;
  tipoTest: string;
  estado: string
  mailPaciente: string;
  fecha: string;
  uniqueProcesoId?: string;
}
