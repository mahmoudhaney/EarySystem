import React from 'react';
import Sidebar from '../componenets/Sidebar';
import ResponsesTable from '../componenets/ResponsesTable';

const Responses = () => {
    return (
        <div className='row section-padding justify-content-around'>
            <Sidebar/>
            <ResponsesTable/>
        </div>
    );
};

export default Responses;