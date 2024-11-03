import mongoose from "mongoose";
import { type } from "os";

const bookSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },

    Dtregistro: {
        type: Date,
        default: Date.now()
    },
    Status: {
        type: String,
        required: true
    }
})

export default mongoose.model('Book', bookSchema)