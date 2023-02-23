import { FC } from 'react';
import { useSelector } from 'react-redux';
import data from '../../data/data';
import { RootState } from '../../store';
import { ListSkills } from './ListSkills';
import { ObjLists } from './ObjLists';
import './skillsBlock.scss';

export const Skills: FC = () => {
  const { translate } = useSelector((store: RootState) => store.reducerLanguage);

  return (
    <div className="skills-block">
      <div className="image"></div>
      <h1>{translate.title}</h1>
      <div className="skills-block__text">
        <div className="skills-block__par">
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
      </div>
    </div>
  );
};
