
import Image from "next/image";
import Link from 'next/link';
import logo from '@/public/logo.png';


export default function Header() {
    return (
        <header id="header">
            <div className="headercontent">
                <div className="logo">
                    <Image src={logo} alt="Pedro_Leandr" />
                </div>
                <nav>
                    <ul>
                        <li><Link href="/me" className="link">Me</Link></li>
                        <li><Link href="/knowledge" className="link">Knowledge</Link></li>
                        <li><Link href="/skills" className="link">Skills</Link></li>
                        <li><Link href="/projects" className="link">Projects</Link></li>
                        <li><Link href="/galery" className="link">Galery</Link></li>
                        <li><Link href="/contact" className="button">Hire Me</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}