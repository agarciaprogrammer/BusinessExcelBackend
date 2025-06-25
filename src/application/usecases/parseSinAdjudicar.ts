import { Proceso } from "../../domain/entities/Proceso";

export const parseSinAdjudicar = (rows: any[]): Proceso[] => {
  return rows.map((row) => ({
    nroProceso: row["Nro Proceso ACM"],
    descripcion: row["Descripción"],
    importe: parseFloat(row["Monto pesos"]) || 0,
    fechaObjetivo: row["Fecha Objetivo Adjudicación"] ?? null,
    fechaReferencia: row["Fecha referencia"] ?? null,
    tiempoGap: parseInt(row["TIEMPO GAP"]) || null,
    cumpleGap: false, // aún sin adjudicar, no aplica
    estado: row["Estado"] ?? "Desconocido",
    mesIngreso: row["Mes Ingreso a Compras"] ?? "N/A",
    mesFinGestion: row["Mes Fin de Gestión"] ?? undefined,
    motivoRetraso: row["Motivo de Retraso"] ?? undefined,
    fuente: "sin adjudicar",
  }));
};
