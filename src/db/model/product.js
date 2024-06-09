import mongoose, { mongo } from "mongoose";

const productModel = new mongoose.Schema({
    name: String,
    price:Number,
    color:String,
    company:String,
});

export const Product = mongoose.models.products||mongoose.model('products',productModel);