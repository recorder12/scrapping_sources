import "./db";
import app from "./app";
import dotenv from "dotenv";
import "./models/Bobae";
dotenv.config();

const PORT = process.env.PORT || 4000;

const handelListening = () =>
  console.log(`✅ Listening on : http://localhost:${PORT}`);

app.listen(PORT, handelListening);
