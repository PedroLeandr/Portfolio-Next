import Link from 'next/link';

export default function Landing() {
    return (
        <div className="landing">
            <div className="content">
                <h1>Hello, I'm Pedro_Leandr!</h1>
                <p>You want to see my projects?</p>
                <Link href="/me" className="button"> Let's See!</Link>
            </div>
        </div>
    );
}
