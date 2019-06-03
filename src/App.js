import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Menu from './componentes/layout/menu/Menu';
import Topo from './componentes/layout/topo/Topo';
import Rodape from './componentes/layout/rodape/Rodape';
import MelhoresOfertasRegiao from './componentes/melhores-ofertas-regiao/MelhoresOfertasRegiao';
import Login from './componentes/login/Login';

function App() {
  return (
    <div>
      <Menu />
      <Topo />
      <div className="container">
        <BrowserRouter>
          <Route exact path="/" component={MelhoresOfertasRegiao} />
          <Route path="/login" component={Login} />
        </BrowserRouter>
      </div>
      <Rodape />
    </div>
  );
}

export default App;
