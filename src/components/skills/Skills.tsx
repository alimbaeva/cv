import { FC } from 'react';
import { data } from '../../data/data';
import { ListSkills } from './ListSkills';
import { ObjLists } from './ObjLists';
// import { meImage } from '../../assets/meImage.jpg';
import './skillsBlock.scss';

export const Skills: FC = () => {
  return (
    <div className="skills-block">
      <div className="image"></div>
      <div className="skills-block__text">
        <h2>{data.en.hardSkillsTitle}</h2>
        <ListSkills lists={data.en.hardSkillsList} />
        <h2>{data.en.softSkillsTitle}</h2>
        <ListSkills lists={data.en.softSkillsList} />
        <h2>{data.en.lenguegesTitle}</h2>
        <ListSkills lists={data.en.lenguegesList} />
        <h2>{data.en.contactsTitle}</h2>
        <ObjLists objList={data.en.contactsList} />
      </div>
    </div>
  );
};
