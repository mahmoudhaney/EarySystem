import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const AddResponse = () => {
    return (
        <div className="row section-padding">
            <div className="col-6">
                <h1 className="section-title">Add Response</h1>

                <div className="login">
                    <Alert variant="danger">
                        Invalid email or password
                    </Alert>

                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Response" required />
                        </Form.Group>

                        <Form.Select aria-label="Correct" className="mb-3">
                            <option>Choose</option>
                            <option value="1">Correct</option>
                            <option value="0">Wrong</option>
                        </Form.Select>

                        <Form.Select aria-label="Question" className="mb-3">
                            <option>Choose a Question</option>
                            <option value="1">Question 1</option>
                            <option value="1">Question 2</option>
                            <option value="1">Question 3</option>
                        </Form.Select>

                        <Button className="btn btn-dark w-100 mb-3" variant="primary" type="submit">
                        Add
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddResponse;