import hello from "./contact.css";

function Contact() {
    return (
        <div className="contact">
            <form action="contact" method="POST" >
                <label>Your Name: <input name="name" type="text"  placeholder="Nombre y Apellido" /> </label> >
                <label>Your Email: <input name="mail"placeholder="Email" type="email" /> </label>
                <label>Subject: <input name="subject" placeholder="Subject" type="text" /> </label>
                <label for="message">Message</label>
                <textarea id="message" rows="20" cols="40" placeholder="Message"></textarea>
                <input value="Send" type="submit" />
           </form>
        </div>
    )
}

export default Contact;