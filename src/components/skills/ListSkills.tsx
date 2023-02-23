import { FC } from 'react';
// import { data } from '../../data/data';

interface ILists {
  lists: string[];
}

export const ListSkills: FC<ILists> = ({ lists }: ILists) => {
  const renderList = () => {
    return lists.map((el, id) => {
      return <li key={el + id}>{el}</li>;
    });
  };

  return <ul>{renderList()}</ul>;
};
