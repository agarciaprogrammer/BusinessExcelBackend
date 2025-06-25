import { Request, Response, NextFunction } from "express";
import { readExcel } from "../services/xlsxReader";
import { parseAdjudicados } from "../../application/usecases/parseAdjudicados";
import { parseSinAdjudicar } from "../../application/usecases/parseSinAdjudicar";
import { generarResumenProcesos } from "../../application/usecases/generarResumenProcesos";

export const handleExcelUpload = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ message: "No se subió ningún archivo" });
      return;
    }
    console.log("Archivo recibido:", req.file || req.files);

    const { lp2AdjNoTerminadas, lp2SinAdjudicar } = readExcel(req.file.path);

    const adjudicados = parseAdjudicados(lp2AdjNoTerminadas);
    const sinAdjudicar = parseSinAdjudicar(lp2SinAdjudicar);

    const resumenAdjudicados = generarResumenProcesos(adjudicados);
    const resumenSinAdjudicar = generarResumenProcesos(sinAdjudicar);

    console.log("Datos brutos hoja 'LP2 Adjudicados':", lp2AdjNoTerminadas);
    console.log("Datos brutos hoja 'LP2 sin adjudicar':", lp2SinAdjudicar);

    res.json({ adjudicados, sinAdjudicar, resumenAdjudicados, resumenSinAdjudicar });
  } catch (err) {
    next(err);
  }
};
