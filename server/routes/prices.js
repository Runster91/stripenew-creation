import express from "express"
import pricesControler from "../controllers/pricesControler.js"

const router = express.Router()

// OBTENER TODOS LOS CARROS
router.get("/", pricesControler.readAll)

export default router