// Initial State

export const initialState = {
  auth: <any>{},
  user: <any>{},
  resumes: {
    name: "Patrick the Rock",
    profecion: "Developer react senior",
    whoiam:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis neque id nibh placerat venenatis. Aliquam a eleifend metus. Morbi urna magna, porta et malesuada et, fermentum in purus. Ut varius a libero eget accumsan. Donec posuere, enim vitae feugiat finibus, justo quam aliquam lectus, sed luctus enim turpis at ligula.",
    experience: [
      {
        enterpriseName: "DEV BASE",
        date: "june- 2020",
        description:
          "My responsibilities include leading the Zuro team, which consists of 8 developers, including those responsible for backend, front end, and DevOps.",
        tecnologies:
          "React, Redux, TypeScript, StyleComponents, Figma, Sketch, Jira, SCRAM",
      },
      {
        enterpriseName: "enterprise 2",
        date: "February 2020",
        description:
          "My responsibility was to be a connection between Designers and Developers, One of my Skills was to make my opinions known about user experience, design and software. Research in severals ways of Design, develop front end behavior and interaction with back end, decide appropriate approach code and agree for easy and excellent interface with my teams.",
        tecnologies:
          "React, Redux, TypeScript, StyleComponents, Figma, Sketch, Jira, SCRAM",
      },
      {
        enterpriseName: "enterprise 3",
        date: "june- 2022",
        description:
          "Solution thinker and provider. With my engineering capabilities complex projects in the Financial industry will be brought to life. In internal projects client identifying data will be processed. To fulfill the requirents of these projects, applications and multiple languages are used like:",
        tecnologies:
          "React, Redux, TypeScript, StyleComponents, Figma, Sketch, Jira, SCRAM",
      },
    ],
    education: [
      {
        instituteName: "institute 1",
        courseName: "Engineering, System Engineering",
        date: "date",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis neque id nibh placerat venenatis. Aliquam a eleifend metus. Morbi urna magna, porta et malesuada et, ",
      },
      {
        instituteName: "institute 2",
        courseName: "Engineering, System security",
        date: "date",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis neque id nibh placerat venenatis. Aliquam a eleifend metus. Morbi urna magna, porta et malesuada et, ",
      },
      {
        instituteName: "institute 3",
        courseName: "Engineering, System software",
        date: "date",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis neque id nibh placerat venenatis. Aliquam a eleifend metus. Morbi urna magna, porta et malesuada et, ",
      },
    ],
    projects: [
      {
        title: "Rev Earth",
        description:
          "As part of its awareness-raising mission, Rev Earth facilitates connections between people",
        link: "#",
      },
      {
        title: "Rev Earth",
        description:
          "As part of its awareness-raising mission, Rev Earth facilitates connections between people",
        link: "#",
      },
      {
        title: "Rev Earth",
        description:
          "As part of its awareness-raising mission, Rev Earth facilitates connections between people",
        link: "#",
      },
    ],
    skills: [
      { title: "skill 1", years: 1 },
      { title: "skill 2", years: 1 },
      { title: "skill 3", years: 1 },
      { title: "skill 4", years: 1 },
    ],
    social: [
      { title: "linkedin", link: "" },
      { title: "Github", link: "" },
    ],
  },
}

export type InitialState = typeof initialState
