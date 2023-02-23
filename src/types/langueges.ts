type TaboutText = {
  text1: string;
  text2: string;
};

type TTaskText = {
  list: string;
  listEl: string[] | null;
};

type TTaskText1 = {
  taskText: string[];
};

type Tportfolios = {
  title: string;
  work: string;
  writingtitle: string;
  writingLengueges: string;
  review: string;
  comand: string;
  taskTitle: string;
  taskText: string[];
  taskText2: TTaskText[] | null;
  branches: string[];
  linkToPR: string;
  linkToDeploy: string;
};

type TcontactsList = {
  image: string;
  link: string;
  name: string;
};

export interface ILanguadge {
  lenguege: string;
  title: string;
  profession: string;
  aboutTitle: string;
  aboutText: TaboutText;
  portfolioTitle: string;
  portfolios: Tportfolios[];
  taskCodeTitle: string;
  coursesTitle: string;
  courses: string[];
  btnCertificate: string;
  certificateLink: string;
  btnLernMore: string;
  btnLinkPR: string;
  btnLinkDeploy: string;
  hardSkillsTitle: string;
  hardSkillsList: string[];
  softSkillsTitle: string;
  softSkillsList: string[];
  lenguegesTitle: string;
  lenguegesList: string[];
  contactsTitle: string;
  contactsList: TcontactsList[];
}
