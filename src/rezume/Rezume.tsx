import { FC } from 'react';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { Main } from '../components/main/Main';
import { Skills } from '../components/skills/Skills';

export const Rezume: FC = () => {
  return (
    <div className="container">
      <Header />
      <Skills />
      {/* <Main />
      <Footer /> */}
    </div>
  );
};
