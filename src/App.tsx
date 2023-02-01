import React, { FC } from 'react';
import { Rezume } from './rezume/Rezume';
import './main_style.scss';

const App: FC = () => {
  return (
    <div className="App">
      <Rezume />
    </div>
  );
};

export default App;
