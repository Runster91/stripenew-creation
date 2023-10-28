// ./server/controllers/toppingsController.js
 
export const readAll = (req, res) => {
    try {
      // OBTENER LOS TOPPINGS DE BASES DE DATOS
   
      // DEVOLVER UNA RESPUESTA AL CLIENTE
      res.json({
        msg: "Listado de toppings mostrado exitosamente.",
      })
    } catch (error) {
      console.log("error", error)
    }
  }
   
  export default {
    readAll,
  }