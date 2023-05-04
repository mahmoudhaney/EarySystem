import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import './css/sidebar.css';

const sideBar = () => {
    return (
        <ListGroup as="ul" className='side-bar col-3'>
            <ListGroup.Item as="li" active>
                <Link to={'/admin/my-profile'}>Admin Profile</Link>
            </ListGroup.Item>

            <ListGroup.Item as="li">
                <Link to={'/admin/manage-users'}>Manage Users</Link>
            </ListGroup.Item>

            <ListGroup.Item as="li">
                <Link to={'/admin/manage-questions'}>Manage Questions</Link>
            </ListGroup.Item>

            <ListGroup.Item as="li">
                <Link to={'/admin/manage-responses'}>Manage Responses</Link>
            </ListGroup.Item>

            <ListGroup.Item as="li">
                Logout
            </ListGroup.Item>
        </ListGroup>
    );
};

export default sideBar;