import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
// import Fruits from './components/Fruits'
import './App.css';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
