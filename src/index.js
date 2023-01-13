import express from 'express';
import { PORT } from "./config.js";
import routerInscripcion from "./routers/inscripcion.routes.js";
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json())
app.use('/api', routerInscripcion)

app.listen(PORT, () => {
  console.log(`Init on port ${PORT}`)
})