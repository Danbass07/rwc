import React, { Component } from 'react';
import './Rounddiv.css';

export default class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            class: 'notactive',
        }
        this.handleScroll = this.handleScroll.bind(this);
     
    }
    handleScroll()  {
     
    let currentScrollPosition=$(window).scrollTop();
    if (currentScrollPosition > this.props.min && currentScrollPosition < this.props.max)  {
         const className = 'active';
        this.setState({
            class: className,
        })
    
       
    } else if ( currentScrollPosition < this.props.min || currentScrollPosition > this.props.max){
        
        const className = 'notactive';
        this.setState({
            class: className,
        })
    }
   
  

    
}
           
        
       
        
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    render() {
      const style = {
        
         backgroundImage: "url(http://localhost:8000/images/"+this.props.image+")",
       
      }
        return (
          
                    <div className="Cell">
                        <div style={style} className={"Photo "+ this.state.class + " " + this.props.side} ></div>
                    </div>
                    
                   
            
        );
    }
}


