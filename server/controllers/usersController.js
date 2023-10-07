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
  
  const readAll = (req, res) => {
    res.json({
      message: "Datos obtenidos con éxito.",
      data: data,
    })
  }
  
  export default {
    readAll,
  }