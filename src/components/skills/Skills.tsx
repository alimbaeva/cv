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
      <h1>Алымбаева Асель Кадырбековна</h1>
      <div className="skills-block__text">
        <div className="skills-block__par">
          <h2>{data.en.hardSkillsTitle}</h2>
          <ListSkills lists={data.en.hardSkillsList} />
        </div>
        <div>
          <h2>{data.en.softSkillsTitle}</h2>
          <ListSkills lists={data.en.softSkillsList} />
        </div>
        <div>
          <h2>{data.en.lenguegesTitle}</h2>
          <ListSkills lists={data.en.lenguegesList} />
        </div>
        <div>
          <h2>{data.en.lenguegesTitle}</h2>
          <ListSkills lists={data.en.lenguegesList} />
        </div>
        <div>
          <h2>{data.en.contactsTitle}</h2>
          <ObjLists objList={data.en.contactsList} />
        </div>
      </div>
    </div>
  );
};
