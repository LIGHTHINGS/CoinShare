import React, { Component } from "react";
import './SignIn.css';

export default class SignIn extends Component {
    render() {
        return (
            <form>
                <div className="container mt-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6">
                            <div className="card px-5 py-5" id="form1">
                                <div className="form-data">
                                    <h3>Sign In</h3>
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" className="form-control mb-4" placeholder="Enter email" />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control mb-4" placeholder="Enter password" />
                                    </div>

                                    <div className="form-group float-left">
                                        <label className="custom-control-label" htmlFor="customCheck1">
                                            <input type="checkbox" className="custom-control-input"/> &nbsp;
                                            Remember me
                                        </label>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                                    <p className="forgot-password text-right" >
                                        Forgot <a href="#">password?</a>
                                    </p>
                                    <p className ="reg">
                                        Don't have an account yet? click <a href="#">here</a> to register
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
