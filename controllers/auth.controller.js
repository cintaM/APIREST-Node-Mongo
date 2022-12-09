import { User } from "../models/User.js";

export const login = async (req, res) => {
    res.json({
        ok:'login'
    })
}

export const register = async(req, res) => {
    const {email, password} = req.body;
    console.log(req.body)
    try {
        const user = new User({email, password})
        await user.save()
        return res.json({ok:true})
    } catch (error) {
        
    }
    res.json({
        ok:'register'
    })
}