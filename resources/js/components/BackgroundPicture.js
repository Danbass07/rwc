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
        var previousScrollPosition;
        let positionToShowUp = 80;
        let positionToDisappear = 150;
        let changeRate = (positionToDisappear - positionToShowUp) * 0.01;
        //let changeRate = 0.005;
        let currentScrollPosition=$(window).scrollTop();
        let opacity;
        
        if (currentScrollPosition  < positionToShowUp )  {
             opacity = (currentScrollPosition.toFixed(2) - Math.floor(currentScrollPosition.toFixed(2))) / changeRate;
            // opacity = currentScrollPosition * changeRate;
            previousScrollPosition = currentScrollPosition;
       } else if ( currentScrollPosition  >= positionToDisappear){
        opacity = 1 - (currentScrollPosition.toFixed(2) - Math.floor(currentScrollPosition.toFixed(2)));
        previousScrollPosition = currentScrollPosition;
       }
    //    if (previousScrollPosition.toFixed(2) < currentScrollPosition.toFixed(2) ) { console.log('going down')}
        console.log('handle scroll scroll position '+ currentScrollPosition.toFixed(2));
    //    console.log('handle scroll changeRate '+ changeRate);
        console.log('handle scroll opacity '+ opacity);
    //    console.log('now should be showing up '+(currentScrollPosition* changeRate < positionToShowUp));
    //    console.log('now should disappear '+ ( currentScrollPosition * changeRate >= positionToDisappear));
    console.log('handle scroll previous scroll position '+ previousScrollPosition.toFixed(2));
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


