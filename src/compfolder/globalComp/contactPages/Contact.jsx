import React, { useEffect } from 'react';
import "./GlobalContact.scss"
import close from '../../../images/close.svg'
import { Link } from 'react-router-dom';

const Contact = () => {
    useEffect(() => {
        let closebut = document.querySelector('.theContactCross')
        let generalContact = document.querySelector('.generalContactContainer')
        closebut.addEventListener('click', () => {
            generalContact.classList.add('toggleContact')
        })
    }, [])

    return (
        <div className="generalContactContainer toggleContact">
            <div className="topDiv">
                <img className="theContactCross" src={close} alt="" />
            </div>
            <div class="midMenu">
                <h3>Select the team <br/> you would like to contact</h3>

                <Link className="contact-cta" to="/contact/book-golf">
                    Green Fee Reservation
                </Link>

                <Link className="contact-cta" to="/contact/real-estate-sales">
                    Real Estate Sales
                </Link>

                <Link className="contact-cta" to="/contact/real-estate-rental">
                    Real Estate Rental
                </Link>
            </div>
        </div>
    )
}

export default Contact