import React from 'react';
import Player from './components/Player';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App" style={{ display: 'flex', placeContent: 'center' }}>
      <Player />
      <Sidebar />
    </div>
  );
}

export default App;


//TODO: Compartilhar informações entre o Sidebar e Player;
//TODO: Criar arquivo para isolar os dados da aplicação;
//TODO: Add redux (npm i --save redux react-redux);
//TODO: Criar uma Store;
//TODO: Importar a Store no App.js e criar um Provider;
//TODO: Criar a action - src/actions/movieAction.js - selectMovie;
//TODO: Criar um reducer - src/reducers/movieReducer.js - movieReducer;
//TODO: Criar o combineReducers - src/reducers/index.js;
//TODO: Inserir como parâmetro da createStore(rootReducer) nossos Reducers;
//TODO: Conectar o Redux ao componente SideBar, através do connect(mapStateToProps, mapDispatchToProps);
//TODO: Conectar o Redux ao componente Player, através do connect(mapStateToProps, null).
