import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './footer.scss';

export const Footer: FC = () => {
  const { translate } = useSelector((store: RootState) => store.reducerLanguage);
  return (
    <footer>
      <div className="container">
        <h2>{translate.title}</h2>
      </div>
    </footer>
  );
};
