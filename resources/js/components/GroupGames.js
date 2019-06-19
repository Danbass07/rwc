import React, { Component } from "react";

export default class GroupGames extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            backgroundImage: 'url(http://malek.ovh/rwc/public/images/gb.jpg)',
            color: 'wheat',
            fontSize: '20px',
        }
        return (
            <div style={style}>
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
        );
    }
}
