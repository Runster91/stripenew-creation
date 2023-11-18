// 1. IMPORTACIONES
// A. LIBRERÍAS
import express from "express"
import jwt from "jsonwebtoken"
// B. ARCHIVOS
import usersController from "./../controllers/usersController.js"

// 2. INICIALIZADORES
const router = express.Router()

// 3. CONTROLADORES

/**
 * @swagger
 * /api/v1/users:
 *  get:
 *      summary: Obtener todos los usuarios
 *      tags: [Usuarios]
 */
// A. LEER USUARIOS
router.get("/", usersController.readAll)

// B. LEER UN USUARIO

// C. CREAR USUARIO
router.post("/create", usersController.create)

// D. AUTENTICAR USUARIO (LOGIN)
router.post("/login", usersController.login)

// E. AUTORIZACIÓN DE USUARIO
// INTEGRACIÓN DE MIDDLEWARES
router.get(
  "/verifytoken",
  async (req, res, next) => {
    // DESENCRIPTACIÓN DE DATOS
    const token = req.header("x-auth-token")
    console.log("token", token)

    if (!token) {
      return res.status(401).json({
        msg: "No hay token o es inválido. Vete lejos.",
      })
    }

    try {
      console.log("token", token)
      console.log("secret", process.env.JWT_SECRET)
      // TOKEN DESENCRIPTADO
      const openToken = await jwt.verify(token, process.env.JWT_SECRET)
      console.log("openToken", openToken)

      // PASARLO EN EL REQ.USER (req.body extensión)
      req.user = openToken.user

      next()
    } catch (error) {
      console.log("error", error)
      res.status(500).json({
        msg: "Hubo un error en servidor o token",
      })
    }
  },
  usersController.verifyToken
)

// 4. EXPORTACIÓN
export default router