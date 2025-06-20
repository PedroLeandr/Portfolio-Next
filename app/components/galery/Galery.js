import Image from "next/image";
import portfolio from '@/public/portfolio.png';
import leafy from '@/public/leafy.png';
import amorcontado from '@/public/amorcontado.png';

export default function Galery() {
    return (
        <div className="galery section" id="galery">
            <div className="title">
                <h1>Projects Galery</h1>
            </div>
            <div className="cards">
                <div className ="projectcard">
                    <h2><a href="https://pedroleandr.github.io/Portfolio/" className="link" target="_blank" rel="noopener noreferrer">Portfólio</a></h2>
                    <p>A simple Portfólio built with HTML, CSS, and JavaScript</p>
                    <div className="images">
                        <div className="group">
                            <Image src={portfolio} alt="Portfolio Image" className="galeryimage"/>
                            <Image src={portfolio} alt="Portfolio Image" className="galeryimage"/>
                            <Image src={portfolio} alt="Portfolio Image" className="galeryimage"/>
                        </div>
                        
                        <div className="seemore">
                            <a href="#" className="link">See More</a>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                </div>

                <div className="projectcard">
                    <h2><a href="https://leafy-six.vercel.app" className="link" target="_blank" rel="noopener noreferrer">Leafy</a></h2>
                    <p>A simple Page build with next.js + tailwind css</p>
                    <div className="images">
                        <div className="group">
                            <Image src={leafy} alt="Leafy Image" className="galeryimage"/>
                            <Image src={leafy} alt="Leafy Image" className="galeryimage"/>
                            <Image src={leafy} alt="Leafy Image" className="galeryimage"/>
                        </div>
                        
                        <div className="seemore">
                            <a href="#" className="link">See More</a>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                </div>

                <div className="projectcard">
                    <h2><a href="https://amorcontado-pedro-leandrs-projects.vercel.app" className="link" target="_blank" rel="noopener noreferrer">AmorContado</a></h2>
                    <p>A micro S.A.S. build with next.js + tailwind css</p>
                    <div className="images">
                        <div className="group">
                            <Image src={amorcontado} alt="AmorContado Image" className="galeryimage"/>
                            <Image src={amorcontado} alt="AmorContado Image" className="galeryimage"/>
                            <Image src={amorcontado} alt="AmorContado Image" className="galeryimage"/>
                        </div>
                        
                        <div className="seemore">
                            <a href="#" className="link">See More</a>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}