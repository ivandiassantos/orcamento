import React from 'react';
import './App.css';
import Menu from './componentes/layout/menu/Menu';
import Topo from './componentes/layout/topo/Topo';
import Rodape from './componentes/layout/rodape/Rodape';

function App() {
  return (
    <div>
      <Menu />
      <Topo />
      <div className="container">
        {this.props.children}
      </div>
      <Rodape />
    </div>
  );
}

export default App;
