import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Welcome from './Components/Welcome/Welcome';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
import SingleRanking from './Components/SingleRanking/SingleRanking';
import CreateTeam from './Components/CreateTeam/CreateTeam';
import TeamRanking from './Components/TeamRanking/TeamRanking';
import Account from './Components/Account/Account';
import NotFound from './Components/NotFound/NotFound';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Welcome}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/login' component={Login}/>
        <Route path='/home' component={Home}/>
        <Route path='/friends' component={Friends}/>
        <Route path='/ranking' component={SingleRanking}/>
        <Route path='/createteam' component={CreateTeam}/>
        <Route path='/teamranking' component={TeamRanking}/>
        <Route path='/account' component={Account}/>
        <Route path='*' component={NotFound}/>
    </Switch>
);

export default Routes;