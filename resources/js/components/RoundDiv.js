import React, { Component } from "react";

export default class RoundDiv extends Component {
    constructor(props) {
        super(props);
    }


   
    render() {
      const  style = 
        {
            position: 'relative',
            transform: 'rotate(-20deg)',
            top: '35%', 
            height: '43px', 
            width: '43px', 
            backgroundColor: '#efe6e6', 
            color: '#ff0000', 
            borderRadius: '50%', 
            fontSize: '15px', 
            fontWeight: '1000', 
            margin: 'auto auto', 
            textAlign: 'center', 
            paddingTop: '9px', 
        }
        const Circle = () => (
            <svg  height="50" width="50" viewBox="0 0 50 50">
                <circle cy="25" cx="25" r="20" stroke="white" strokeWidth="3" fill="white"></circle>
            </svg>
        )
        return (
            <div >
             <Circle></Circle>
            </div>
        );
    }
}
