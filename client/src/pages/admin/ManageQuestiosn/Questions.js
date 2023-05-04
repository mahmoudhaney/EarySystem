import React from 'react';
import Sidebar from '../componenets/Sidebar';
import QuestionsTable from '../componenets/QuestionsTable';

const Questions = () => {
    return (
        <div className='row section-padding justify-content-around'>
            <Sidebar/>
            <QuestionsTable/>
        </div>
    );
};

export default Questions;