// 1. IMPORTACIÓN

import mongoose from "mongoose"

 

// 2. SCHEMA

const pizzaSchema = mongoose.Schema({

  name: {

    type: String,

    required: true,

  },

})

 

// 3. MODELO

const Pizza = mongoose.model("Pizza", pizzaSchema)

 

// 4. EXPORTACIÓN

export default Pizza

 