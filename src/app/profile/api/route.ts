import {type NextRequest} from "next/server";
import {headers, cookies} from "next/headers";

export async function GET(request: NextRequest){
    // const requestHeaders = new Headers(request.headers);
    // console.log(requestHeaders.get("Authorization"));

    const headersList = await headers();
    console.log(headersList.get("Authorization"));

    const theme = request.cookies.get("theme");
    console.log(theme)

    const cookieStore = await cookies();
    cookieStore.set("resultPerPage", "20");
    console.log(cookieStore.get("resultPerPage"));

    return new Response('<h1>Profile data!</h1>', {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark",
        }
    });
}