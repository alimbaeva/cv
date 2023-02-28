import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setShow } from '../../store/teaskReducer';

export const BackBtn: FC = () => {
  const { color } = useSelector((state: RootState) => state.ColorReducer);
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(setShow(false));
  };

  return (
    <button
      className={color ? 'about-topicDark__back-btn' : 'about-topic__back-btn'}
      onClick={handleBack}
    >
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 459 459"
        xmlSpace="preserve"
      >
        <g>
          <g id="reply">
            <path d="M178.5,140.25v-102L0,216.75l178.5,178.5V290.7c127.5,0,216.75,40.8,280.5,130.05C433.5,293.25,357,165.75,178.5,140.25z" />
          </g>
        </g>
      </svg>
    </button>
  );
};
