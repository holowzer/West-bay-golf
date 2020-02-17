import React from 'react';
import "./GlobalContact.scss"
import Nav from "../../globalComp/Nav"

const BookGolf = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData(e.target)

        fetch('/contact.php?topic=golf', {
            method: 'POST',
            body: data
        }).then(() => {
            alert("Your mail has been sent, our team will follow your request as soon as possible. Thanks!")
            document.querySelectorAll("input").forEach(input => {
                input.value = ""
            })
        })
    }

    return (
        <div className="contactContainer">
            <div className="short-nav-container">
                <Nav />
                <img src="/assets/golf-preview-2.jpg" alt="Navigation" className="nav-image-short"/>
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
                            <img src="/blackiguana-logo.png" alt="Black Iguana logo"/>
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
                                Date
                                <input type="date" name="date"  required/>
                            </label>
                            <label>
                                Time
                                <select name="time" id="time">
                                    <option value="7:30am">7:30am</option>
                                    <option value="8:00am">8:00am</option>
                                    <option value="8:30am">8:30am</option>
                                    <option value="9:00am">9:00am</option>
                                    <option value="9:30am">9:30am</option>
                                    <option value="10:00am">10:00am</option>
                                    <option value="10:30am">10:30am</option>
                                    <option value="11:00am">11:00am</option>
                                    <option value="11:30am">11:30am</option>
                                    <option value="12:00am">12:00am</option>
                                    <option value="12:30am">12:30am</option>
                                    <option value="1:00am">1:00pm</option>
                                    <option value="1:30am">1:30pm</option>
                                    <option value="2:00pm">2:00pm</option>
                                    <option value="2:30pm">2:30pm</option>
                                    <option value="3:00pm">3:00pm</option>
                                    <option value="3:30pm">3:30pm</option>
                                    <option value="4:00pm">4:00pm</option>
                                    <option value="4:30pm">4:30pm</option>
                                    <option value="5:00pm">5:00pm</option>
                                </select>
                            </label>
                            <label>
                                Players number
                                <input type="number" name="players"  required/>
                            </label>

                            <input type="submit" value="Contact booking"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookGolf