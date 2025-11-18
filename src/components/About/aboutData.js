import { translations } from "../../translations";

export const getAboutData = (language) => {
  const t = translations[language];
  return [
    {
      title: t.about.title,
      text: t.about.text0,
      id: 0,
    },
    {
      title: t.about.title1,
      text: t.about.text1,
      id: 1,
    },
    {
      title: t.about.title2,
      text: t.about.text2,
      id: 2,
    },
    {
      title: t.about.title3,
      text: t.about.text3,
      id: 3,
    },
    {
      title: t.about.title4,
      text: t.about.text4,
      id: 4,
    },
    {
      title: t.about.title5,
      text: t.about.text5,
      id: 5,
    },
    {
      title: t.about.title6,
      text: t.about.text6,
      id: 6,
    },
  ];
};
