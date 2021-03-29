import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ROOT, CHARDETAILS, CARRINHO } from './consts/routePaths';
import Home from './pages/home';
import charDetails from './pages/charDetails';
import  Carrinho from './pages/carrinho/carrinho';

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path ="/" exact component={Home}/>
                    <Route path={CHARDETAILS} component={charDetails} />
                    <Route path ="/carrinho" exact component={Carrinho}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Routes;