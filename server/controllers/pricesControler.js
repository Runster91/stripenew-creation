let data = [
    {
      id: 1,
      modelo: "Tiguan",
      precio: 350000
    },
    {
      id: 2,
      modelo: "Taos",
      percio: 270000
    },
  ]
  
  const readAll = (req, res) => {
    res.json({
      msg: "precio carros  obtenidos con éxito",
      data: data,
    })
  }
  
  export default {
    readAll,
  }