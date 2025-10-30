import { FaLinkedinIn, FaXTwitter, FaGithub } from "react-icons/fa6"
import { MdOutlineMail } from "react-icons/md"

const sabbirImage = "/assets/Images/pfps/sabbir.png"
const sabbirName = "Sabbir Ahmed"
const sabbirShortName = "Sabbir"
const sabbirBio = "Software Engineer"
const sabbirAbout = `
  <p>
    Hey! I'm Sabbir Ahmed, a software Engineer with years of backend and full-stack experience. I love building scalable applications that solve real-world problems.
  </p>
  <p>
    I primarily work with node.js, next.js, Python, and SQL for backend development, and have extensive experience with low code automation. On the frontend, I work with React and next.js. 
  </p>
  <p>
    I'm currently working remotely at CodeMyPixel and also in Uvoy, where I work as a full stack developer and build projects. I'm passionate about continuous learning and building products that people actually use.
  </p>
`

const sabbirLink = [
  {
    id: 1,
    name: "X",
    link: "https://x.com/minhajeez",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/sabbirahmed404",
    icon: FaGithub,
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://linkedin.com/in/msabbir-ahmed",
    icon: FaLinkedinIn,
  },
]

const sabbirContact =
  "Feel free to reach out to me via email for any inquiries, collaboration opportunities, or just to say hi!"
const sabbirContactLink = [
  {
    id: 1,
    name: "X",
    link: "https://x.com/minhajeez",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "Email",
    link: "mailto:msa29.cse@gmail.com",
    icon: MdOutlineMail,
  },
  {
    id: 3,
    name: "Github",
    link: "https://github.com/sabbirahmed404",
    icon: FaGithub,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://linkedin.com/in/msabbir-ahmed",
    icon: FaLinkedinIn,
  },
]

const sabbirFooterLink = [
  {
    id: 1,
    name: "X",
    link: "https://x.com/minhajeez",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "Mail",
    link: "mailto:msa29.cse@gmail.com",
    icon: MdOutlineMail,
  },
  {
    id: 3,
    name: "Github",
    link: "https://github.com/sabbirahmed404",
    icon: FaGithub,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://linkedin.com/in/msabbir-ahmed",
    icon: FaLinkedinIn,
  },
]

export {
  sabbirImage,
  sabbirBio,
  sabbirContact,
  sabbirContactLink,
  sabbirName,
  sabbirShortName,
  sabbirAbout,
  sabbirLink,
  sabbirFooterLink,
}
