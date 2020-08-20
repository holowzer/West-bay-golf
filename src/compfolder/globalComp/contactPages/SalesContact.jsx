import React from 'react';
import "./GlobalContact.scss"
import Nav from "../../globalComp/Nav"

const SalesContact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData(e.target)

        fetch('/contact.php?topic=sales', {
            method: 'POST',
            body: data
        }).then(() => {
            alert("Your mail has been sent, our team will follow your request as soon as possible. Thanks!")
            document.querySelectorAll("input").forEach(input => {
                input.value = ""
            })
            document.querySelector("textarea").value = ""
        })
    }

    return (
        <div className="contactContainer">
            <div className="short-nav-container">
                <Nav />
                <img src="/assets/golf-preview-2.jpg" alt="Navigation" className="nav-image-short" />
            </div>

            <h1>We Look Forward to Connecting Soon!</h1>

            <div className="contact-info-container">
                <h2>Contact us</h2>
                <p>
                    Contact us via the form below or use the email address, telephone number, or postal information. We look forward to hearing from you.
                </p>

                <div className="contact-form-block">
                    <div className="company-info">
                        <div>
                            <img src="/roatan-life-logo.png" alt="Roatan Life logo" /><br />
                        </div>
                        <div>
                            <a href="phone:+50499598033" title="Call Roatan Life">+ 504-9959-8033</a>
                            <a href="phone:18137744686" title="Call Rotan Life from USA">1-813-774-4686</a>
                            <a href="mailto:sales@roatanlife.com" title="Contact Roatan Life">sales@roatanlife.com</a>
                        </div>
                        <div>
                            Lawson Rock Business Center<br />
                            Sandy Bay<br />
                            Roatán, Honduras
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div>
                            <label>
                                Name
                                <input type="text" name="name" required/>
                            </label>
                            <label>
                                Email
                                <input type="email" name="email" required/>
                            </label>
                            <label>
                                Phone
                                <input type="text" name="phone" required/>
                            </label>
                        </div>

                        <div>
                            <label>
                                Message
                                <textarea name="message" id="" cols="30" rows="10" required></textarea>
                            </label>

                            <input type="submit" value="Send message" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SalesContact