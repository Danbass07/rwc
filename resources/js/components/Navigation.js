import React, { Component } from 'react';
import './Navigation.css';

export default class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            class: 'show',
        }
        this.handleScroll = this.handleScroll.bind(this);
     
    }
    handleScroll()  {
    
    let currentScrollPosition=$(window).scrollTop();
    if (currentScrollPosition > 10)  {
        const className = 'hidden';
        this.setState({
            class: className,
        })     
    } else if (currentScrollPosition < 10)   {
            const className = 'show';
            this.setState({
                class: className,
            })
        }

    }
           
        
       
        
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    render() {
      
        return (
          
                    <div className={ this.state.class}>
                        <div className={"TopBar " }>
                        <div className="Logo"></div>
                        <div className="Logo"></div>
                        
                        <div className="Header">Retford Wyrven Gaming Club</div>
                        <div className="ShortHeader">R W G C</div>
                       
                        <div className="Logo"></div>
                        <div className="Logo"></div>
                        </div>
                        <div className="Flames"></div>
                        
                    </div>
                    
                   
            
        );
    }
}


