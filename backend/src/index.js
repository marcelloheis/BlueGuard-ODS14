import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "BlueGuard API online" });
});

app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`✅ BlueGuard API rodando na porta ${PORT}`);
});

