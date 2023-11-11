import mongoose from "mongoose"

 

const connectDB = async () => {

  try {

    // LOCAL: mongodb://localhost:27017

    // PROD: mongodb+srv://mikenieva:<password>@pizzeria-db.ewakicu.mongodb.net/

    await mongoose.connect(process.env.BASE_URL_DB_PRODUCTION, {

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
 