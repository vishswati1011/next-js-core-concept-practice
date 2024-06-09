import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectionUrl } from '@/db/dbSetup';
import { Product } from '@/db/model/product';


export async function GET (req, content) {

    let productId = content.params.productid;
    console.log("product data",productId)
    let data = [];
    try {
        await mongoose.connect(connectionUrl)
        data = await Product.findById({_id:productId});

    } catch (err) {
        data = { success: false, err };
    }
    return NextResponse.json({ result: data, success: true });

}

export async function PUT (req, content) {

    let payload = await req.json();
    console.log("put api payload received",payload,content)
    let productId = content.params.productid;


    await mongoose.connect(connectionUrl);
    let product = await Product.findById(productId);
    if (!product) {
        return NextResponse.json({ message: "product not found", success: false }, { status: 400 });
    }
    product.name = payload.name;
    product.price = payload.price;
    product.color = payload.color;
    product.company = payload.company;


    const result = await product.save();
    return NextResponse.json({ message: "updated successfully.", success: true }, { status: 200 });
}

export async function DELETE (req, content) {

    let productId = content.params.productid;
    console.log("delete api payload received",productId)
    await mongoose.connect(connectionUrl);
    let product = await Product.findById(productId);
    if (!product) {
        return NextResponse.json({ message: "product not found", success: false }, { status: 400 });
    }
    await product.remove();
    return NextResponse.json({ message: "deleted successfully.", success: true }, { status: 200 });
}