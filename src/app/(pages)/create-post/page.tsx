"use client"

import { FormEvent, useState } from "react"

export default function Page() {

    const [title, setTitle] = useState<string>("")
    const [content, setContent] = useState<string>("")

    const submitPost = async (e: FormEvent) => {
        e.preventDefault()

        if (!title || !content) return

        try {
            await fetch("http://localhost:3000/api/v1/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, content })
            })
        } catch (err) {
            alert("投稿に失敗しました。")
        }

    }

    return (
        <div>
            <form onSubmit={submitPost}>
                <div>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <input type="text" onChange={(e) => setContent(e.target.value)} />
                </div>
                <button>送信</button>
            </form>
        </div>
    )
}
