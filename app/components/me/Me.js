import Image from "next/image";
import logo from '@/public/logo.png';

export default function Me() {
    return (  
        <div className="me section" id="me">
            <div className="logo">
                <Image src={logo} alt="Pedro_Leandr" />
            </div>

            <div className="content">
                <div className="title">
                    <h1>Pedro_Leandr</h1>
                </div>

                <p>At 16 years old, I am passionate about programming and always looking for challenges that stimulate my creativity and logical thinking.</p>
                <br />
                <p>Inspired by minimalist and futuristic styles, I believe in the beauty of simplicity and innovation that shapes the future.</p>
                <br />
                <p>For me, programming is not just a skill, but a way of turning ideas into realities.</p>
            </div>
        </div>
    );
}
