import express from "express"
import toppingsController from "./../controllers/toppingsController.js"
 
const router = express.Router()
 
// A. OBTENER TODOS LOS TOPPINGS
router.get("/", toppingsController.readAll)
 
// B. CREAR UN TOPPING
 
// C. OBTENER UN TOPPING ESPECÍFICO
 
// D. ACTUALIZAR UN TOPPING ESPECÍFICO
 
// E. BORRAR UN TOPPING ESPECÍFICO
 
export default router
 