import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './tasks.scss';

export const Tasks: FC = () => {
  const { translate } = useSelector((store: RootState) => store.reducerLanguage);
  const { color } = useSelector((state: RootState) => state.ColorReducer);

  return (
    <div className={color ? 'task-textDark' : 'task-text'}>
      <p>{translate.taskCodeText_1}</p>
      <p>{translate.taskCodeText_2}</p>
      <button>
        <a
          href="https://github.com/alimbaeva/tasks_for_portfolio_2023/blob/main/sostavChisla/test_1.2.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translate.taskCodeShow}
        </a>
      </button>
    </div>
  );
};
