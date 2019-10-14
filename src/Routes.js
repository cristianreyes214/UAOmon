import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Start from './Components/(1)Home/Start';
import Selection from './Components/(2)Fight/Selection';
import Fight from './Components/(2)Fight/Fight';
import Finish from './Components/(3)End/Finish';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Start} />
            <Route exact path='/seleccion' component={Selection} />
            <Route exact path='/pelea' component={Fight} />
            <Route exact path='/fin' component={Finish} />
        </Switch>
    );
}

export default Routes;