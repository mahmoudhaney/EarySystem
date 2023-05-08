import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import './css/login.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import { setAuthUser } from '../../helper/Storage';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [login, setLogin] = useState({
        email: "",
        password: "",
        loading: false,
        err: null,
    });

    const LoginFunction = (e) => {
        e.preventDefault();
        setLogin({ ...login, loading: true, err: [] });
        axios
            .post("http://localhost:5000/auth/login", {
                email: login.email,
                password: login.password,
            })
            .then((resp) => {
                setLogin({ ...login, loading: false, err: null });
                setAuthUser(resp.data);
                if (resp.data.role === 0) {
                    navigate("/user");
                } else {
                    navigate("/admin");
                }
            })
            .catch((errors) => {
                setLogin({ ...login, loading: false, err: errors.response.data.msg, });
            });
    };

    return (
        <div className="row section-padding">
            <div className="col-6">
                <h1 className="section-title">Login Form</h1>

                <div className="login">
                    {login.err != null && (
                        <Alert variant="danger">
                        {login.err}
                        </Alert>
                    )}                 

                    <Form onSubmit={LoginFunction}>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Email" required
                                value={login.email}
                                onChange={(e) => setLogin({ ...login, email: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="password" placeholder="Password" required
                                value={login.password}
                                onChange={(e) => setLogin({ ...login, password: e.target.value })}
                            />
                        </Form.Group>

                        <Button className="btn btn-dark w-100 mb-3" variant="primary" type="submit" disabled={login.loading === true}>
                            Login
                        </Button>
                        <Link to={'/register'}>
                            <Button className="btn btn-dark w-100" variant="primary" type="button">
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