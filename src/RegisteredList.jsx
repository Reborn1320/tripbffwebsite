import './App.css';
import React from 'react';
import moment from "moment";
import { TRIP_URL } from "./ServiceConstants";

export default class RegisteredListComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []
      };
    }

    componentDidMount() {
        fetch(TRIP_URL + "/registerNotify/list")                
        .then(res => res.json())
        .then(
            (data) => {
                this.setState({items: data});
            },
            (error) => {
                console.log(error);
            }
        );
    }

   render() {
       return (
           <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Registerd Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.items.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{element.email}</td>
                                    <td>{moment(element.createdDate).format("DD/MM/YYYY")}</td>
                                </tr>
                            )
                           
                        })
                    }
                    </tbody>
                </table>
           </div>           
       )
   }
}