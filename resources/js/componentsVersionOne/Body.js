import React, { Component } from 'react';
import Rounddiv from './Rounddiv';
import BackgroundPicture from './BackgroundPicture';
import Navigation from './Navigation';
import Footer from './Footer';
import Screen from './Screen';
import Gallery from './Gallery';
import './Body.css';

export default class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            display: 'Gallery',
            displayBottomFlames: 'false',
            currentScrollPosition: 0,
            textOpacity: 1,
            boxShadow: '0px 3px 60px 14px rgba(255,255,255,1)',
        }
       
        this.handleScroll = this.handleScroll.bind(this);
        this.textClickHandler = this.textClickHandler.bind(this);     
        this.clickHandler = this.clickHandler.bind(this);  
    }
    clickHandler(event){
        console.log(event);
            const display = event.target.value ;
            this.setState({
                display: display,
            })
        } 
        
    

    textClickHandler(){
        let opacity = this.state.textOpacity;
        let boxShadow = this.state.boxShadow;
        if (opacity === 1) {
            
            
            opacity = 0.1;
            boxShadow = '';
        } else { 
            opacity = 1;
            boxShadow = '0px 3px 60px 14px rgba(255,255,255,1)';

        }
        this.setState({
            textOpacity: opacity,
            boxShadow: boxShadow,
        })

    }
    handleScroll()  {
     
    let currentScrollPosition=Math.round($(window).scrollTop());

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    
        this.setState({
            displayBottomFlames: 'true',
          });
    } else {
        this.setState({
            displayBottomFlames: 'false',
          });
    }
    this.setState({
        currentScrollPosition: currentScrollPosition,
      });
    }
        
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
     
    

    render() {
        const textStyle = {
            opacity: this.state.textOpacity,
            boxShadow: this.state.boxShadow,
        }
    
        return (
            
            <div className="App" >
                <div className="BackgroundContainer">
                    <div className="BackgroundGrid">

                    
                
                    
                        <BackgroundPicture 
                                min={10} max={1750} 
                                scrollPosition={this.state.currentScrollPosition} 
                                id={"image2"}
                                image={"merry_christmas__heretic.png"}
                                left={'0px'}
                                bottom={'0px'}
                                points={'0,0 360,0 0,935'}
                                align="Onleft"
                            

                                                    
                            />


                        <BackgroundPicture 
                                min={10} max={1750} 
                                scrollPosition={this.state.currentScrollPosition} 
                                id={"image1"}
                                image={"backgroundBottomLeft.jpg"}
                                left={'150px'}
                                bottom={'0px'}
                                points={'0,835 360,0 360,835'}
                                align="Onright"


                                                    
                            />
                          
                    </div>   
                </div> {/* end of background first section */} 

                <div className="BackgroundContainer">
                    <div className="BackgroundGrid">

                    
                
                    
                    <BackgroundPicture 
                                min={900} max={2750} 
                                scrollPosition={this.state.currentScrollPosition} 
                                id={"image3"}
                                image={"sisters.jpg"}
                                left={'0px'}
                                bottom={'0px'}
                                points={'0,0 360,935 0,935'}
                                align="Onleft"
                            

                                                    
                            />
                    <BackgroundPicture 
                                min={900} max={2750} 
                                scrollPosition={this.state.currentScrollPosition} 
                                id={"image4"}
                                image={"sisters.jpg"}
                                left={'150px'}
                                bottom={'0px'}
                                points={'0,0 360,0 360,935'}
                                align="Onright"


                                                    
                            />
                </div>  {/* end of background second section */} 
            </div> {/* end of BackgroundContainer */}
            <div className="BackgroundContainer">
                    <div className="BackgroundGrid">

                    
                
                    
                        <BackgroundPicture 
                                min={2100} max={3350} 
                                scrollPosition={this.state.currentScrollPosition} 
                                id={"image2"}
                                image={"merry_christmas__heretic.png"}
                                left={'0px'}
                                bottom={'0px'}
                                points={'0,0 360,0 0,935'}
                                align="Onleft"
                            

                                                    
                            />


                        <BackgroundPicture 
                                min={2100} max={3350} 
                                scrollPosition={this.state.currentScrollPosition} 
                                id={"image1"}
                                image={"backgroundBottomLeft.jpg"}
                                left={'150px'}
                                bottom={'0px'}
                                points={'0,935 360,0 360,935'}
                                align="Onright"


                                                    
                            />
                          
                    </div>   
                </div> {/* end of background third section */} 
                
            <Navigation />
                {this.state.display === 'Slider'  ?  <Screen/> : null }
                {this.state.display === 'Gallery'  ?  <Gallery/> : null }
                <div className="TopBackground">
                <h3 className="Title3">Meeting of Tuesday 25th September 2018</h3>
                </div>
                <div className="Spacer"></div>
                <div className="MainContainer"> 
{/* set of background elements showing and fading in certain points realeted to scroll position */}
                    
{/* content of a page  */}
                    <div className="Cell">
{/* row nr 1 */}
                        <Rounddiv
                            scrollPosition={this.state.currentScrollPosition}
                            min={5} max={1700} 
                            image={"roundOne.jpg"}  
                            side={'left'} 
                         />

                    </div>

                    <div className="Cell">
                        <div className="Text" style ={textStyle} onClick={this.textClickHandler}>
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

                         <Rounddiv 
                            scrollPosition={this.state.currentScrollPosition}
                            min={155}
                            max={1700}
                            image={"roundTwo.jpg"}
                            position={this.state.currentScrollPosition}  
                            side={'right'}
                         />

                    </div>
{/* row nr 2 */}

<div className="welcome"> </div>
<div className="middle"></div>
<div className="welcome"> </div>
{/* <div className="floatingDiv"> WELCOME NEW MEMBERS visit us every Tuesday -- DN22 8PT -- SUTTON </div> */}


{/* row nr 3 */}
                    <div className="Cell">
                    <a target="_blank" href="https://www.youtube.com/channel/UC4d_BengHkk8qscyWw8C3uw">
                        
                        <Rounddiv
                            scrollPosition={this.state.currentScrollPosition}
                            min={1900} 
                            max={2750}  
                            image={"rtb.jpg"} 
                            position={this.state.currentScrollPosition} 
                            side={'left'}
                        >
                        </Rounddiv>
                    </a>
                    </div>

                    <div className="Cell">
                        <div className="Text" style ={textStyle} onClick={this.textClickHandler}>
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
                    
                        <Rounddiv 
                            scrollPosition={this.state.currentScrollPosition}
                            min={1900} 
                            max={2750} 
                            image={"roundTwo.jpg"} 
                            position={this.state.currentScrollPosition}
                            side={'right'}
                        />
                    </div>  )}
                    
                    <Footer display={this.state.displayBottomFlames} click={(e) => this.clickHandler(e)}/>
                   
                </div>  {/* end of content */}
               

            </div> // end of App
           
        );
    }
}


