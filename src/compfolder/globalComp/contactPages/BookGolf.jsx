import React from 'react';
import westBayLogo from "../../../images/LogowestBay.png"
import img1 from "../../../images/download1.jpg"
import "./GlobalContact.scss"
import Nav from "../../globalComp/Nav"

const BookGolf = () => {
    return (
        <div className="contactContainer">
            <div>
                <Nav />
                <img src={img1} alt="Navigation" className="nav-image-short"/>
            </div>

            <h1>We Look Forward to Connecting Soon!</h1>

            <div>
                <h2>Contact us</h2>
                <p>
                    Contact us via the form below or use the email address, telephone number, or postal information. We look forward to hearing from you.
                </p>

                <div className="contact-form-block">
                    <div className="company-info">
                        <img src="/blackiguana-logo.png" alt="Black Iguana logo"/>
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
                                <input type="text" name="name"/>
                            </label>
                            <label>
                                Email
                                <input type="email" name="email"/>
                            </label>
                            <label>
                                Phone
                                <input type="text" name="phone"/>
                            </label>
                        </div>

                        <div>
                            <label>
                                Data
                                <input type="date" name="date" />
                            </label>
                            <label>
                                Name
                                <input type="time" name="time" />
                            </label>
                            <label>
                                Players number
                                <input type="number" name="players" />
                            </label>

                            <button>Contact booking</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookGolf