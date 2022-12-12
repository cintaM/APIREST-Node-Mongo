import { User } from '../models/User.js'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
  const { email, password } = req.body
  try {
    let user = await User.findOne({ email })
    if (!user)
      return res.status(403).json({ error: 'no existe el usuario registrado' })

    const responsePassword = user.comparePassword(password)
    if (!responsePassword) {
      return res.status(400).json({ error: 'contraseña incorrecta' })
    }
    //JWT. Generar token
    const token = jwt.sign({uid: user.id}, process.env.JWT_SECRET)

    res.json({
      token
    })
  } catch (error) {
    console.log(error.code)
    return res.status(500).json({ error: 'Error en el servidor' })
  }
}

export const register = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = new User({ email: email, password: password })
    await user.save()
    return res.json({ ok: true })
  } catch (error) {
    console.log(error.code)
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Usuario ya existente' })
    }
  }
}
