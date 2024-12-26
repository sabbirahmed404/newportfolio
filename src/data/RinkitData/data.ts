import { FaLinkedinIn } from "react-icons/fa6"

import { FaXTwitter } from "react-icons/fa6"

import { FaGithub } from "react-icons/fa6"
import { SiLeetcode } from "react-icons/si"
import { MdOutlineMail } from "react-icons/md"

const rinkitImage = "/assets/Images/pfps/rinkit.jpg"
const rinkitName = "Rinkit Adhana"
const rinkitShortName = "Rinkit"
const rinkitBio = "Software Engineer"
const rinkitAbout = `
  <p>
    Hey, I'm Rinkit Adhana, an undergraduate Computer Science student and full-stack developer who loves building and shipping things that people actually use.
  </p>
  <p>
    I mainly work with React.js, Next.js, and Node.js for both frontend and backend, using TypeScript alongside them. I have created many cool projects using these technologies.
  </p>
  <p>
    If you have an idea and would like to collaborate, feel free to DM me! I'm always open and ready to connect and work on exciting projects. Also, be sure to check out my other side, just click the top right button!
  </p>
`

const rinkitLink = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/rinkitadhana",
    icon: FaGithub,
  },

  {
    id: 2,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=damnGruz",
    icon: FaXTwitter,
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rinkitadhana",
    icon: FaLinkedinIn,
  },
  {
    id: 4,
    name: "LeetCode",
    link: "https://leetcode.com/u/therinkit",
    icon: SiLeetcode,
  },
]

const rinkitContact =
  "Feel free to reach out to me via email for any queries, collaboration opportunities, or further details. I'm also super active on X, so feel free to DM me there!"
const rinkitContactLink = [
  {
    id: 1,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=damnGruz",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "Email",
    link: "mailto:therinkit@gmail.com",
    icon: MdOutlineMail,
  },
]

const rinkitFooterLink = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/rinkitadhana",
    icon: FaGithub,
  },

  {
    id: 2,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=damnGruz",
    icon: FaXTwitter,
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rinkitadhana",
    icon: FaLinkedinIn,
  },
  {
    id: 4,
    name: "LeetCode",
    link: "https://leetcode.com/u/therinkit",
    icon: SiLeetcode,
  },
]

export {
  rinkitImage,
  rinkitBio,
  rinkitContact,
  rinkitContactLink,
  rinkitName,
  rinkitShortName,
  rinkitAbout,
  rinkitLink,
  rinkitFooterLink,
}
