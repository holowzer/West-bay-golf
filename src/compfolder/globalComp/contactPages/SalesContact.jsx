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
                            <img src="/sotheby-logo.png" alt="Sotheby's International Realty logo" />
                        </div>
                        <div>
                            <a href="phone:7132613315" title="Call Sotheby's International Realty">713 261 3315</a>
                            <a href="phone:+50424453222" title="Call Sotheby's International Realty">+ 504 2445 3222</a>
                            <a href="mailto:info@roatansir.com" title="Contact West Bay">info@roatansir.com</a>
                        </div>
                        <div>
                            Coral Stone Plaza<br />
                            Sandy Bay Rd<br />
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