import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const ResponsesTable = () => {
    return (
        <div className="col-7">
            <Link to={"/admin/manage-responses/add"} className="btn btn-success mb-3">
            Add New Response +
            </Link>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Response</th>
                        <th>Correct</th>
                        <th>Question</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>It's Dog</td>
                        <td>Right</td>
                        <td>What is this?</td>
                        <td>
                            <Link to={"/admin/manage-responses/5"} className="btn btn-sm btn-info"> Show </Link>
                            <Link to={"/admin/manage-responses/update/5"} className="btn btn-sm btn-primary mx-2"> Update </Link>
                            <button className="btn btn-sm btn-danger"> Delete </button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ResponsesTable;