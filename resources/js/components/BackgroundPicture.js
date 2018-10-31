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
        let fullRange = (this.props.max - this.props.min); 
        let peakpoint = this.props.max - (fullRange / 2);
        let changeRate = (fullRange / 2) * 0.00003;
        this.setState({
            changeRate: changeRate,
            peakpoint: peakpoint,
        })
    }
         
    componentDidUpdate(prevProps) {
        if (this.props.scrollPosition !== prevProps.scrollPosition) {
            let opacity = this.state.opacity;
            // console.log('min'+this.props.min);
            // console.log('max'+this.props.max);
            // console.log('change'+this.state.changeRate);
            // console.log('peak'+this.state.peakpoint);
            // console.log('scrollposition'+this.props.scrollPosition);
            // console.log('opacity'+this.state.opacity);
          
         if (this.props.scrollPosition > this.props.min && this.props.scrollPosition < this.props.max) {
             //console.log('in range')
            if (this.props.scrollPosition > prevProps.scrollPosition) { //going down
               // console.log('down');   
                

            // 1 component has to appear at min with min opacity
            if (this.props.scrollPosition === this.props.min) {
                opacity = 0.01;
               // console.log('min visibility'+ opacity);
               
            }

            // 2 need to increase at certain amount before peakpoint
            if (this.props.scrollPosition < this.state.peakpoint) {

                opacity = +this.state.opacity + +this.state.changeRate;
                
               // console.log('rise '+ opacity);           
               
                
            } 
            // 3 need to decrease at certain amount after peakpoint
            else if (this.props.scrollPosition > this.state.peakpoint ) {  

                opacity = +this.state.opacity - +this.state.changeRate;
               // console.log('decrease ' + opacity);
                
            }
            //4 must be fully visible at peakpoint
            if (this.props.scrollPosition === this.state.peakpoint){  
                opacity = 1;
               // console.log(this.state.peakpoint);
               // console.log('peak visibility'+this.state.opacity);
            }
            //5 need to dissapear at max point
            if (this.props.scrollPosition === this.props.max) {
                opacity = 0;
                //console.log('max visibility'+this.state.opacity);
            }

                
               
               
            } else {                                        // going up
                console.log('up');  
                //1 component has to appear at max with min opacity
                if (this.props.scrollPosition === this.props.max) {
                    opacity = 0.01;
                   // console.log('min visibility'+ opacity);
                   
                }
                // 2 need to increase at certain amount after peak point
                if (this.props.scrollPosition > this.state.peakpoint && this.props.scrollPosition < this.props.max ) {
                    opacity = +this.state.opacity + +this.state.changeRate;
                   // console.log('rise '+ opacity); 
                
                     
                } 
                // 3 need to decrease at certain amount before peak point
                else if (this.props.scrollPosition < this.state.peakpoint && this.props.scrollPosition > this.props.min) {  
                    opacity = +this.state.opacity - +this.state.changeRate;
                  //  console.log('decrease ' + opacity);
            }
                // 4 must be fully visible at peakpoint  
                if (this.props.scrollPosition === this.state.peakpoint){  
                    opacity = 1;
                   // console.log(this.state.peakpoint);
                   // console.log('peak visibility'+this.state.opacity);
                }
                // 5 component has to disappear at min with min opacity
                if (this.props.scrollPosition === this.props.min) {
                    opacity = 0;
                  //  console.log('max visibility'+this.state.opacity);
                }

               
            }
            
            this.setState({
                opacity: opacity,
            });
        } else {
           // console.log('Not in range')
                opacity =0;
                this.setState({
                    opacity: opacity,
                });
            }
        }

    }   // componentDidUpdate finish
        
        
    
   
    render() {
       
       
      const style = { 
        
        
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        opacity: this.state.opacity,
        boxSizing: 'border-box',
        marginLeft: '0px',
       
        
      }
    
      if (style.opacity > 0.9 ) {
        style.opacity = 1;
    }
        const link = "http://malek.ovh/rwc/resources/Img/" + this.props.image;

      return (
          
          
                <div style={style} className="backgroundOne">
                    <svg height="100%" width="100%">
                    <pattern id="image" x="0" y="0" height="100%" width="100%" >
    <image x="0" y="0" width="100%" height="100%" xlinkHref={link}></image>
   </pattern>
                        <polygon points={this.props.points} fill="url(#image)" stroke="white" strokeWidth="3" />
                    </svg>
{/* <svg height="400px" width="600px" >

  <g id="layer1">
    <path
       fill="none" stroke="#ffffff" strokeWidth="1.965" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeDasharray="none"
       d="m 2.8796942,249.37499 v 44.97916"
       id="path3715"
       inkscapeConnector-curvature="0" />
    <path
       fill="none" stroke="#ffffff" strokeWidth="1.965" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeDasharray="none"
       d="m 3.96875,253.34374 h 6.614583"
       id="path4522"
       inkscapeConnector-curvature="0" />
    <path
       fill="none" stroke="#ffffff" strokeWidth="1.796" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeDasharray="none"
       d="m 3.96875,257.31249 h 6.614583"
       id="path4524"
       inkscapeConnector-curvature="0" />
    <path
       fill="none" stroke="#ffffff" strokeWidth="4.46500015" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" strokeDasharray="none"
       d="m 6.6145833,248.05207 c 0,0 14.5520827,3.96875 0,18.52084"
       id="path4526"
       inkscapeConnector-curvature="0" />
  </g>
</svg> */}
                </div>
   
          
                    
              
        );
    }
}


