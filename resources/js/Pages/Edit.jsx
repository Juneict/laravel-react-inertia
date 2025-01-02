import { Head, useForm } from "@inertiajs/react"

export default function Edit({post}) {
    const { data, setData, put, processing, errors } = useForm({
        body:post.body
    })

    function submit(e) {
        e.preventDefault();
        put(`/post/${post.id}`);
    }

    console.log(post);

    return (
        <>
            <Head title="Edit"/>
            <h1 className="title">Update your Post</h1>
            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea 
                        rows="10" 
                        value={data.body} 
                        onChange={e => setData('body', e.target.value)}
                        className={errors.body && '!ring-red-500'}
                    >
                    </textarea>
                    { errors.body && <p className="error">{errors.body}</p>}
                    <button className="primary-btn mt-4" disabled={processing} >Update Post</button>
                </form>
            </div>
        </>
    )
}