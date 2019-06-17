import React, { Component } from 'react';
import './Body.css';

export default class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            headerActive: false,
            group: {
                name: 'empty',
            },
            types: [],
        }

    }

    clickMeHandler(){
        this.setState({
            headerActive: !this.state.headerActive,
        })
    }
        
    componentDidMount() {
        axios.get("http://localhost:8000/api/hypenotizer/2").then(response => 
            this.setState({
                group: response.data.group,
                types: response.data.types,
            })
        );
    }
     
    

    render() {
        
    
        return (
            
            <div className="App" >
   
            
            <div>
                <h2>{this.state.group.name}</h2>
                {this.state.types.map(type => {
                    return<div key={type.id}>
                        <h3>{type.type}</h3>
                      
                        </div>
                })}
            </div>
            </div> // end of App
           
        );
    }
}


