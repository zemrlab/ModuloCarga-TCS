import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../componentes/App';
import TableResults from '../componentes/TableResults';
import NotFoundPage from '../componentes/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <h3>Carga de Datos</h3>
            <hr />
            <Switch>
                <Route path="/" component={App} exact={true} />
                <Route path="/results" component={TableResults} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;