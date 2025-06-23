export type Project = {
  title: string;
  techs: string[];
  live: string;
  github: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Currency Converter App",
    techs: ["HTML", "CSS", "JS", "API"],
    live: "https://atulkumar214.github.io/Currency-Convertor-App/",
    github: "https://github.com/atulkumar214/Currency-Convertor-App",
    description: "This project is a responsive Currency Converter Web Application built using HTML, CSS, and JavaScript. It allows users to convert an entered amount from one currency to another using real-time exchange rates fetched from an external API.",
  },
  {
    title: "Tic Tac Toe",
    techs: ["HTML","CSS","JS"],
    live: "https://atulkumar214.github.io/TictacGame/",
    github: "https://github.com/atulkumar214/TictacGame",
    description: 'This is a simple, responsive web-based Tic-Tac-Toe game built using HTML, CSS, and JavaScript. It features a clean user interface and allows two players to take turns playing as "X" and "O" on a 3x3 grid.',
  }
];

export default projects;