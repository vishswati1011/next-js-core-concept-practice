import { NextResponse } from "next/server";
import {writeFile} from 'fs/promises';

export async function POST(req){
    let payload =await req.formData();
    const file = payload.get('image');
    if(!file){
        return NextResponse.json({message:'No file found',success:false},{status:400})
    }
    const byteData = await file.arrayBuffer();

    const buffer = Buffer.from(byteData);

    const path = './public/images/'+file.name;
    await writeFile(path,buffer)
    return NextResponse.json({message:'File uploaded successfully',success:true})


}