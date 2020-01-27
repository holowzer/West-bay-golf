import React from 'react';
import "./GlobalContact.scss"
import westBayLogo from "../../../images/LogowestBay.png"
import Nav from "../../globalComp/Nav"

const RentalContact = () => {
    return (
        <div className="contactContainer">
            <div className="short-nav-container">
                <Nav />
                <img src="/assets/golf-preview-2.jpg" alt="Navigation" className="nav-image-short" />
            </div>

            <h1>We Look Forward to Connecting Soon!</h1>

            <div class="contact-info-container">
                <h2>Contact us</h2>
                <p>
                    Contact us via the form below or use the email address, telephone number, or postal information. We look forward to hearing from you.
                </p>

                <div className="contact-form-block" action="/contact.php?topic=rental" method="post">
                    <div className="company-info">
                        <div>
                            <img src={westBayLogo} alt="Black Iguana logo" />
                        </div>
                        <div>
                            <a href="phone:+504 9483-7049" title="Call West Bay">+504 9483-7049</a>
                            <a href="mailto:golf@westbaygolfclubvillas.com" title="Contact West Bay">golf@westbaygolfclubvillas.com</a>
                        </div>
                        <div>
                            Palm Ln, West Bay, <br />
                            Honduras
                        </div>
                    </div>

                    <form className="contact-form">
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

                            <button>Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RentalContact