import React, { Component } from 'react';
import './Rounddiv.css';

export default class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            class: 'notactive',
        }
        
     
    }

    
    componentDidUpdate(prevProps) {
        if (this.props.scrollPosition !== prevProps.scrollPosition) {

                if (this.props.scrollPosition > this.props.min && this.props.scrollPosition < this.props.max)  {
                    const className = 'active';
                this.setState({
                    class: className,
                })
            
                
            } else if ( this.props.scrollPosition < this.props.min || this.props.scrollPosition > this.props.max){
                
                const className = 'notactive';
                this.setState({
                    class: className,
                })
            }
        }
    }
    render() {
      const style = {
        
         backgroundImage: "url(http://malek.ovh/rwc/resources/Img/"+this.props.image+")",
       
      }
        return (
          
                    <div className="Cell">
                        <div style={style} className={"Photo "+ this.state.class + " " + this.props.side} ></div>
                    </div>
                    
                   
            
        );
    }
}


