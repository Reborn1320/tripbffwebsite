import './App.css';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TRIP_URL } from "./ServiceConstants";

export default class RegisterNotify extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        isSubmited: false
      };
    }
  
    _handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    _registerNotify = () => {
        this.setState({isSubmited: true});

        fetch(TRIP_URL + "/registerNotify", {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
              },
            body: JSON.stringify({email: this.state.email})
        })                
        .then(res => res.json())
        .then(
            (response) => {
                toast.success('Registered Successfully!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    });
                this.setState({
                    isSubmited: false
                });
        },
        (error) => {
            toast.success('Registered Successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                });
            this.setState({
                isSubmited: false
            });
        }
        ) 
    }

   render() {
       return (
            <div className="notify-outer-container">
                  <input type="email" className="form-control email-field" 
                            placeholder="Enter your email"
                            onChange={this._handleEmailChange}
                            value={this.state.email}
                            ></input>
                  <div className="btn-submit-container">
                      {
                          this.state.isSubmited
                          ?  <button onClick={this._registerNotify} className="btn btn-primary btn-register" disabled>Notify me</button> 
                          : <button onClick={this._registerNotify} className="btn btn-primary btn-register">Notify me</button> 
                      }                      
                  </div>    
                  <ToastContainer />                 
             </div>   
       )
   }
}