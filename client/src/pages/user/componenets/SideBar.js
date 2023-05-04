import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <ListGroup as="ul" className='side-bar col-3'>
            <ListGroup.Item as="li" active disabled>
                User Profile
            </ListGroup.Item>

            <ListGroup.Item as="li">
                <Link to={'/user/my-profile'}>My Profile</Link>
            </ListGroup.Item>

            <ListGroup.Item as="li">
                <Link to={'/user/test'}>New Test</Link>
            </ListGroup.Item>

            <ListGroup.Item as="li">
                <Link to={'/user/history'}>Tests History</Link>
            </ListGroup.Item>

            <ListGroup.Item as="li">
                Logout
            </ListGroup.Item>
        </ListGroup>
    );
};

export default SideBar;