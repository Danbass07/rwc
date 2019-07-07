import React, { Component } from "react";
import GroupInfo from "../components/GroupInfo";
import GroupHype from "../components/GroupHype";
import GroupGames from "../components/GroupGames";
import RoundDiv from "../components/RoundDiv";
import Screen from "../components/Screen";

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
        axios.get("http://battlemind.malek.ovh/api/hypenotizer/1").then(response => {

            console.log(response);
            this.setState({
                group: response.data.group,
                types: response.data.types
            })
        }

        );
    }
    gridChanger(type, id) {
        
            this.setState({
                grid: "welcome-small",
                type: type,
                typeId: id,
            });
       

    }
    screenOff() {
        this.setState({
            grid: "welcome-big expand"
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.grid === "welcome-small" ? (
                    <div className="screen" onClick={() => this.screenOff()}>
                       {this.state.type === 'gallery' ? <Screen/> :
                        <GroupGames type={this.state.type} typeId={this.state.typeId} group={this.state.group} />}
                    </div>) : <div className="screen group" />}
                    
                    <div className={this.state.grid} onClick={this.state.grid === "welcome-small" ? () => this.screenOff() : null}>
                        <div className="grid-element" 
                            onClick={() => this.gridChanger('gb', 4)}>
                            <img className="logo-type animated1" src="http://malek.ovh/rwc/public/images/gb.png" />
                        </div>
                        <div className="grid-element"
                            onClick={() => this.gridChanger('mtg', 37)}>
                            <img className="logo-type animated2" src="http://malek.ovh/rwc/public/images/mtg.png" />
                        </div>
                        <div className="grid-element" onClick={() => this.gridChanger('40K', 39)}>
                            <img className="logo-type-wide animated3" src="http://malek.ovh/rwc/public/images/40K.png" />
                        </div>

                        <div className="grid-element" onClick={() => this.gridChanger('bb', 38)}>
                            <img className="logo-type animated4" src="http://malek.ovh/rwc/public/images/bb.png" />
                        </div>
                        <div className="grid-element" onClick={() => this.gridChanger('venuesmall')}>
                            <div className="logo-group animated5" />
                        </div>
                        <div className="grid-element" onClick={() => this.gridChanger('gallery')}>
                            <img className="logo-type animated5" src="http://malek.ovh/rwc/public/images/gallery.png" />
                        </div>

                        <div className="grid-element">
                            <img className="logo-type animated6" onClick={() => this.gridChanger('lotr', 36)} src="http://malek.ovh/rwc/public/images/lotr.png" />
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
