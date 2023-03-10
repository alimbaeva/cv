import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { PortfolioSlide } from '../portfolioSlide/PortfolioSlide';
import { Tasks } from '../tasks/Tasks';
import './main.scss';

export const Main: FC = () => {
  const { translate } = useSelector((store: RootState) => store.reducerLanguage);
  const { color } = useSelector((state: RootState) => state.ColorReducer);

  return (
    <div className={color ? 'mainDark' : 'main'}>
      <div className={color ? 'mainDark_head' : 'main_head'}>
        <div className={color ? 'mainDark_sub-header' : 'main_sub-header'}>
          <h1>{translate.title}</h1>
          <div className="title-prof">
            <p>{translate.profession}</p>
          </div>
        </div>
        <div className="main_about">
          <h5>{translate.aboutTitle}</h5>
          <div className={color ? 'mainDark_about-text block-text' : 'main_about-text block-text'}>
            <p>{translate.aboutText.text1}</p>
            <p>{translate.aboutText.text2}</p>
          </div>
          <h5>{translate.portfolioTitle}</h5>
          <div className={color ? 'mainDark_about-slide' : 'main_about-slide'}>
            <PortfolioSlide />
          </div>
          <div className="main_about_tasks">
            <h5>{translate.taskCodeTitle}</h5>
            <Tasks />
          </div>
          <div className={color ? 'mainDark_about_courses' : 'main_about_courses'}>
            <h5>{translate.coursesTitle}</h5>
            <ul className="">
              {translate.courses.map((el, id) => {
                return <li key={id}>{el}</li>;
              })}
            </ul>
            <button>
              <a
                href="https://app.rs.school/certificate/0ck7w2x5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{translate.btnCertificate}</p>
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="459px"
                  height="459px"
                  viewBox="0 0 459 459"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <rect x="286.875" y="239.062" width="114.75" height="19.125" />
                      <rect x="229.5" y="181.688" width="172.125" height="19.125" />
                      <path
                        d="M420.75,28.688H38.25C17.212,28.688,0,45.9,0,66.938v248.625c0,21.037,17.212,38.25,38.25,38.25H76.5v76.5l47.812-47.812
                          l47.812,47.812v-76.5H420.75c21.037,0,38.25-17.213,38.25-38.25V66.938C459,45.9,441.787,28.688,420.75,28.688z M153,384.412
                          l-28.688-28.688l-28.688,28.688v-74.587c9.562,3.825,19.125,5.737,28.688,5.737s19.125-1.912,28.688-5.737V384.412z
                          M124.312,296.438c-26.775,0-47.812-21.037-47.812-47.812s21.038-47.812,47.812-47.812s47.812,21.037,47.812,47.812
                          S151.087,296.438,124.312,296.438z M439.875,315.562c0,11.475-7.65,19.125-19.125,19.125H172.125v-40.162
                          c11.475-11.476,19.125-28.688,19.125-45.9c0-36.337-30.6-66.938-66.938-66.938s-66.938,30.6-66.938,66.938
                          c0,19.125,7.65,34.425,19.125,45.9v40.162H38.25c-11.475,0-19.125-9.562-19.125-19.125V66.938c0-11.475,7.65-19.125,19.125-19.125
                          h382.5c11.475,0,19.125,9.562,19.125,19.125V315.562z"
                      />
                      <rect x="57.375" y="124.312" width="344.25" height="19.125" />
                    </g>
                  </g>
                </svg>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
