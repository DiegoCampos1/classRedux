import React from 'react';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import { Provider } from 'react-redux';
import store from './store';
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App" style={{ display: 'flex', placeContent: 'center' }}>
          <Player />
          <Sidebar />
        </div>
      </Provider>
    );
  }
}

export default App;

//TODO: Conectar o Redux ao componente Player, através do connect(mapStateToProps, null).
