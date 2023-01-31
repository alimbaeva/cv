import React from 'react';
import { FC } from 'react';
// import telegram from '../../assets/telegram.svg';
// import GITHUB from '../../assets/GITHUB.svg';
// import discord from '../../assets/discord.svg';
// import mail_emal from '../../assets/mail_emal.svg';
// import mail_eal from '../../assets/sprite.svg';
import { Icone } from '../../Icone';

// const image = [telegram, mail_emal, GITHUB, discord];

type TObjList = {
  image: string;
  link: string;
  name: string;
};

interface IObjList {
  objList: TObjList[];
}
// const div = <div></div>;

export const ObjLists: FC<IObjList> = ({ objList }: IObjList) => {
  const renderList = () => {
    return objList.map((el, id) => {
      return (
        <li key={el.name}>
          <a href={el.link} target="_blank" rel="noreferrer">
            {/* <img src={image[id]} alt="" /> */}
            <div>
              <Icone name={el.image} color="#000000" size={35} />
            </div>
            {el.name}
          </a>
        </li>
      );
    });
  };
  return <ul className="contact">{renderList()}</ul>;
};
