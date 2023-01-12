import { Router } from "express";
import { addInscripcion, deleteInscripcion, getInscripcion, getInscripciones, updateInscripcion } from "../controllers/inscripcion.controllers.js";

const router = Router()

router.get('/', getInscripciones)

router.get('/:id', getInscripcion)

router.post('/', addInscripcion)

router.put('/:id', updateInscripcion)

router.delete('/:id', deleteInscripcion)

export default router;