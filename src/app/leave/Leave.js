import React, { Component } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

export class Leave extends Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">Create a new leave request application </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="!#" onClick={(event) => event.preventDefault()}>
      
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
               
              </li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Leave Application</h4>
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Leave Reason</label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="exampleInputName1"
                      placeholder="What is the leave reason?"
                    />
                  </Form.Group>
                  
                  <Form.Group>
                    <label htmlFor="exampleSelectGender">Leave Type</label>
                    <select className="form-control" id="exampleSelectGender">
                      <option>Medical</option>
                      <option>Vacation</option>
                      <option>General</option>
                      <option>Person</option>
                    </select>
                  </Form.Group>

                  <Form.Group>
                    <label htmlFor="start">Start Date</label>
                    <Form.Control
                      type="date"
                      className="form-control"
                      id="start"
                      value='2020-09-04'
                      min='2020-01-01'
                      max='2022-01-01'
                      
                    />
                  </Form.Group>

                  <Form.Group>
                    <label htmlFor="end">End Date</label>
                    <Form.Control
                      type="date"
                      className="form-control"
                      id="end"
                      value='2020-09-04'
                      min='2020-01-01'
                      max='2022-01-01'
                    />
                  </Form.Group>
                  
                  <button type="submit" className="btn btn-primary mr-2">
                    Submit
                  </button>
                  <button className="btn btn-light">Cancel</button>
                </form>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Leave;
