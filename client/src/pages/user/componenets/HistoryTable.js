import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const HistoryTable = () => {
    return (
        <div className="col-6">
            <Link to={"/user/test"} className="btn btn-success mb-3">
            Take New Test +
            </Link>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Test Date</th>
                        <th>Total Questions</th>
                        <th>Your Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>01-01-2002</td>
                        <td>10</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default HistoryTable;