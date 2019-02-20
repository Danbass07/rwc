import React, { Component } from 'react';
import './Footer.css';


export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {      
            //dynamic properties only
                        
            // css properties
                   
        }
    } 
    render() {
      
    
        return (


            <div className="FooterSection">
                {this.props.display === 'true' ? <div className="FlamesBottom"></div> : null }
                <div className="FooterContainer">

                    <button value='Slider'  className="Option" onClick={(e) => this.props.click(e)}>SLIDER</button>
                    <button value='Gallery'  className="Option" onClick={(e) => this.props.click(e)}>GALLERY</button>
                    <button className="Option">Option 3</button>
                    <button className="Option">Option 4</button>
                
            
                </div>
            </div>


        )
    }
}