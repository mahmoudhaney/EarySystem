import React from 'react';
import Sidebar from '../componenets/Sidebar';
import UsersTable from '../componenets/UsersTable';

const Users = () => {
    return (
        <div className='row section-padding justify-content-around'>
            <Sidebar/>
            <UsersTable/>
        </div>
    );
};

export default Users;