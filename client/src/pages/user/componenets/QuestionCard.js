import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import './css/QuestionCard.css';

const QuestionCard = () => {
    return (
        <div className="col-7">
            <div>
                    <Alert variant="danger">
                        Invalid email or password
                    </Alert>

                    <Form className='TestForm'>
                        <Form.Group className="mb-4">
                            <audio controls className='w-50'>
                                <source src="horse.ogg" type="audio/ogg"/>
                                Your browser does not support the audio element.
                            </audio>
                            <Form.Label className='mb-2 mt-2'>Question 1</Form.Label>
                            <Form.Check type='radio' id='' label='Answer 1' />
                            <Form.Check type='radio' id='' label='Answer 1' />
                            <Form.Check type='radio' id='' label='Answer 1' />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <audio controls className='w-50'>
                                <source src="horse.ogg" type="audio/ogg"/>
                                Your browser does not support the audio element.
                            </audio>
                            <Form.Label className='mb-2 mt-2'>Question 1</Form.Label>
                            <Form.Check type='radio' id='' label='Answer 1' />
                            <Form.Check type='radio' id='' label='Answer 1' />
                            <Form.Check type='radio' id='' label='Answer 1' />
                        </Form.Group>

                        <Button className="btn btn-dark w-100 mb-3" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
        </div>
    );
};

export default QuestionCard;