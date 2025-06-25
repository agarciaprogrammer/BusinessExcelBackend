import multer from "multer";

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (_, file, cb) => cb(null, file.originalname),
});

export const uploadMiddleware = multer({ storage }).single("excel");
