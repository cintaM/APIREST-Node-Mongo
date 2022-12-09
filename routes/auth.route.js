import express  from "express";
import { body } from 'express-validator';
import { login, register } from "../controllers/auth.controller.js";
import { validatorResults } from "../middlewares/validatorResults.js";

const router = express.Router();

router.post('/login',[
    body('email', "Formato de email incorrecto").trim().isEmail().normalizeEmail(), 
body("password", "Formato de password incorrecto").trim().isLength({min:6})], validatorResults, login)

router.post('/register', [
    body('email', "Formato de email incorrecto").trim().isEmail().normalizeEmail(), 
body("password", "Formato de password incorrecto").trim().isLength({min:6})],  validatorResults,register)

export default router;