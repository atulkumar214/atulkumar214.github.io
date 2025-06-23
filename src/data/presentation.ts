type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "atul979270@gmail.com",
  title: "Hi, I'm Atul Kumar 👋",
  profile: "https://avatars.githubusercontent.com/u/202410264?v=4",
  description:
    "Motivated student with strong problem-solving skills and a solid foundation in Java, data structures, and algorithms. Experienced in frontend development through projects and coursework. Eager to learn and contribute to innovative tech solutions.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/atul-kumar-081510257",
    },
    {
      label: "GitHub",
      link: "https://github.com/atulkumar214",
    },
  ],
};

export default presentation;