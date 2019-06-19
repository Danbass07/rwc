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
    gridChanger() {
        this.setState({
            grid: "welcome-small"
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
                    <div className="screen" onClick={() => this.screenOff()}><GroupInfo group={this.state.group.name}/></div>
                ) : null}
                <div className={this.state.grid} onClick={() => this.gridChanger()}>
                    {/* 
            <div className={screen}>
            
            <GroupHype types={this.state.types}/>
            <GroupGames /> 
            */}

                    <div
                        className="grid-element"
                        onClick={() => this.gridChanger()}
                    >
                        <div className="round-div animated1">GB</div>
                    </div>
                    <div className="grid-element">
                        <div className="round-div animated2">mTg</div>
                    </div>
                    <div className="grid-element">
                        <div className="round-div animated3"><img className="logo-type" src="http://malek.ovh/rwc/public/images/40K.png"/></div>
                    </div>

                    <div className="grid-element">
                        <div className="round-div animated4">BB</div>
                    </div>
                    <div className="grid-element">
                        <div className="logo-group animated5" />
                    </div>
                    <div className="grid-element">
                        <div className="round-div animated6">P</div>
                    </div>

                    <div className="grid-element">
                        <div className="round-div animated7">AoS</div>
                    </div>
                    <div className="grid-element">
                        <div className="round-div animated8">!!!</div>
                    </div>
                    <div className="grid-element">
                        <div className="round-div animated9">##</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
