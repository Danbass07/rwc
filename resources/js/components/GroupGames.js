import React, { Component } from "react";

export default class GroupGames extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="group-games">
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
                            <td>People painting on last meeting</td>
                            <td>4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
