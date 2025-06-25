import * as XLSX from "xlsx";
import fs from "fs";

export const readExcel = (filePath: string) => {
    const workbook = XLSX.readFile(filePath);
    const result = {
        lp2AdjNoTerminadas: XLSX.utils.sheet_to_json(workbook.Sheets["LP2 Adj no terminadas"]),
        lp2SinAdjudicar: XLSX.utils.sheet_to_json(workbook.Sheets["LP2 Sxin adjudicar"]),
    };
    fs.unlinkSync(filePath);
    return result;
};
