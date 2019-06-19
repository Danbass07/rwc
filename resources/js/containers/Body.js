import React, { Component } from "react";
import GroupInfo from "../components/GroupInfo";
import GroupHype from "../components/GroupHype";
import GroupGames from "../components/GroupGames";
import RoundDiv from "../components/RoundDiv";

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerActive: false,
            group: {
                name: "empty"
            },
            types: [],
            grid: "welcome-big"
        };
    }

    clickMeHandler() {
        this.setState({
            headerActive: !this.state.headerActive
        });
    }

    componentDidMount() {
        axios.get("http://localhost:8000/api/hypenotizer/2").then(response =>
            this.setState({
                group: response.data.group,
                types: response.data.types
            })
        );
    }
    gridChanger(type) {
        this.setState({
            grid: "welcome-small",
            type: type,
        });
    }
    screenOff() {
        this.setState({
            grid: "welcome-big"
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.grid === "welcome-small" ? (
                    <div className="screen" 
                        onClick={() => this.screenOff()}
                        
                    ><GroupGames type={this.state.type} group={this.state.types}/></div>
                ) : null}
                <div  className={this.state.grid} >
                    {/* 
            <div className={screen}>
            
            <GroupHype types={this.state.types}/>
            <GroupGames /> 
            */}

                    <div
                        className="grid-element"
                        onClick={() => this.gridChanger('gb')}
                    >
                        <img className="logo-type animated1" src="http://malek.ovh/rwc/public/images/gb.png"/>
                    </div>
                    <div className="grid-element"
                    onClick={() => this.gridChanger('mtg')}>
                        <img className="logo-type animated2" src="http://malek.ovh/rwc/public/images/mtg.png"/>
                    </div>
                    <div className="grid-element">
                       <img className="logo-type-wide animated3" src="http://malek.ovh/rwc/public/images/40K.png"/>
                    </div>

                    <div className="grid-element">
                        <img className="logo-type animated4" src="http://malek.ovh/rwc/public/images/bb.jpg"/>
                    </div>
                    <div className="grid-element">
                        <div className="logo-group animated5" />
                    </div>
                    <div className="grid-element">
                        <img className="logo-type animated5" src="http://malek.ovh/rwc/public/images/brush.jpg"/>
                    </div>

                    <div className="grid-element">
                        <img className="logo-type animated6" src="http://malek.ovh/rwc/public/images/lotr.png"/>
                    </div>
                    <div className="grid-element">
                      
                    </div>
                    <div className="grid-element">
                       
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
