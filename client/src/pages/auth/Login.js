import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import './css/login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="row section-padding">
            <div className="col-6">
                <h1 className="section-title">Login Form</h1>

                <div className="login">
                    <Alert variant="danger">
                        Invalid email or password
                    </Alert>

                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Email" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>

                        <Button className="btn btn-dark w-100 mb-3" variant="primary" type="submit">
                            Login
                        </Button>
                        <Link to={'/register'}>
                            <Button className="btn btn-dark w-100" variant="primary" type="submit">
                                Register
                            </Button>
                        </Link>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;