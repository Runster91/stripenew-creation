import mongoose from "mongoose"

 

const connectDB = async () => {

  try {

    // LOCAL: mongodb://localhost:27017

    // PROD: mongodb+srv://mikenieva:<password>@pizzeria-db.ewakicu.mongodb.net/

    await mongoose.connect("mongodb+srv://Runster:dZn8h4Me6fSL5NST@cluster0.8oqiqpp.mongodb.net/?retryWrites=true&w=majority", {

      useNewUrlParser: true,

      useUnifiedTopology: true,

    })

 

    console.log("Base de datos conectada.")

  } catch (error) {

    console.log(error)

    process.exit(1)

  }

}

 

export default connectDB
 