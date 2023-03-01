import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { setColor } from '../../store/colorReducer';
import { setTranslate } from '../../store/languageReducer';
import './header.scss';

export const Header: FC = () => {
  const { language } = useSelector((state: RootState) => state.reducerLanguage);
  const { color } = useSelector((state: RootState) => state.ColorReducer);
  const dispatch = useDispatch();
  const [lahguage, setLanguage] = useState(language);
  const [showLanChoose, setShowLanChoose] = useState(false);

  const handleLenguadeChange = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const elementLang = e.currentTarget;
    const lang = elementLang.getAttribute('data-leng') === 'en' ? 'EN' : 'RU';
    setLanguage(lang);
    elementLang.parentElement?.classList.add('opacitty');
    localStorage.setItem('language', lang);
    dispatch(setTranslate(lang));
    if (showLanChoose) setShowLanChoose(false);
  };

  const handleLenguadeBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const ulLang = e.currentTarget.nextElementSibling;
    if (window.screen.availWidth <= 768) {
      if (ulLang?.classList.contains('opacitty')) {
        ulLang?.classList.remove('opacitty');
        setShowLanChoose(true);
      } else {
        ulLang?.classList.add('opacitty');
        setShowLanChoose(false);
      }
    } else {
      if (ulLang?.classList.contains('opacitty')) {
        ulLang?.classList.remove('opacitty');
      } else {
        ulLang?.classList.add('opacitty');
      }
    }
  };

  const handleColor = () => {
    localStorage.setItem('appColor', `${!color}`);
    dispatch(setColor(!color));
  };

  return (
    <header>
      <div className={color ? 'container headerD' : 'container header'}>
        <button onClick={handleColor}>
          <div className={color ? '' : 'opacitty'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <defs></defs>
              <title>moon</title>
              <g>
                <path d="M12.3,22h-.1a10.31,10.31,0,0,1-7.34-3.15,10.46,10.46,0,0,1-.26-14,10.13,10.13,0,0,1,4-2.74,1,1,0,0,1,1.06.22,1,1,0,0,1,.24,1,8.4,8.4,0,0,0,1.94,8.81,8.47,8.47,0,0,0,8.83,1.94,1,1,0,0,1,1.27,1.29A10.16,10.16,0,0,1,19.6,19,10.28,10.28,0,0,1,12.3,22Z" />
              </g>
            </svg>
          </div>
          <svg
            className={color ? 'opacitty' : ''}
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.82666 19.4933C5.82666 19.1733 5.93333 18.8933 6.15999 18.6667C6.38666 18.4533 6.66666 18.3467 6.95999 18.3467H9.67999C9.98666 18.3467 10.24 18.4533 10.4533 18.68C10.6533 18.9067 10.76 19.1733 10.76 19.4933C10.76 19.8133 10.6667 20.08 10.4667 20.3067C10.2667 20.5333 9.99999 20.64 9.69333 20.64H6.97333C6.66666 20.64 6.39999 20.5333 6.17333 20.3067C5.94666 20.08 5.82666 19.8133 5.82666 19.4933ZM9.63999 28.7333C9.63999 28.4267 9.74666 28.16 9.94666 27.92L11.9067 26.0133C12.1067 25.8 12.3733 25.7067 12.6933 25.7067C13.0133 25.7067 13.28 25.8133 13.4933 26.0133C13.7067 26.2133 13.8133 26.4667 13.8133 26.7733C13.8133 27.0933 13.7067 27.3867 13.4933 27.6267L11.6 29.52C11.0533 29.9467 10.5067 29.9467 9.95999 29.52C9.74666 29.3067 9.63999 29.04 9.63999 28.7333ZM9.63999 10.28C9.63999 9.97334 9.74666 9.70668 9.94666 9.46668C10.2133 9.24001 10.4933 9.13334 10.8 9.13334C11.0933 9.13334 11.36 9.24001 11.5867 9.45334L13.4933 11.4133C13.7067 11.6133 13.8133 11.88 13.8133 12.2C13.8133 12.52 13.7067 12.7867 13.4933 13C13.28 13.2133 13.0133 13.32 12.6933 13.32C12.3733 13.32 12.1067 13.2133 11.9067 13L9.95999 11.0933C9.74666 10.88 9.63999 10.6 9.63999 10.28ZM13.04 19.4933C13.04 18.2533 13.3467 17.0933 13.9733 16.0267C14.6 14.96 15.44 14.1067 16.52 13.48C17.6 12.8533 18.7467 12.5467 19.9867 12.5467C20.92 12.5467 21.8133 12.7333 22.68 13.1067C23.5333 13.48 24.28 13.9733 24.8933 14.6C25.52 15.2267 26.0133 15.96 26.3733 16.8133C26.7333 17.6667 26.92 18.5733 26.92 19.5067C26.92 20.76 26.6133 21.92 25.9867 22.9867C25.36 24.0533 24.52 24.8933 23.4533 25.52C22.3867 26.1467 21.2267 26.4533 19.9733 26.4533C18.72 26.4533 17.56 26.1467 16.4933 25.52C15.4267 24.8933 14.5867 24.0533 13.96 22.9867C13.36 21.9067 13.04 20.7467 13.04 19.4933ZM15.3067 19.4933C15.3067 20.8 15.76 21.9067 16.68 22.8267C17.5867 23.7467 18.6933 24.2133 20 24.2133C21.3067 24.2133 22.4133 23.7467 23.3333 22.8267C24.2533 21.9067 24.72 20.8 24.72 19.4933C24.72 18.2133 24.2533 17.12 23.3333 16.2C22.4133 15.2933 21.3067 14.84 20 14.84C18.7067 14.84 17.6 15.2933 16.6933 16.2C15.76 17.12 15.3067 18.2133 15.3067 19.4933ZM18.8533 29.8667C18.8533 29.5467 18.96 29.28 19.1867 29.0667C19.4133 28.8533 19.68 28.7467 19.9867 28.7467C20.3067 28.7467 20.5867 28.8533 20.8 29.0667C21.0133 29.28 21.12 29.5467 21.12 29.8667V32.52C21.12 32.84 21.0133 33.12 20.7867 33.3467C20.56 33.5733 20.2933 33.68 19.9867 33.68C19.68 33.68 19.4 33.5733 19.1867 33.3467C18.96 33.12 18.8533 32.84 18.8533 32.52V29.8667ZM18.8533 9.20001V6.48001C18.8533 6.17334 18.96 5.90668 19.1867 5.68001C19.4133 5.45334 19.68 5.33334 20 5.33334C20.32 5.33334 20.5733 5.44001 20.8 5.66668C21.0267 5.89334 21.1333 6.16001 21.1333 6.46668V9.20001C21.1333 9.50668 21.0267 9.76001 20.8 9.97334C20.5733 10.1867 20.3067 10.28 20 10.28C19.6933 10.28 19.4133 10.1733 19.2 9.97334C18.9867 9.77334 18.8533 9.50668 18.8533 9.20001ZM26.2133 26.7733C26.2133 26.4667 26.32 26.2133 26.52 26.0267C26.72 25.8133 26.9733 25.72 27.2667 25.72C27.5867 25.72 27.8533 25.8267 28.0667 26.0267L30.0133 27.9333C30.2267 28.16 30.3333 28.44 30.3333 28.7467C30.3333 29.0533 30.2267 29.32 30.0133 29.5333C29.48 29.9467 28.9467 29.9467 28.4133 29.5333L26.52 27.64C26.32 27.4 26.2133 27.12 26.2133 26.7733ZM26.2133 12.2133C26.2133 11.88 26.32 11.6133 26.52 11.4267L28.4133 9.46668C28.64 9.25334 28.9067 9.14668 29.2 9.14668C29.52 9.14668 29.7867 9.25334 30 9.48001C30.2267 9.70668 30.3333 9.97334 30.3333 10.28C30.3333 10.6133 30.2267 10.8933 30.0133 11.1067L28.0667 13.0133C27.8267 13.2267 27.56 13.3333 27.2667 13.3333C26.96 13.3333 26.72 13.2267 26.52 13.0133C26.32 12.8 26.2133 12.5333 26.2133 12.2133ZM29.2267 19.4933C29.2267 19.1733 29.3333 18.9067 29.5467 18.6667C29.76 18.4533 30.0133 18.3467 30.3067 18.3467H33C33.3067 18.3467 33.5733 18.4667 33.8 18.6933C34.0267 18.92 34.1467 19.1867 34.1467 19.4933C34.1467 19.8 34.0267 20.0667 33.8 20.2933C33.5733 20.52 33.3067 20.6267 33 20.6267H30.3067C30 20.6267 29.7333 20.52 29.5333 20.2933C29.3333 20.0667 29.2267 19.8133 29.2267 19.4933Z"
              fill=""
            />
          </svg>
        </button>
        <button onClick={handleLenguadeBtn}>
          <p>{lahguage}</p>
        </button>
        <ul className={showLanChoose ? 'choose-language' : 'opacitty'}>
          <li onClick={handleLenguadeChange} key="1" data-leng="ru">
            <p>RU</p>
          </li>
          <li onClick={handleLenguadeChange} key="2" data-leng="en">
            <p>EN</p>
          </li>
        </ul>
      </div>
    </header>
  );
};
