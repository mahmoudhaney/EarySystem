import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import { getAuthUser } from '../helper/Storage';

const UserAuth = () => {
    const auth = getAuthUser();
    return <> { auth && auth.role === 0 ? <Outlet /> : <Navigate to={"/"} />} </>;
};

export default UserAuth;