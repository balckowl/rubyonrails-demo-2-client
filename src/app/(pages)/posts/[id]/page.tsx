import { getPost } from "@/data/post"
import { Post } from "@/types/post"

export default async function Page({ params }: { params: { id: string } }) {

    const { id } = params

    const post: Post = await getPost(id)
    console.log(post)

    return (
        <div>
            <div>{post.title}</div>
            <div>{post.content}</div>
        </div>
    )
}
