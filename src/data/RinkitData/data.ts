import { FaLinkedinIn } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"
import { SiLeetcode } from "react-icons/si"
import { MdOutlineMail } from "react-icons/md"
import { SiBluesky } from "react-icons/si"

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
const rinkitMoreAbout = `
<p>Hey, I’m Rinkit Adhana, an undergraduate computer science student and a full-stack developer based in Delhi, India. I’m passionate about building and shipping cool, practical projects that people actually use. My expertise lies in working with technologies like React, Next.js, and Node.js for both frontend and backend development. Over time, I’ve built numerous projects using these tools and am constantly working on new ones to expand my skills. As a computer science student, I also have a strong grasp of data structures and algorithms, and I make it a point to sharpen my problem-solving abilities daily.</p>
<p>Beyond academics, I’ve actively participated in multiple hackathons, where I’ve brought innovative ideas to life using diverse tech stacks. These experiences have not only earned me exciting merchandise, certificates, and prizes but have also honed my ability to work effectively as a team player and leader. I thrive under pressure and have successfully delivered projects within tight deadlines, adapting quickly to challenges to ensure success. These opportunities have strengthened my technical skills and reinforced my ability to collaborate and lead in dynamic environments.</p>
<p>When I’m not coding, you’ll find me on the volleyball court as a member of my college team. Playing volleyball has taught me the importance of teamwork, communication, and adaptability—skills that translate seamlessly into my professional life. Additionally, I’ve been an active member of various societies and have attended numerous orientations, which have deepened my understanding of computer science and allowed me to explore this field more thoroughly. Whether it’s coding, collaborating, or competing, I’m always eager to learn, grow, and make an impact.</p>`

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
    name: "Mail",
    link: "mailto:therinkit@gmail.com",
    icon: MdOutlineMail,
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/rinkitadhana",
    icon: FaGithub,
  },

  {
    id: 3,
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=damnGruz",
    icon: FaXTwitter,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rinkitadhana",
    icon: FaLinkedinIn,
  },
  {
    id: 5,
    name: "LeetCode",
    link: "https://leetcode.com/u/therinkit",
    icon: SiLeetcode,
  },
  {
    id: 6,
    name: "Instagram",
    link: "https://www.instagram.com/rnkktt",
    icon: FaInstagram,
  },
  {
    id: 7,
    name: "Bluesky",
    link: "https://bsky.app/profile/damngruz.bsky.social",
    icon: SiBluesky,
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
  rinkitMoreAbout,
}
