import React, { Component } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

export class BasicElements extends Component {
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
          <h3 className="page-title"> Checkout for today from the premises </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="!#" onClick={(event) => event.preventDefault()}>
                  Forms
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Form elements
              </li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Basic form elements</h4>
                <p className="card-description"> Basic form elements </p>
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Name</label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="exampleInputName1"
                      placeholder="Name"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail3">Email address</label>
                    <Form.Control
                      type="email"
                      className="form-control"
                      id="exampleInputEmail3"
                      placeholder="Email"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputPassword4">Password</label>
                    <Form.Control
                      type="password"
                      className="form-control"
                      id="exampleInputPassword4"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleSelectGender">Gender</label>
                    <select className="form-control" id="exampleSelectGender">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
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

export default BasicElements;
