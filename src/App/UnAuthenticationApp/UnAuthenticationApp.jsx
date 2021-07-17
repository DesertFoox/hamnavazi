import React from 'react';
import { BrowserRouter as Router , Route,Switch } from 'react-router-dom'

import Landing from '../../Screens/Landing'

const UnAuthenticationApp = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path='/' component={Landing}/>
            </Switch>
        </Router>
     );
}
 
export default UnAuthenticationApp;