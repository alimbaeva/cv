import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { BackBtn } from './BackBtn';
import './moreAboutTopic.scss';

interface IProps {
  numberPortfolio: number;
}

export const MoreAboutTopic: FC<IProps> = ({ numberPortfolio }: IProps) => {
  const { translate } = useSelector((store: RootState) => store.reducerLanguage);

  return (
    <section className="topic">
      <div className="">
        <BackBtn />
        <div className="about-topic">
          <h2>{translate.portfolios[numberPortfolio].title}</h2>
          <p>{translate.portfolios[numberPortfolio].review}</p>
          <h4>{translate.portfolios[numberPortfolio].comand}</h4>
          <h4>{translate.portfolios[numberPortfolio].taskTitle}</h4>
          <div className="about-topic__texts">
            {translate.portfolios[numberPortfolio].taskText.map((el, id) => {
              return <p key={id}>{el}</p>;
            })}
          </div>
          <div>
            {translate.portfolios[numberPortfolio].taskText2 &&
              translate.portfolios[numberPortfolio].taskText2?.map((el, id: number) => {
                return (
                  <ul key={`${id}`}>
                    <li key={`${id}__${numberPortfolio}`}>
                      {el.list}
                      <ul>
                        {el.listEl?.map((list, id2: number) => {
                          return <li key={`${id2}_${id}`}>{list}</li>;
                        })}
                      </ul>
                    </li>
                  </ul>
                );
              })}
          </div>
          <h4>Ветки в которой я работала:</h4>
          <ul>
            {translate.portfolios[numberPortfolio].branches.map((el, id) => {
              return <li key={id}>{el}</li>;
            })}
          </ul>
        </div>
        <div className="about-topic__btns">
          {translate.portfolios[numberPortfolio].linkToPR ? (
            <button>
              <a
                href={translate.portfolios[numberPortfolio].linkToPR}
                target="_blank"
                rel="noreferrer"
              >
                Ссылка на PR
              </a>
            </button>
          ) : (
            ''
          )}
          {translate.portfolios[numberPortfolio].linkToDeploy ? (
            <button>
              <a
                href={translate.portfolios[numberPortfolio].linkToDeploy}
                target="_blank"
                rel="noreferrer"
              >
                Ссылка на Deploy
              </a>
            </button>
          ) : (
            ''
          )}
        </div>
        <BackBtn />
      </div>
    </section>
  );
};
