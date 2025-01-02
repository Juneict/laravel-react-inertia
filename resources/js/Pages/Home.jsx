import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Home({ posts }) {
    const {flash} = usePage().props;

    const [flashMsg, setFlashMsg] = useState(flash.message);

    setTimeout(() => {
        setFlashMsg(null)
    },2000)

    return (
        <>
            <Head title="Home"/>

            <h1 className="title">Posts</h1>
            {flashMsg && (
            <div className="absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">
                {flashMsg}
            </div>
            )}
            <div>
                {posts.data.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div>
                            <span>Posted on : </span>
                            <span>
                                {new Date(post.created_at).toLocaleTimeString()}
                            </span>
                        </div>
                        <p className="font-medium">{post.body}</p>
                        <Link className="text-blue-700" href={`/post/${post.id}`}>Read More...</Link>
                    </div>
                ))}
            </div>
            <div className="py-12 px-4">
                {posts.links.map((link) => (
                    link.url ? (
                        <Link
                            key={link.label}
                            href={link.url} 
                            dangerouslySetInnerHTML={{__html : link.label}}
                            className={`p-1 mx-1 ${link.active ? "text-blue-700 font-bold" : '' }`}
                        >
                       </Link>
                    ) : (
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{__html : link.label}}
                            className="p-1 mx-1 text-slate-500"
                        >
                        </span>
                    )
                   
                ))}
            </div>
        </>
    );
}
