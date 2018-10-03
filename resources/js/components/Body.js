import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Rounddiv from './Rounddiv';
import './Body.css';

export default class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            opacity: '1',
            class: '',
        }
       
     
    }
   
    render() {
      
        return (
            <div className="App" >
                <h1 className="Title1">Lorem Ipsum</h1>
                
                <h2 className="Title2">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h2>
                <h3 className="Title3">"Nie ma nikogo, kto lubiłby ból dla samego bólu, szukał go tylko po to, by go poczuć, po prostu dlatego, że to ból..."</h3>
                <div className="MainContainer">
                    <div className="Cell">
                        <Rounddiv min={140} max={420} />
                    </div>
                    <div className="Cell">
                        <div className="Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt pulvinar nulla vel maximus. Integer ex arcu, tempor nec eros sed, pulvinar aliquam tortor. Cras volutpat, nulla laoreet consequat scelerisque, eros purus lobortis dui, vitae sodales lorem augue eleifend metus. Donec ut ex volutpat, imperdiet nunc at, elementum magna. Vestibulum tempus neque id odio tincidunt malesuada. Integer sit amet elit pharetra, consectetur quam et, molestie dolor. Aenean ligula libero, commodo ut eros sed, venenatis posuere lorem.</div>
                    </div>
                    <div className="Cell">
                         <Rounddiv min={140} max={420}/>
                    </div>
                    <div className="Cell">
                    <Rounddiv min={420} max={600}/>
                    </div>
                    <div className="Cell">
                        <div className="Text">Sed quis luctus lacus, eget dictum sapien. Pellentesque tincidunt nunc et nulla dapibus, nec elementum tortor rutrum. Phasellus pulvinar viverra aliquam. Integer sit amet orci nulla. Vivamus condimentum aliquam nisi. Aliquam erat volutpat. Aenean ac velit nec nibh semper lobortis. Praesent tincidunt nisi lacus, id accumsan lacus rutrum non. Vestibulum non lectus et mauris scelerisque porttitor et ac enim. Ut non finibus quam. Quisque sollicitudin feugiat ex commodo suscipit. Donec semper mattis leo, in faucibus urna convallis eu. Aenean efficitur tincidunt sem sit amet auctor. Phasellus rhoncus ornare dolor sit amet convallis. Curabitur vitae justo lobortis, ultrices risus ac, posuere libero.</div>
                    </div>
                    <div className="Cell">
                    <Rounddiv min={420} max={600}/>
                    </div>  
                    <div className="Cell">
                    <Rounddiv min={650} max={900}/>
                    </div>
                    <div className="Cell">
                        <div className="Text">In ut leo ac risus malesuada porta non eget lorem. Ut malesuada imperdiet lorem, ac sodales neque egestas et. Aenean semper tincidunt est a tempus. Morbi vel lorem in ante eleifend laoreet et sed sapien. Sed lacinia enim ipsum, a lobortis arcu tincidunt quis. In lectus magna, ornare nec tincidunt sit amet, tempor egestas dui. Donec a molestie nisi. Aliquam aliquet condimentum urna ac varius. Proin interdum, elit quis varius gravida, lectus nisi accumsan lacus, bibendum accumsan arcu felis vitae ante. Etiam interdum tellus sed nunc tincidunt, vel mattis felis ultrices. Sed sit amet felis blandit, mollis eros id, sodales lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
                    </div>
                    <div className="Cell">
                    <Rounddiv min={650} max={900}/>
                    </div>
                   
                </div>
            </div>
        );
    }
}


