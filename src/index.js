import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {IndexRoute} from 'react-router';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import * as serviceWorker from './serviceWorker';
import MelhoresOfertasRegiao from './componentes/melhores-ofertas-regiao/MelhoresOfertasRegiao';
import App from './App';

ReactDOM.render
    (
        (<Router>
            <Route path="/" component={App}>
                <IndexRoute component={MelhoresOfertasRegiao}/>
            </Route>
        </Router>),
        document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
