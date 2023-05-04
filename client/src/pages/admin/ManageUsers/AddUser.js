import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const AddUser = () => {
    return (
        <div className="row section-padding">
            <div className="col-6">
                <h1 className="section-title">Add User</h1>

                <div className="login">
                    <Alert variant="danger">
                        Invalid email or password
                    </Alert>

                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Your Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Email" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Phone Number" required />
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