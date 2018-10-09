import React, { Component } from 'react';
import './Body.css';


export default class BackgroundPicture extends Component {
    constructor(props){
        super(props);
        this.state = {
            opacity: '0',
            height: '300px',
            width: '400px',
            
        }
        this.handleScroll = this.handleScroll.bind(this);
     
     
    }
   
    handleScroll()  {
        let currentScrollPosition=$(window).scrollTop();
        let opacity;
        if (currentScrollPosition* 0.005 < 1)  {
            opacity = currentScrollPosition * 0.0005;
             console.log('getting more '+opacity)
       } else if ( currentScrollPosition * 0.005 > 10){
        opacity =1+ ( 1 - (currentScrollPosition *  0.005));
            console.log('getting less '+opacity)
       }
               this.setState({
                    opacity: opacity,
               })
            }        
        
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
        
        
    
   
    render() {
       // console.log(this.props.position);
      const style = {
         opacity: this.state.opacity,
         backgroundImage: "url(http://malek.ovh/rwc/resources/Img/"+this.props.image+")",
         zIndex: '-2',
         left: '40%',
         bottom:'20%',
       
      }
        return (
          
            <div style={style} className="backgroundOne"></div>
                    
                   
            
        );
    }
}


