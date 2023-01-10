type TaboutText = {
  text1: string;
  text2: string;
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
  branches: string[];
  linkToPR: string;
  linkToDeploy: string;
};

type TcontactsList = {
  image: string;
  link: string;
  name: string;
};

export interface ILang {
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
  contactsTitle: string[];
  contactsList: TcontactsList[];
}
