import { getAllPosts } from "@/data/post";
import { Post } from "@/types/post";
import Link from "next/link";

export default async function Home() {

  const posts: Post[] = await getAllPosts()

  console.log(posts)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/create-post">Create new Post</Link>
      <div>
        {posts.map((post: Post) => (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <div>{post.title}</div>
              <div>{post.content}</div>
            </Link>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </main>
  );
}
