// 1. IMPORTACIONES
// A. LIBRERÍAS
import express from "express"
// B. ARCHIVOS
import usersController from "./../controllers/usersController.js"

// 2. INICIALIZADORES
const router = express.Router()

router.get("/", usersController.readAll)

router.post("/create", usersController.create)


// 3. CONTROLADORES

/**
 * @swagger
 * /api/v1/users:
 *  get:
 *      summary: Obtener todos los usuarios
 *      tags: [Usuarios]
 */

router.get("/", usersController.readAll)

// 4. EXPORTACIÓN
export default router