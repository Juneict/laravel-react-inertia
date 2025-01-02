import { Link } from "@inertiajs/react";

export default function Layout({children}) {
    return (
        <>
            <header>
                <nav>
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href="/post/create" className="nav-link">Create</Link>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}