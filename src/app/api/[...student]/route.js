
import { NextResponse } from "next/server"

export async function GET (request, content) {
    
    console.log('content', content.params.student)

  return NextResponse.json({ message: 'all api routes' }, { status: 200 })
}
