import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import { getAuthUser } from '../helper/Storage';

const AdminAuth = () => {
    const auth = getAuthUser();
    return <> { auth && auth.role === 1 ? <Outlet /> : <Navigate to={"/"} />} </>;
};

export default AdminAuth;