export default function Show({post}) {
    return (
        <>
            <div className="p-4 border-b">
                <div>
                    <span>Posted on : </span>
                    <span>
                        {new Date(post.created_at).toLocaleTimeString()}
                    </span>
                </div>
                <p className="font-medium">{post.body}</p>
            </div>
        </>
    )
}