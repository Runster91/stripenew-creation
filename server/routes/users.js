// 1. IMPORTACIONES
// A. LIBRERÍAS
import express from "express"
// B. ARCHIVOS

// OPCIONAL (LUEGO SE INTERCAMBIARÁ POR UNA BASE DE DATOS)
let data = [
  {
    id: 1,
    nombre: "Mike",
  },
  {
    id: 2,
    nombre: "Ramiro",
  },
]

// 2. INICIALIZADORES
const router = express.Router()

// 3. CONTROLADORES
router.get("/", (req, res) => {
  res.json({
    message: "Datos obtenidos con éxito.",
    data: data,
  })
})

// 4. EXPORTACIÓN
export default router