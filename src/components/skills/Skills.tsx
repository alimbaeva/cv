import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ListSkills } from './ListSkills';
import { ObjLists } from './ObjLists';
import { setViewerPDF } from '../../store/teaskReducer';
import './skillsBlock.scss';

export const Skills: FC = () => {
  const { translate } = useSelector((store: RootState) => store.reducerLanguage);
  const { color } = useSelector((state: RootState) => state.ColorReducer);
  const dispatch = useDispatch();

  const handlePDF = () => {
    dispatch(setViewerPDF(true));
  };

  return (
    <div className={color ? 'skills-blockDark' : 'skills-block'}>
      <div className="image"></div>
      <h1>{translate.title}</h1>
      <div className={color ? 'skills-blockDark__text' : 'skills-block__text'}>
        <div className={color ? 'skills-blockDark__par' : 'skills-block__par'}>
          <h2>{translate.hardSkillsTitle}</h2>
          <ListSkills lists={translate.hardSkillsList} />
        </div>
        <div>
          <h2>{translate.softSkillsTitle}</h2>
          <ListSkills lists={translate.softSkillsList} />
        </div>
        <div>
          <h2>{translate.lenguegesTitle}</h2>
          <ListSkills lists={translate.lenguegesList} />
        </div>
        <div>
          <h2>{translate.contactsTitle}</h2>
          <ObjLists objList={translate.contactsList} />
        </div>
        <div className="view-pdf">
          <button onClick={handlePDF}>
            <p>{translate.pdfResume}</p>
          </button>
        </div>
      </div>
    </div>
  );
};
