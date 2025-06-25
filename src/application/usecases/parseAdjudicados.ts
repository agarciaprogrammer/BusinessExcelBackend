import { Proceso } from "../../domain/entities/Proceso";

const parseBoolean = (value: string) => value?.toUpperCase().includes("CUMP") ?? false;

export const parseAdjudicados = (rows: any[]): Proceso[] => {
  return rows.map((row) => ({
    nroProceso: row["Nro Proceso ACM"],
    descripcion: row["Descripción"],
    importe: parseFloat(row["Imp Pesos"]) || 0,
    fechaObjetivo: row["Fecha Objetivo Adjudicación"] ?? null,
    fechaReferencia: row["Fecha referencia"] ?? null,
    tiempoGap: parseInt(row["TIEMPO GAP"]) || null,
    cumpleGap: (row["CUMP GAP"]?.toUpperCase()?.includes("CUMP")) ?? false,
    estado: row["Estado"] ?? "Desconocido",
    mesIngreso: row["Mes Ingreso a Compras"] ?? "N/A",
    mesFinGestion: row["Mes Fin de Gestión"] ?? undefined,
    motivoRetraso: row["Motivo de Retraso"] ?? undefined,
    fuente: "adjudicado",
  }));
};
