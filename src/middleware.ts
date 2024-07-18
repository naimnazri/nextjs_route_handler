import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest){
    const response = NextResponse.next();

    const themPreference = request.cookies.get("theme")
    if(!themPreference){
        response.cookies.set("theme", "dark",)
    }

    return response
    
    // if(request.nextUrl.pathname === "/profile"){
    //     return NextResponse.redirect(new URL("/hello", request.url));    
    // }
    //return NextResponse.redirect(new URL("/", request.url));
}

// export const config = {
//     mather: "/profile",
// }