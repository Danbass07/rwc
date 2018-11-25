import React, {Component} from 'react';
import './Screen.css';


class Screen extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            sliderPhotos: [
                require('../../Img/1.jpg'),
                require('../../Img/2.jpg'),
                require('../../Img/3.jpg'),
                require('../../Img/4.jpg'),
            ],

            currentSlide : 0,
            auto: 'AUTO',
        
        };
        this.toggleHandler = this.toggleHandler.bind(this);
    }

    componentDidMount() {
    
        this.timerID = setInterval(
            () => this.slide(),
            7000
            );

        
    
    
    }

    componentWillUnmount() {
    
    clearInterval(this.timerID);
        
    }   

    toggleHandler() {
        if (this.state.auto === 'AUTO'){ 
            this.setState({
                auto: 'MANUAL'
            })
        } else {
            this.setState({
                auto: 'AUTO'
            })
        }
    }
    slide() {
        if (this.state.auto === "AUTO") {
            let currentSlide = this.state.currentSlide + 1;
            if (currentSlide > 3) {
                this.setState({
                    currentSlide: 0,
                });
            } else {
                this.setState({
                    currentSlide: currentSlide,
            });

            } 
        } else {}
    }

      changeSlideRight(currentSlide) {
        if (currentSlide === this.state.sliderPhotos.length - 1) {
            currentSlide = 1;
        } else {
            currentSlide += 1;
        }
        this.setState ({
            currentSlide : currentSlide,   
            auto: 'MANUAL',
    })
}
    changeSlideLeft(currentSlide) { console.log(currentSlide)
        if (currentSlide === 0 || currentSlide < 1) {
            currentSlide = this.state.sliderPhotos.length - 1;
        } else {
            currentSlide -= 1;
        }
        
        this.setState ({
            currentSlide : currentSlide,  
            auto: 'MANUAL', 
    })  
    }
    
 render() {
    const style = {
     
        margin: '2% auto',
        display: 'block',
        width: '60%',
        
}
    
        return (
      <div>
        <div className="Slider">
            
                <div className="Screen" >
                <div className="arrow left" onClick={() => this.changeSlideLeft(this.state.currentSlide)}/>          
                    <img className="Slide" style={style}  src={this.state.sliderPhotos[this.state.currentSlide]} alt="small" height="90%"  />

                  <div className="arrow right" onClick={() => this.changeSlideLeft(this.state.currentSlide)}/>
                </div>
                
        </div>
        <div className="Panel">
            <button className="toggle" onClick={() => this.toggleHandler()}>{this.state.auto}</button>
        </div>
       </div>
        );
    }
}
export default Screen;