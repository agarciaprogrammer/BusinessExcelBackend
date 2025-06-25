import { Proceso } from "../../domain/entities/Proceso";

export interface ResumenProcesos {
    total: number;
    totalImporte: number;
    porcentajeCumplimiento: number;
    procesosPorMes: Record<string, number>;
}

export const generarResumenProcesos = (procesos: Proceso[]): ResumenProcesos => {
    const total = procesos. length;
    const totalImporte = procesos.reduce((acc, p) => acc + (p.importe || 0), 0);
    const cumplidos = procesos.filter((p) => p.cumpleGap).length;
    const porcentajeCumplimiento = total ? (cumplidos / total) * 100 : 0;

    const procesosPorMes: Record<string, number> = {};
    procesos.forEach((p) => {
        const mes = p.mesIngreso || "Desconocido";
        procesosPorMes[mes] = (procesosPorMes[mes] || 0) + 1;
    });

    return {total, totalImporte, porcentajeCumplimiento, procesosPorMes}

};