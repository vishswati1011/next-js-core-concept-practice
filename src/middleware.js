
import { match } from "assert"
import { NextResponse } from "next/server"

export function middleware(request) {
    // console.log("middleware")
// if(request.nextUrl.pathname != "/") {
//     return NextResponse.redirect(new URL("/",request.url))
// }

}

// export const config = {
//     matcher:['/about/:path*', '/student/:path*']
// }

// self executing code which execute before the page is loaded
// config matcher is used to match the url and redirect to the login page