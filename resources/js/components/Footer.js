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

                    <button className="Option">Option 1</button>
                    <button className="Option">Option 2</button>
                    <button className="Option">Option 3</button>
                    <button className="Option">Option 4</button>
                
            
                </div>
            </div>


        )
    }
}