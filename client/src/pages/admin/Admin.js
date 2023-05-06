import React from 'react';
import SideBar from '../user/componenets/SideBar';
import Profile from './componenets/Profile';

const Admin = () => {
    return (
        <div className='row section-padding justify-content-around'>
            <SideBar/>
            <Profile/>
        </div>
    );
};

export default Admin;