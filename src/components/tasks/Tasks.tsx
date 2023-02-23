import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './tasks.scss';

export const Tasks: FC = () => {
  const { translate } = useSelector((store: RootState) => store.reducerLanguage);

  return (
    <div className="task-text">
      <p>{translate.taskCodeText_1}</p>
      <p>{translate.taskCodeText_2}</p>
      <button>{translate.taskCodeShow}</button>
    </div>
  );
};
