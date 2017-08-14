import React, { Component } from 'react';

export default class  extends Component {
    render () {
        return (
            <div>
                <ul className="listContainer">
                    {this.props.employees.map((employee) => {
                        return (
                            <li key={employee.id} className="listText" onClick={() => this.props.selectEmployee(employee)}>
                                {employee.name}
                            </li>
                        )
                    })

                    }

                </ul>
            </div>
        );
    }
}