import React, { Component } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import './style.css';

export class Approval extends Component {
  
  render() {
    return (
      <div className='topMid'>
        <h3>Your Applications</h3>
        <p>check status of leave applications.</p>
      </div>
    );
  }
}

export default Approval;
