import React, { useContext } from 'react';
import {Context} from '../index';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {REGISTRATION_ROUTE} from '../Utils/Consts';
import { observer } from 'mobx-react-lite';


const AppRouter = observer(() => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
             <Route path='*' element={<Navigate to={REGISTRATION_ROUTE}/>} />
        </Routes>
    );
});

export default AppRouter;