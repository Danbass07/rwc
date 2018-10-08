import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Rounddiv from './Rounddiv';
import Navigation from './Navigation';
import './Body.css';

export default class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
           
            currentScrollPosition: 0,
        }
       
        this.handleScroll = this.handleScroll.bind(this);
     
    }
    handleScroll()  {
     
    let currentScrollPosition=$(window).scrollTop();
    
        this.setState({
            currentScrollPosition: currentScrollPosition,
        })
    }
   
   
 

    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
     
    

    render() {
      
        return (
            
            <div className="App" >
            <Navigation />
               
                <h3 className="Title3">Meeting of Tuesday 25th September 2018</h3>
                <div className="MainContainer">
                    <div className="Cell">
                        <Rounddiv image={"Whelp.png"}position={this.state.currentScrollPosition} min={155} max={650} side={'left'} />
                    </div>
                    <div className="Cell">
                        <div className="Text">
                                On our first night in our new venue of Sutton Village Hall we had plenty
                                of members and non-members alike come down to show support for the club after 
                                a difficult period at our previous venue, which we are all glad is now at an end.
                                The new venue has excellent lighting, plenty of secure storage for the club's
                                property, abundant space for the club's needs, and kitchen facilities that 
                                were put to good use by all.  Everybody enjoyed the night, the atmosphere was
                                very positive, as now that the club has returned to a smaller setting people 
                                can much more easily chat with those around them and enjoy other people's 
                                games as well as their own, and we are looking forward to many more meetings 
                                at the village hall.  On the night, a wide variety of games were played, most  
                                prominently Guild Ball, but also Warhammer 40,000, Middle-Earth Strategy Battle Game,
                                Warhammer: Age of Sigmar, and also the new Fallout: Wasteland Warfare.  
                                Our Age of Sigmar Firestorm campaign and Guild Ball Escalation League were continued,
                                as members also prepared for the upcoming Middle-Earth campaign by trying out the 
                                new rules and army lists.
                            </div>
                    </div>
                    <div className="Cell">
                         <Rounddiv image={"logo.jpg"}position={this.state.currentScrollPosition} min={155} max={650} side={'right'}/>
                    </div>
                    <div className="Cell">
                    <Rounddiv image={"logo.jpg"} position={this.state.currentScrollPosition} min={320} max={1500} side={'left'}/>
                    </div>
                    <div className="Cell">
                        <div className="Text">
                            For anyone wishing to come down to the club, our new details
                            are that we meet every Tuesday evening from 7pm until 11pm at 
                            Sutton-cum-Lound Village Hall, which is located on Town Street in Sutton, 
                            and the postcode to find the hall is DN22 8PT.  As some members had issues
                            with google maps inputting the wrong postcode when taking the details 
                            straight from Facebook on mobile devices, please make sure that the right
                            postcode is in your sat-navs when setting off.  The club now offers 
                            refreshments and snacks, and our charges are now £2 per person, per night.  
                            We hope to see you very soon!
                           </div>
                    </div>
                    <div className="Cell">
                    <Rounddiv image={"logo.jpg"} position={this.state.currentScrollPosition} min={320} max={1500} side={'right'}/>
                    </div>  
                    
                   
                </div>
            </div>
        );
    }
}


