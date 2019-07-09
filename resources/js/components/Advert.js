import React, { Component } from "react";

export default class Advert extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.subject === "gb" ? (
                    <div className="advert">
                      
                        <h1>Guild Ball Offer</h1>
                        <h3>AMAZING Team</h3>
                        <p>20.99</p>
                    </div>
                ) : null}

                {this.props.subject === "mtg" ? (
                    <div className="advert">
                       
                        <h1>Magic Offers</h1>
                        <h3>AMAZING Deck</h3>
                        <p>20999.99</p>
                    </div>
                ) : null}

                {this.props.subject === "40K" ? (
                    <div className="advert">
                        
                        <h1>BOOKWORM</h1>
                        <h3>AMAZING ARMY</h3>
                        <p>210.99</p>
                    </div>
                ) : null}

                {this.props.subject === "bb" ? (
                    <div className="advert">
                    
                        <h1>Blood Bowl Offers</h1>
                        <h3>ORC vs HUMANS</h3>
                        <p>!!!20.99!!!</p>
                    </div>
                ) : null}

                {this.props.subject === "venuesmall" ? (
                    <div className="advert">
                       
                        <h1>Information About the club</h1>
                        <h3>BLe ble ble ble</h3>
                        <p>terms & conditions</p>
                    </div>
                ) : null}

                {this.props.subject === "gallery" ? (
                    <a href="https://bookwormretford.co.uk"><div className="advert">
                    
                    <h1>BOOKWORM</h1>
                        <h3>AMAZING BOOK</h3>
                        <p>20.99</p>
                        <a href="https://bookwormretford.co.uk">Vist Bookworm</a>
                    </div></a>
                ) : null}

                {this.props.subject === "lotr" ? (
                    <div className="advert">
                   
                        <h1>Hobbit Is Fun</h1>
                        <h3>Starter Pack</h3>
                        <p>11.99</p>
                    </div>
                ) : null}
            </div>
        );
    }
}
