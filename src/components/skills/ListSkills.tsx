import { FC } from 'react';
// import { data } from '../../data/data';

interface ILists {
  lists: string[];
}

export const ListSkills: FC<ILists> = ({ lists }: ILists) => {
  const renderList = () => {
    return lists.map((el) => {
      return <li key={el}>{el}</li>;
    });
  };

  return <ul>{renderList()}</ul>;
};
