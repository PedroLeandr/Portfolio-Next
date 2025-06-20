import Image from "next/image";
import portfolio from '@/public/portfolio.png';
import leafy from '@/public/leafy.png';
import amorcontado from '@/public/amorcontado.png';


export default function Projects() {
    return (
        <div className="projects section" id="projects">
            <div clasNames="title">
                <h1>My Projects</h1>
            </div>
            <div className="cards">
                <div className="projectcard">
                    <h2><a href="https://pedroleandr.github.io/Portfolio/" class="link" target="_blank" rel="noopener noreferrer">Portfólio</a></h2>
                    <p>A simple Portfólio built with HTML, CSS, and JavaScript</p>
                    <Image src={portfolio} alt="Portfolio Image" />
                </div>
                <div className="projectcard">
                    <h2><a href="https://leafy-six.vercel.app" class="link" target="_blank" rel="noopener noreferrer">Leafy</a></h2>
                    <p>A simple Page build with next.js + tailwind css</p>
                    <Image src={leafy} alt="Leafy Image" />
                </div>
                <div className="projectcard">
                    <h2><a href="https://amorcontado-pedro-leandrs-projects.vercel.app" class="link" target="_blank" rel="noopener noreferrer">AmorContado</a></h2>
                    <p>A micro S.A.S. build with next.js + tailwind css</p>
                    <Image src={amorcontado} alt="AmorContado Image" />
                </div>
            </div>
        </div>
    );
}