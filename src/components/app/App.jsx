import React from 'react';
import { 
  BrowserRouter as Router,
  Route, 
  Switch, 
} from 'react-router-dom'; 
import HeyArnoldContainer from '../../containers/HeyArnoldContainer'
import HeyArnoldDetailContainer from '../../containers/HeyArnoldDetailContainer'


export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route  
            path="/"
            exact 
            render={(routerProps) => <HeyArnoldContainer {...routerProps} />}
            />
          <Route  
            path="/:id"
            exact 
            render={(routerProps) => <HeyArnoldDetailContainer {...routerProps} />}
            />
        </Switch>
      </Router>
    </div>
  ) ;
}
