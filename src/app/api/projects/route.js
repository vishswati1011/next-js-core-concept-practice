import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionUrl } from "@/db/dbSetup";
import  Project  from "@/db/model/project";
import {writeFile} from 'fs/promises';

// export async function handler(req, res) {
//     if (req.method === 'GET') {
//         return await GET(req, res);
//     } else if (req.method === 'POST') {
//         return await POST(req, res);
//     } else {
//         res.status(405).send({ message: 'Method not allowed' });
//     }
// }

export async function GET(req, content) {
    let data = [];
    try {
        await mongoose.connect(connectionUrl)
        data = await Project.find();
        return NextResponse.json({success:true,data});
    } catch (err) {
            return NextResponse.json({success:false,err});
    }
}

export async function POST(req, content) {

        await mongoose.connect(connectionUrl);

        let payload =await req.formData();
        const file = payload.get('image');
        if(!file){
            return NextResponse.json({message:'No file found',success:false},{status:400})
        }
        const byteData = await file.arrayBuffer();
    
        const buffer = Buffer.from(byteData);
    
        const path = './public/images/'+file.name;
        await writeFile(path,buffer)
    
        let project = new Project({
            title: payload.get('title'),
            desc:payload.get('desc'),
            image: '/images/'+file.name,
            video: payload.get('video'),
            connect : payload.get('connect')
        });
    
        const result = await project.save();
    
        return NextResponse.json({success:true,result});
    
    } 
    
