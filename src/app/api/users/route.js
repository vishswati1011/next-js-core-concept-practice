import {user} from '@/util/db';

import  { NextResponse } from 'next/server';

export function GET(req, res) {
    const data = user;
    return NextResponse.json(data, {status: 200});
}

export async function POST(req, res) {
    
    let payload =await req.json();
    console.log(payload,"api called in api routes.")
    if(!payload.name || !payload.email ){
        return NextResponse.json({message: 'required feild not found.'}, {status: 400});
    }else {
    return NextResponse.json({message: 'saved successfully.'}, {status: 200});
    }
}

