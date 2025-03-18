import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import router from "./routes/index.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/", router);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server Started :${port}`));
