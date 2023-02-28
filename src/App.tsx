import React, { FC } from 'react';
import { Rezume } from './rezume/Rezume';
import { RootState } from './store/index';
import { useSelector } from 'react-redux';
import './main_style.scss';

const App: FC = () => {
  const { color } = useSelector((state: RootState) => state.ColorReducer);
  return (
    <div className={color ? 'App' : ''}>
      <Rezume />
    </div>
  );
};

export default App;
