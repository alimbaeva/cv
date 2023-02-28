import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './footer.scss';

export const Footer: FC = () => {
  const { translate } = useSelector((store: RootState) => store.reducerLanguage);
  const { color } = useSelector((state: RootState) => state.ColorReducer);

  return (
    <footer className={color ? 'footerDark' : 'footer'}>
      <div className="container">
        <h2>{translate.title}</h2>
      </div>
    </footer>
  );
};
