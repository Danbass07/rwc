import React, { Component } from 'react';
import './Body.css';

export default class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            opacity: '1',
            class: 'notactive',
        }
        this.handleScroll = this.handleScroll.bind(this);
     
    }
    handleScroll()  {
     
    let currentScrollPosition=$(window).scrollTop();
    if (currentScrollPosition < this.props.min)  {
         const className = 'active';
        this.setState({
            class: className,
        })
    
       
    } else if (currentScrollPosition > this.props.min || currentScrollPosition > this.props.max){
        
        const className = 'notactive';
        this.setState({
            class: className,
        })
    }
   
    {console.log(currentScrollPosition)}

    }
           
        
       
        
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    render() {
      
        return (
          
                    <div className="Cell">
                        <div className={"Photo " + this.state.class} ></div>
                    </div>
                    
                   
            
        );
    }
}


