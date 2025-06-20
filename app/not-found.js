import Link from 'next/link';
import ChangeTheme from "@/components/changeTheme/ChangeTheme";

export default function NotFound() {
  return (
    <div className="not-found">
        
        <ChangeTheme />
        <div className="content">
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <Link href="/" className="button">Go back home</Link>
        </div>
    </div>
  );
}
