import express from "express"

import pizzasController from "./../controllers/pizzasController.js"

 

const router = express.Router()

 

// A. OBTENER TODAS LAS PIZZAS

router.get("/", pizzasController.readAll)

 

// B. CREAR UNA PIZZA

router.post("/create", pizzasController.create)

 

// C. OBTENER UNA PIZZA ESPECÍFICA

router.get("/readone/:id", pizzasController.readOne)

 

export default router