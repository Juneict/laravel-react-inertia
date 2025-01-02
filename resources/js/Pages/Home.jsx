export default function Home({posts}) {
    console.log(posts);
    return (
        <>
            <h1 className="title">Hello</h1>
            <div>
                {posts.map(post => (
                    <div key={post.key} className="p-4 border-b">
                        <div>
                            <span>Posted on : </span>
                            <span>{ new Date(post.created_at).toLocaleTimeString()}</span>
                        </div>
                        <p className="font-medium">{post.body}</p>
                    </div>
                ))}
            </div>
        </>
    )
}