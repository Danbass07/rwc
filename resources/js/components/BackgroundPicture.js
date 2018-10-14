import React, { Component } from 'react';
import './BackgroundPicture.css';


export default class BackgroundPicture extends Component {
    constructor(props){
        super(props);
        this.state = {      
            //dynamic properties only
                        min: this.props.min,
                        max: this.props.max,
                        changeRate: 0,
                        peakpoint: 0,
            // css properties
                        opacity: 0,
        }
    } // constructor finish
   
    componentDidMount(){
        let changeRate = (this.props.max - this.props.min) / 2
        let peakpoint = this.props.max - changeRate
        this.setState({
            changeRate: changeRate,
            peakpoint: peakpoint,
        })
    }
         
    componentDidUpdate(prevProps) {
        if (this.props.position !== prevProps.position) {
            console.log(this.state.peakpoint);
            console.log(this.state.changeRate);
            console.log(this.state.opacity);

            if (this.props.position > prevProps.position) { //going down
                
                
                let opacity = +this.state.opacity + 0.02;
                this.setState({
                    opacity: opacity,
                });
               
            } else {                                        // going up
                let opacity = +this.state.opacity - 0.03;
                this.setState({
                    opacity: opacity,
                }); }
            }

    }   // componentDidUpdate finish
        
        
    
   
    render() {

      const style = { 
        
         backgroundImage: "url(http://malek.ovh/rwc/resources/Img/"+this.props.image+")",
         zIndex: '-2',
         left: '40%',
         bottom:'20%',
         height: '300px',
         width: '400px',
         opacity: this.state.opacity,
       
        
      }
    

      return (
          
            <div style={style} className="backgroundOne"></div>
                    
              
        );
    }
}


