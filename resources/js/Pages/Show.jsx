import { Head, Link, useForm } from "@inertiajs/react"

export default function Show({post}) {
    const { delete:destroy } = useForm();

    function submit(e) {
        e.preventDefault();
        destroy(`/post/${post.id}`);
    }

    return (
        <>
            <Head title="Post"/>
            <div className="p-4 border-b">
                <div>
                    <span>Posted on : </span>
                    <span>
                        {new Date(post.created_at).toLocaleTimeString()}
                    </span>
                </div>
                <p className="font-medium">{post.body}</p>

                <div className="flex items-center justify-end gap-2">
                    <form onSubmit={submit}>
                        <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white">Delete</button>
                    </form>
                    <Link href={`/post/${post.id}/edit`} className="bg-green-500 rounded-md text-sm px-4 py-1 text-white">Update</Link>
                </div>
            </div>
        </>
    )
}