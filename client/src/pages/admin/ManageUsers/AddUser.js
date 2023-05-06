import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import axios from 'axios';
import {getAuthUser} from '../../../helper/Storage';

const AddUser = () => {
    const auth = getAuthUser();

    const [user, setUser] = useState ({
        name: "",
        email: "",
        password: "",
        phone: "",
        loading: false,
        err: null,
        success: null,
    });

    const CreateUser = (e) => {
        e.preventDefault();
        setUser({ ...user, loading: true, err: [] });

        axios
            .post("http://localhost:5000/auth/register", 
            {
                name: user.name,
                email: user.email,
                password: user.password,
                phone: user.phone,
            })
            .then((resp) => {
                setUser({ 
                    name: "",
                    email: "",
                    password: "",
                    phone: "",
                    loading: false,
                    err: null,
                    success: "User Created Successfully",
                });
            })
            .catch((errors) => {
                setUser({ 
                    ...user,
                    loading: false,
                    err: "Something went wrong",
                    success: null,
                });
            });
    };

    return (
        <div className="row section-padding">
            <div className="col-6">
                <h1 className="section-title">Add User</h1>

                <div className="login">
                    {user.err && (
                        <Alert variant="danger">
                        {user.err}
                        </Alert>
                    )}

                    {user.success && (
                        <Alert variant="success">
                        {user.success}
                        </Alert>
                    )}

                    <Form onSubmit={CreateUser}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Your Name" required 
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Email" required 
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="password" placeholder="Password" required 
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Phone Number" required 
                            value={user.phone}
                            onChange={(e) => setUser({ ...user, phone: e.target.value })}
                            />
                        </Form.Group>

                        <Button className="btn btn-dark w-100 mb-3" variant="primary" type="submit">
                        Add
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;