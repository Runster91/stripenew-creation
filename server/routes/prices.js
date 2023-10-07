import express from "express"
import pricesController from "../controllers/pricesController.js"

const router = express.Router()

// OBTENER TODOS LOS CARROS
router.get("/", pricesController.readAll)

export default router