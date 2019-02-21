import React, { Component } from 'react';
import './Body.css';

export default class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            headerActive: false,
        }

    }

    clickMeHandler(){
        this.setState({
            headerActive: !this.state.headerActive,
        })
    }
        
    componentDidMount() {
       
    }
     
    

    render() {
        
    
        return (
            
            <div className="App" >
            {/* <div className="Square">

                <svg className="SVG" height="100%" width="100%">
                    <defs>
                        <pattern id={"1"} x="0" y="0" height="100%" width="100%" >
                            
                        </pattern>
                     </defs>
                        <polygon points={'0,0 375,0 0,500'} fill={'white'} stroke="white" strokeWidth="3" />
                </svg>

            
            </div> */}
         
            <div className="Header">
                <div className={this.state.headerActive ? "Header-item active" : "Header-item"}><h3 className="Header-text">Guild Ball</h3></div>
                <div className="Header-item"><h3 className="Header-text">Warhammer</h3></div>
                <div className="Header-item"><h3 className="Header-text">Blood Bowl</h3></div>
                <div className="Header-item"><h3 className="Header-text">Painting</h3></div>
            </div>
            <div className="ClickMe" onClick={() => this.clickMeHandler()}>Click Me</div>
            </div> // end of App
           
        );
    }
}


