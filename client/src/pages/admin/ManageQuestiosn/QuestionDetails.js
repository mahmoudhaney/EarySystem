import React, { useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Alert from "react-bootstrap/Alert";
import Spinner from 'react-bootstrap/Spinner';

const QuestionDetails = () => {

    let { id } = useParams();

    const [question, setQuestion] = useState ({
        loading: true,
        result: null,
        err: null,
    });

    useEffect(() => {
        setQuestion({ ...question, loading: true});
        axios
            .get("http://localhost:5000/question/" + id)
            .then((resp) => {
                setQuestion({ ...question, result: resp.data, loading: false, err: null });
            })
            .catch((err) => {
                setQuestion({ ...question, loading: false, err: "Something went wrong"});
            });
    }, []);

    return (
        <div className='row section-padding'>
            <div className="col-10 d-flex flex-column align-items-center">
                <h2 className='section-title' >Question Details</h2>

                {question.loading === true && (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                )}

                {question.loading === false && question.err != null && (
                    <Alert variant="danger" className='w-100'>
                    {question.err}
                    </Alert>
                )}

                {question.loading === false && question.err == null && (
                    <Card className='w-50'>
                        <Card.Header className='bg-primary'>Question ID {question.result.ID}</Card.Header>
                        <ListGroup variant="flush">

                            <ListGroup.Item>
                                <audio controls className='w-100'>
                                    <source src={question.result.audio} type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            </ListGroup.Item>

                            <ListGroup.Item>
                            {question.result.question}
                            </ListGroup.Item>
                            
                            <ListGroup.Item>
                                <Card.Header className='bg-primary'>Question Responses</Card.Header>
                                <ListGroup variant="flush">
                                    {question.result.responses.map((response) => (
                                        <ListGroup.Item>{response.response}</ListGroup.Item>
                                    ))}
                                    {question.result.responses.length === 0 && (
                                        <Alert variant="info" className='w-100'>
                                            No Responses Yet
                                        </Alert>
                                    )}
                                </ListGroup>
                            </ListGroup.Item>
                            
                            <Link to={"/admin/manage-questions/update/" + question.result.ID}>
                                <Button className="btn btn-primary w-100" variant="primary" type="submit">
                                    Update
                                </Button>
                            </Link>
                        </ListGroup>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default QuestionDetails;