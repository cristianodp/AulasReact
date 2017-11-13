import React from 'react'
import {Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router'

import AppOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>   
        <Route path='/' component={AppOrApp}>
            <IndexRoute component={Dashboard}/> 
            <Route path="billingCycles" component={BillingCycle}/>
        </Route>
        <Redirect from='*' to="/"/>
    </Router>
)
