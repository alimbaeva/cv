import React, { FC } from 'react';
import { Rezume } from './rezume/Rezume';
import { store } from './store/index';
import { Provider } from 'react-redux';
import './main_style.scss';

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Rezume />
      </div>
    </Provider>
  );
};

export default App;
