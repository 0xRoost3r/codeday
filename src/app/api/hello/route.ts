export const revalidate = 60

export async function GET(request: Request) {
    // return Response.json({ "hello" : "world" })
    const data = await fetch('https://api.vercel.app/blog')
    const posts = await data.json()
    
    return Response.json(posts)
}