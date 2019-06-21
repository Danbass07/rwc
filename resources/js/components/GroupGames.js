import React, { Component } from "react";

export default class GroupGames extends Component {
    constructor(props) {
        super(props);
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
                    <h1>GROUP GAMES</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>Games Played</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>Number Of Campaigns Running</td>
                                <td>2</td>
                            </tr>
                            <tr>
                            
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
