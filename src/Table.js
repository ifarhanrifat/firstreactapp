import React, {Component}  from 'react';

class Table extends Component{
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Farhan</td>
                        <td>BS</td>
                        <td>ifarhanrifat@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table;
