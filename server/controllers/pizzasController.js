import Pizza from "../models/Pizza.js"

 

const readAll = async (req, res) => {

  try {

    const pizzas = await Pizza.find()

 

    return res.json({

      msg: "Pizzas leídas con éxito",

      data: pizzas,

    })

  } catch (error) {

    console.log(error)

    res.status(500).json({

      msg: "Hubo un error obteniendo los datos.",

    })

  }

}

 

const readOne = async (req, res) => {

  const { id } = req.params

 

  try {

    const pizza = await Pizza.findOne({

      _id: id,

    })

 

    if (!pizza) {

      return res.status(400).json({

        msg: "Pizza no encontrada",

      })

    }

 

    res.json({

      msg: "Pizza obtenida con éxito.",

      data: pizza,

    })

  } catch (error) {

    console.log(error)

    res.status(500).json({

      msg: "Hubo un error obteniendo los datos.",

    })

  }

}

 

const create = async (req, res) => {

  try {

    const { name } = req.body

 

    const newPizza = await Pizza.create({

      name,

    })

 

    return res.json({

      msg: "Pizza creada",

      data: newPizza,

    })

  } catch (error) {

    console.log(error)

    res.status(500).json({

      msg: "Hubo un error obteniendo los datos.",

    })

  }

}

 

const edit = async (req, res) => {

  const { id } = req.params

 

  const { name } = req.body

 

  try {

    const updatedPizza = await Pizza.findByIdAndUpdate(

      id,

      {

        name,

      },

      { new: true }

    )

 

    return res.json({

      msg: "Pizza actualizada con éxito",

      data: updatedPizza,

    })

  } catch (error) {

    console.log(error)

    res.status(500).json({

      msg: "Hubo un error obteniendo los datos.",

    })

  }

}

 
const deleteOne = async (req, res) => {

  const { id } = req.params

 

  try {

    const deletedPizza = await Pizza.findByIdAndRemove({

      _id: id,

    })

 

    if (deletedPizza === null) {

      return res.json({

        msg: "Pizza no existe o ya fue borrada con anterioridad",

      })

    }

 

    return res.json({

      msg: "Pizza borrada exitosamente.",

      data: deletedPizza,

    })

  } catch (error) {

    console.log(error)

    res.status(500).json({

      msg: "Hubo un error obteniendo los datos.",

    })

  }

}

 

export default {

  readAll,

  create,

  readOne,

  edit,

  deleteOne,

}