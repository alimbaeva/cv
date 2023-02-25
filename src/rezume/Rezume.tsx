import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { Main } from '../components/main/Main';
import { MoreAboutTopic } from '../components/portfolioSlide/MoreAboutTopic';
import { Skills } from '../components/skills/Skills';
import { RootState } from '../store';

export const Rezume: FC = () => {
  const { number, show } = useSelector((store: RootState) => store.reducerTask);
  return (
    <div className="container">
      <Header />
      {show && <MoreAboutTopic numberPortfolio={number} />}
      {!show && (
        <>
          <Skills />
          <Main />
        </>
      )}
      <Footer />
    </div>
  );
};
