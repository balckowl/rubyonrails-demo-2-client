export const getAllPosts = async() => {
    const res = await fetch("http://localhost:3000/api/v1/posts",{
        cache: "no-store"
    })
    const posts = await res.json()

    return posts
}


export const getPost = async(id: string) => {
    const res = await fetch(`http://localhost:3000/api/v1/posts/${id}`)
    const post = await res.json()

    return post
}

