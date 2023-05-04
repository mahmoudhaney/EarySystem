import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const Profile = () => {
    return (
        <div className='col-6'>
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

                <Button className="btn btn-primary w-40 mb-3" variant="primary" type="submit">
                Update
                </Button>
            </Form>
        </div>
    );
};

export default Profile;