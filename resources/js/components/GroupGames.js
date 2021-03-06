import React, { Component } from "react";
// import path from '../path.js';
const path = 'battlemind.malek.ovh';
//const path = 'localhost:3000';
console.log(path);
export default class GroupGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            group: {},
            type: {
                type: 'loading',
            },
        }
        
    }
    componentDidMount() {
        axios.get(`http://${path}/api/hypenotizer/${this.props.group.id}/typedetail/${this.props.typeId}`).then(response => {

          
        this.setState({
                group: response.data.group,
                type: response.data.type,
                totalHype: response.data.totalHype,
                numberOfPlayers: response.data.numberOfPlayers,
                numberOfGames: response.data.numberOfGames,
            })
        }
        
        );
    }

    render() {
        const style = {
            height: '100%',
            backgroundImage: 'url(http://malek.ovh/rwc/public/images/'+this.props.type+'.jpg)',
            backgroundPosition: 
                this.props.type === 'mtg' || this.props.type === 'venue' ? 'center top' : 
                this.props.type === 'gb' ? 'center bottom' :'center ',
            color: 'wheat',
            fontSize: '20px',
            paddingTop: '10%',
            
        }
        return (
            <div style={style}>
                <div className='info-screen'>
                    <h1>{this.state.type.type}</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>Number of Players</td>
                                <td>{this.state.numberOfPlayers}</td>
                            </tr>
                            <tr>
                                <td>Hype Level</td>
                                <td>{this.state.totalHype}</td>
                            </tr>
                            <tr>
                                <td>Total number of games</td>
                                <td>{this.state.numberOfGames}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
