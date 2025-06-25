export interface Proceso {
  nroProceso: string;
  descripcion: string;
  importe: number;
  fechaObjetivo: string | null;
  fechaReferencia: string | null;
  tiempoGap: number | null;
  cumpleGap: boolean;
  estado: string;
  mesIngreso: string;
  mesFinGestion?: string;
  motivoRetraso?: string;
  fuente: "adjudicado" | "sin adjudicar";
}
