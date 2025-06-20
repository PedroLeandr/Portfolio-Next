

export default function Contact() {
    return (
         <div className="contact section" id="contact">
            <div className="title">
                <h1>Contact</h1>
                <p>If you&apos;d like to get in touch, feel free to use any of the methods below:</p>
            </div>
            <div className="cards">
                <div className="contactinfo">
                    <div className="lable">Name:</div>
                    <a href="#me" className="link"> Pedro Leandro Vieira Nascimento</a>
                </div>
                <div className="contactinfo">
                    <div className="lable">Address:</div>
                    <a href="https://www.google.com/maps?q=Rua+Timor+Lorosae+75,+3880-644,+Válega,+Portugal" className="link" target="_blank">Rua Timor Lorosae 75, 3880-644, Válega, Portugal</a>
                </div>
                <div className="contactinfo">
                    <div className="lable">Phone:</div>
                    <a href="tel:+351938174439" className="link" target="_blank">+351 938 174 439</a>
                </div>
                <div className="contactinfo">
                    <div className="lable">WhatsApp:</div>
                    <a href="https://wa.me/+351938174439" className="link" target="_blank">+351 938 174 439</a>
                </div>
                <div className="contactinfo">
                    <div className="label">Email:</div>
                    <a href="mailto:pedroleandr@gmail.com" className="link" target="_blank">pedroleandrvieiranascimento@gmail.com</a>
                </div>
                <div className="contactinfo">
                    <a href="https://github.com/PedroLeandr" className="link" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="https://discord.com/users/pedroleandrvieiranascimento" className="link" target="_blank"><i className="fa-brands fa-discord"></i></a>
                    <a href="https://www.linkedin.com/in/pedro-leandro-vieira-nascimento-2084a933a/" className="link" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    );
}