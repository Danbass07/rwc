import React, { Component } from 'react';
<<<<<<< HEAD
import './Body.css';
=======
import './Rounddiv.css';
>>>>>>> 6164a050c836dc43e7f76d4d26bcb3bb805e1d53

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
<<<<<<< HEAD
    if (currentScrollPosition < this.props.min)  {
=======
    if (currentScrollPosition > this.props.min)  {
>>>>>>> 6164a050c836dc43e7f76d4d26bcb3bb805e1d53
         const className = 'active';
        this.setState({
            class: className,
        })
    
       
<<<<<<< HEAD
    } else if (currentScrollPosition > this.props.min || currentScrollPosition > this.props.max){
=======
    } else if ( currentScrollPosition > this.props.max){
>>>>>>> 6164a050c836dc43e7f76d4d26bcb3bb805e1d53
        
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
<<<<<<< HEAD
                        <div className={"Photo " + this.state.class} ></div>
=======
                        <div className={"Photo "+ this.state.class + " " + this.props.side} ></div>
>>>>>>> 6164a050c836dc43e7f76d4d26bcb3bb805e1d53
                    </div>
                    
                   
            
        );
    }
}


