import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

/*Components*/
import Home from '../screens/Home';
import Home2 from '../screens/Home2';
import Header from '../screens/Header';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <div id="browserRouterDiv" class="container">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true}/>
          <Route path="/charts" component={Home2}/>
          <Route path="/people" component={Home2}/>
          <Route path="/andamento" component={Home2}/>
          <Route path="/historico" component={Home2}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
