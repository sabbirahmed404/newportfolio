import { FaXTwitter, FaGithub, FaDiscord } from "react-icons/fa6"
import { SiBuymeacoffee } from "react-icons/si"

const gruzImage = "/assets/Images/pfps/gruz.jpeg"
const gruzName = "Gruz"
const gruzBio = "Software Engineer"
const gruzLink = [
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
    name: "Discord",
    link: "https://discord.gg/JgcDzHpWum",
    icon: FaDiscord,
  },
  {
    id: 4,
    name: "BuyMeACoffee",
    link: "",
    icon: SiBuymeacoffee,
  },
]
const gruzAbout =
  "I'm currently in my Third year , pursuing B.Tech in Computer Science and Engineering at IPU, Delhi. Although I am familiar with many technologies, as listed in the  section, I primarily work with React with TypeScript and Tailwind for the frontend, and NodeJS and MongoDB for the backend. I have created many cool projects with these technologies, which you can view in the  section . Besides development, I am also skilled in Data Structures and Algorithms (DSA) and practice daily with LeetCode questions, which you can see on my LeetCode profile ."

export { gruzName, gruzBio, gruzImage, gruzLink, gruzAbout }
