import { FC } from 'react';
import { useSelector } from 'react-redux';
import taskMeneger1 from '../../assets/taskMeneger-1.png';
import { RootState } from '../../store';
import './portfolioSlide.scss';

export const PortfolioSlide: FC = () => {
  const { translate } = useSelector((store: RootState) => store.reducerLanguage);

  return (
    <div className="portfolio-slides">
      <div className="portfolio-slide_item">
        <div className="portfolio-slide_img">
          <img src={taskMeneger1} alt="" />
        </div>
        <div className="portfolio-slide_texts">
          <h6>{translate.portfolios[0].title}</h6>
          <p>{translate.portfolios[0].work}</p>
          <div className="portfolio-slide_info">
            <p>{translate.portfolios[0].writingtitle}</p>
            <ul>
              {translate.portfolios[0].writingLengueges.split(',').map((el, id) => {
                return <li key={id}>{el}</li>;
              })}
            </ul>
          </div>
          <button>{translate.btnLernMore}</button>
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
