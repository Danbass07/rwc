import React, {Component} from 'react';
import './Gallery.css';


class Screen extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            sliderPhotos: [
                'http://malek.ovh/rwc/resources/Img/1.jpg',
                'http://malek.ovh/rwc/resources/Img/2.jpg',
                'http://malek.ovh/rwc/resources/Img/3.jpg',
                'http://malek.ovh/rwc/resources/Img/4.jpg',
            ],

            currentSlide : 0,
            auto: 'AUTO',
        
        };
        this.toggleHandler = this.toggleHandler.bind(this);
    }

    componentDidMount() {
    
        this.timerID = setInterval(
            () => this.slide(),
            3000
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



    
 render() {
    const style = {
     
        margin: '2% auto',
        width: '100%',
        height: '100%',
        
}
Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        return (
      <div>
        <div className="Gallery">
            
                <div className="Grid" >
                     
                    <img className="Slide One" style={style}  src={this.state.sliderPhotos[this.state.currentSlide]} alt="gallery1"  />
                    <img className="Slide " style={style}  src={this.state.sliderPhotos[Math.floor(Math.random() * (3 - 1 + 1)) + 1]} alt="gallery2"   />
                    <img className="Slide Two" style={style}  src={this.state.sliderPhotos[Math.floor(Math.random() * (3 - 1 + 1)) + 1]} alt="gallery3"  />
                    <img className="Slide " style={style}  src={this.state.sliderPhotos[Math.floor(Math.random() * (3 - 1 + 1)) + 1]} alt="gallery4"   />
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