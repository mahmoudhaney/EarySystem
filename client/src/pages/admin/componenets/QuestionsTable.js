import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const QuestionsTable = () => {
    return (
        <div className="col-7">
            <Link to={"/admin/manage-questions/add"} className="btn btn-success mb-3">
            Add New Question +
            </Link>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Question</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                            <Link to={"/admin/manage-questions/5"} className="btn btn-sm btn-info"> Show </Link>
                            <Link to={"/admin/manage-questions/5"} className="btn btn-sm btn-primary mx-2"> Update </Link>
                            <button className="btn btn-sm btn-danger"> Delete </button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default QuestionsTable;