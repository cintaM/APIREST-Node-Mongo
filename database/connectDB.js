import mongoose from "mongoose";
import 'dotenv/config';

try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log('connect DB Ok')
} catch (error) {
    console.log('error conexión ' + error)
}

