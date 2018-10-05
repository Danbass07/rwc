import React, { Component } from 'react';
import './Navigation.css';

export default class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            class: '',
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
            const className = '';
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
          
                    <div >
                        <div className={"TopBar " + this.state.class}>Top Bar</div>
                    </div>
                    
                   
            
        );
    }
}


