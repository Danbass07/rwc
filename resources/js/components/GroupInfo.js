import React, { Component } from "react";

export default class GroupInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="group-info">
                    <h2>{this.props.group.name}</h2>
                    <table style={{ width: "100%" }}>
                        <tbody>
                            <tr>
                                <td>Members on Last Meeting</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Club Birthday</td>
                                <td> June 12th </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
 
            </div>
        );
    }
}
