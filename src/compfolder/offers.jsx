import React from 'react'
import "./Offers.scss"

// images import
import discovery from "../images/discover.png"
import golf from "../images/golf.png"
import all from "../images/allgolf.png"

let Offers=()=>{

    return(
        <div className="offerSpace">
            <h2 className="titleOffers">Discover Our Golf Course with <br/> our different Packages</h2>
            <div className="offersContainer">
                <div className="offer">
                    <div className="frameRound"><img src={discovery} alt=""/></div>
                    <div className="textOffer">
                        <h2>Iguana Discovery Package </h2>
                        <p>9 Holes Perry DYE Design Golf Cart included <br/><strong>$45.00 / person</strong>
                        </p>
                    </div>
                </div>
                <div className="offer">
                    <div className="frameRound"><img src={golf} alt=""/></div>
                    <div className="textOffer">
                        <h2>All Inclusive Package</h2>
                        <p>2 times 9 Holes Perry DYE Design Golf Cart, 4 balls and Golf clubs included 2 local drinks <br/><strong>$62.00 / person</strong>
                        </p>
                    </div>
                </div>
                <div className="offer">
                    <div className="frameRound"><img src={all} alt=""/></div>
                    <div className="textOffer">
                        <h2>All you can Golf Package</h2>
                        <p>Unlimited Holes Perry DYE Design Golf Cart, balls and Golf clubs included 2 local drinks and snack <br/><strong>$75.00 / person</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Offers