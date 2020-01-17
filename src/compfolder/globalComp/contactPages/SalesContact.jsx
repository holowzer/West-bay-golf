import React from 'react';
import "./GlobalContact.scss"
import Nav from "../../globalComp/Nav"

const SalesContact = () => {
    return (
        <div className="contactContainer">
            <div className="short-nav-container">
                <Nav />
                <img src="/assets/golf-preview-2.jpg" alt="Navigation" className="nav-image-short" />
            </div>

            <h1>We Look Forward to Connecting Soon!</h1>

            <div>
                <h2>Contact us</h2>
                <p>
                    Contact us via the form below or use the email address, telephone number, or postal information. We look forward to hearing from you.
                </p>

                <div className="contact-form-block">
                    <div className="company-info">
                        <img src="/sotheby-logo.png" alt="Sotheby's International Realty logo" />
                        <div>
                            <a href="phone:7132613315" title="Call Sotheby's International Realty">713 261 3315</a>
                            <a href="phone:+50424453222" title="Call Sotheby's International Realty">+ 504 2445 3222</a>
                            <a href="mailto:info@roatansir.com" title="Contact West Bay">info@roatansir.com</a>
                        </div>
                        <div>
                            Coral Stone Plaza<br />
                            Sandy Bay Rd<br />
                            Roatan, Honduras
                        </div>
                    </div>

                    <form className="contact-form">
                        <div>
                            <label>
                                Name
                                <input type="text" name="name" />
                            </label>
                            <label>
                                Email
                                <input type="email" name="email" />
                            </label>
                            <label>
                                Phone
                                <input type="text" name="phone" />
                            </label>
                        </div>

                        <div>
                            <label>
                                Message
                                <textarea name="message" id="" cols="30" rows="10"></textarea>
                            </label>

                            <button>Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SalesContact