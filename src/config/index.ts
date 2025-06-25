import express from "express";
import cors from "cors";
import { handleExcelUpload } from "../infrastructure/web/excelUploadController";
import { uploadMiddleware } from "../infrastructure/middlewares/uploadMiddleware";

const app = express();
const PORT = 3000;
app.use(cors());

app.post("/upload", uploadMiddleware, handleExcelUpload);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
