import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionUrl } from "@/db/dbSetup";
import { Product } from "@/db/model/product";

export async  function GET(req, res) {

    let data = [];
    try {
        await mongoose.connect(connectionUrl)
        data =await Product.find();
    
    }catch(err){
        data = {success:false,err};
    }
    return NextResponse.json({result :data,success:true});
}

export async function POST(req, content) {

    await mongoose.connect(connectionUrl);
    let payload =await req.json();
    let product = new Product({
        name: payload.name,
        price: payload.price,
        color: payload.color,
        company: payload.company,
    });

    const result = await product.save();

    return NextResponse.json({success:true});

}

