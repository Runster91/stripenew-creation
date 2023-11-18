const create = async (req, res) => {
  const { name, lastname, country, address, zipcode, email, password } =
    req.body
 
  // 1. CAPA DE CONTRASEÑA
  // ESTABLECER EL NIVEL DE DIFICULTAD DE ENCRIPTAMIENTO DEL PASSWORD
  const salt = await bcryptjs.genSalt(10)
 
  // 1A. CREAR CARRITO DE COMPRAS
  const newCart = await Cart.create({})
 
  // ENCRIPTAR EL PASSWORD
  const hashedPassword = await bcryptjs.hash(password, salt)
  console.log("hashedPassword", hashedPassword)
 
  const newUser = await User.create({
    name,
    lastname,
    country,
    address,
    zipcode,
    email,
    password: hashedPassword,
    cart: newCart,
  })
 
  // CAPA DE SEGURIDAD JWT
  // 1. GENERAR UNA ELECCIÓN DE DATOS (ID) - PAYLOAD
  const payload = {
    user: {
      id: newUser._id,
    },
  }
 
  // 2. ESTABLECER LA FIRMA JWT (SUPER SECRETA. SOLO LA TIENE EL CLIENTE Y EL SERVER)
  return jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {
      expiresIn: 3600000,
    },
    (error, token) => {
      if (error) {
        console.log("error", error)
        return new Error(error)
      }
 
      return res.json({
        msg: "Usuario creado con éxito y super seguro. guiño guiño",
        data: token,
      })
    }
  )
}