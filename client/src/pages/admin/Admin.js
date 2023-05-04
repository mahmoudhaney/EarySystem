import React from 'react';
import Sidebar from './componenets/Sidebar';
import Profile from './componenets/Profile';

const Admin = () => {
    return (
        <div className='row section-padding justify-content-around'>
            <Sidebar/>
            <Profile/>
        </div>
    );
};

export default Admin;