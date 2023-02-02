import { FC } from 'react';
import taskMeneger1 from '../../assets/taskMeneger-1.png';
import './portfolioSlide.scss';

export const PortfolioSlide: FC = () => {
  return (
    <div className="portfolio-slides">
      <div className="portfolio-slide_item">
        <div className="portfolio-slide_img">
          <img src={taskMeneger1} alt="" />
        </div>
        <div className="portfolio-slide_texts">
          <h6>Menegment Progect</h6>
          <p>Учебная командная работа</p>
          <div className="portfolio-slide_info">
            <p>Написано:</p>
            <ul>
              <li>React</li>
              <li>Redux-toolkit</li>
              <li>React-hook-form</li>
              <li>SCSS</li>
              <li>MUI</li>
              <li>Eslint</li>
            </ul>
          </div>
          <button>Узнать больше</button>
        </div>
      </div>
      <div className="portfolio-slides_btns">
        <button>
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="306px"
            height="306px"
            viewBox="0 0 306 306"
            xmlSpace="preserve"
          >
            <g>
              <g id="chevron-left">
                <polygon points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153 		" />
              </g>
            </g>
          </svg>
        </button>
        <button>
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="306px"
            height="306px"
            viewBox="0 0 306 306"
            xmlSpace="preserve"
          >
            <g>
              <g id="keyboard-arrow-right">
                <polygon points="58.65,267.75 175.95,153 58.65,35.7 94.35,0 247.35,153 94.35,306 		" />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};
