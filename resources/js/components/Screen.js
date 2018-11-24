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
            auto: 'MANUAL',
        
        };
        this.toggleHandler = this.toggleHandler.bind(this);
    }
      componentDidMount() {
       
            this.timerID = setInterval(
                () => this.slide(),
                7000
                );
                if (this.state.currentSlide > 3) {
                    this.setState({
                        currentSlide: 1,
                    });
           
        }
    
    }
    
      componentWillUnmount() {
    
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

        let currentSlide = this.state.currentSlide + 1;
        if (currentSlide > 3) {
            this.setState({
                currentSlide: 1,
            });
        } else {
            this.setState({
                currentSlide: currentSlide,
        });

        }
    }

      changeSlideRight(currentSlide) {
        if (currentSlide === this.state.sliderPhotos.length - 1) {
            currentSlide = 1;
        } else {
            currentSlide += 1;
        }
        this.setState ({
            currentSlide : currentSlide,   
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