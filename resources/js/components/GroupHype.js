import React, { Component } from "react";

export default class GroupHype extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="group-hype">
                <h1>Group Hypes</h1>
                <table>
                    <tbody>
                        {this.props.types.map(type => {
                            return (
                                <tr key={type.id}>
                                    <td>{type.type}</td>
                                    <td>{type.pivot.hype}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
