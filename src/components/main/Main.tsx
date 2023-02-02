import { FC } from 'react';
import { PortfolioSlide } from '../portfolioSlide/PortfolioSlide';
import { Tasks } from '../tasks/Tasks';
import './main.scss';

export const Main: FC = () => {
  return (
    <div className="main">
      <div className="main_head">
        <h1>Алымбаева Асель</h1>
        <div className="title-prof">
          <p>Frontend developer</p>
        </div>
        <div className="main_about">
          <h5>Коротко о себе</h5>
          <div className="main_about-text block-text">
            <p>
              Люблю &ldquo;думать в слух&ldquo; и разбирать фильмы и мультфильмы. Свободное время
              стараюсь гулят на природе и заниматься спортом. Не люблю сидеть без дела и поэтому
              всегда ищу интересные идеи и занятия.
            </p>
            <p>
              Для меня самым дорогим является время и здоровье. Поэтому я пунктуален и ценю людей
              уделявщей свое время на меня. Так же я не теряя время на не нужные информации в
              интернете стараюсь это время проводить со своей семьей. И веду здоровый образ жизни.
            </p>
          </div>
          <h5>Портфолио</h5>
          <div className="main_about-slide">
            <PortfolioSlide />
          </div>
          <div className="main_about_tasks">
            <h5>Задачи</h5>
            <Tasks />
          </div>
          <div className="main_about_courses">
            <ul>
              <li>Jyldyz Academy (finished)</li>
              <li>RS-SCHOOL (finished)</li>
              <li>RS-SCHOOL React (finished)</li>
            </ul>
            <button>
              <p>сертификат</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
