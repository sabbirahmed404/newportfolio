import { BiLogoPostgresql } from "react-icons/bi"
import { FaGithub } from "react-icons/fa6"
import { DiJavascript } from "react-icons/di"
import { FaGitAlt } from "react-icons/fa6"
import { IoLogoNodejs } from "react-icons/io5"
import {
  RiJavaLine,
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri"
import {
  SiExpress,
  SiGreensock,
  SiMongodb,
  SiPostman,
  SiShadcnui,
  SiVercel,
} from "react-icons/si"
import {
  TbBrandCpp,
  TbBrandFramerMotion,
  TbBrandTypescript,
  TbHexagonLetterC,
} from "react-icons/tb"
import { VscTerminalLinux } from "react-icons/vsc"

const skills = [
  { id: 1, icon: RiReactjsLine, text: "ReactJs" },
  { id: 2, icon: RiNextjsLine, text: "NextJs" },
  { id: 3, icon: DiJavascript, text: "JavaScript" },
  { id: 4, icon: TbBrandTypescript, text: "TypeScript" },
  { id: 5, icon: RiTailwindCssFill, text: "Tailwind" },
  { id: 6, icon: SiShadcnui, text: "shadcn" },
  { id: 7, icon: TbBrandFramerMotion, text: "Motion" },
  { id: 8, icon: SiGreensock, text: "GSAP" },
  { id: 9, icon: IoLogoNodejs, text: "NodeJS" },
  { id: 10, icon: SiExpress, text: "ExpressJS" },
  { id: 11, icon: SiPostman, text: "Postman" },
  { id: 12, icon: BiLogoPostgresql, text: "PostgreSQL" },
  { id: 13, icon: SiMongodb, text: "MongoDB" },
  { id: 14, icon: FaGitAlt, text: "Git" },
  { id: 15, icon: FaGithub, text: "GitHub" },
  { id: 16, icon: RiJavaLine, text: "Java" },
  { id: 17, icon: TbHexagonLetterC, text: "C" },
  { id: 18, icon: TbBrandCpp, text: "C++" },
  { id: 19, icon: VscTerminalLinux, text: "Linux" },
  { id: 20, icon: SiVercel, text: "Vercel" },
]

const projects = [
  {
    id: 1,
    img: "./assets/Images/project/DailyCrime.png",
    title: "Daily Crimes",
    status: true,
    content:
      "This is a newspaper UI website designed to give you the authentic feel of reading a traditional newspaper. Explore news stories in a classic layout, blending modern web design with old-world charm.",
    url: "https://thedailycrimes.vercel.app/",
    github: "https://github.com/rinkitadhana/The-Daily-Crimes",
    skill: ["ReactJS", "TypeScript", "Tailwind", "GSAP"],
    preview: "./assets/Videos/preview/dailycrimes.mp4",
  },
  {
    id: 2,
    img: "./assets/Images/project/Anecdot.png",
    title: "Anecdot.",
    status: false,
    statusColor: "text-blue-500",
    content:
      "A full stack blogging website built using the MERN stack, offering a variety of features to enhance user experience. The website allows users to manage their profiles, and engage through comments and likes. It also includes user authentication and real-time updates.",
    url: "https://anecblog.vercel.app/",
    github: "https://github.com/rinkitadhana/Anecdot",
    skill: ["React", "Tailwind", "Node", "Express", "MongoDB"],
    preview: "./assets/Videos/preview/building.mp4",
  },
  {
    id: 3,
    img: "./assets/Images/project/apple.jpg",
    title: "Apple Clone",
    status: true,
    content:
      "This is a clone website of the iPhone 15 Pro, featuring 3D models and dynamic animations that bring the device to life. The smooth interactions and immersive visuals replicate the experience of a real product site. Explore every detail as if you're navigating the official Apple page.",
    url: "https://therinkit-appleclone.vercel.app/",
    github: "https://github.com/rinkitadhana/iphone15-Apple-Clone",
    skill: ["ReactJs", "Tailwind", "GSAP", "ThreeJS"],
    preview: "./assets/Videos/preview/building.mp4",
  },
  {
    id: 4,
    img: "./assets/Images/project/jwt.jpg",
    title: "JWT-auth",
    status: true,
    content:
      "A ready-to-use JWT authentication API built with Express, TypeScript, and MongoDB. It includes secure password hashing and robust authentication measures. Perfect for integrating secure user authentication into your projects effortlessly",
    github: "https://github.com/rinkitadhana/JWT-auth",
    skill: ["TypeScript", "Express", "MongoDB", "JWT"],
  },
  {
    id: 5,
    img: "./assets/Images/project/brain-rot.png",
    title: "Brain-Rot Converter",
    status: true,
    content:
      "Transform your text into trendy Gen Z language with just a click. Our converter adds slang, abbreviations, and casual phrases to make your message sound like it's straight out of a meme. Give it a try and speak like the cool crowd!",
    url: "https://brainrot-language-converter.vercel.app/",
    github: "https://github.com/rinkitadhana/BrainRot-Language-Converter",
    skill: ["React", "Tailwind", "Gemini api"],
    preview: "./assets/Videos/preview/building.mp4",
  },
  {
    id: 6,
    img: "./assets/Images/project/TweetSpree.png",
    title: "TweetSpree",
    status: true,
    content:
      "A project to boost your Twitter engagement by generating a variety of programming-related content, including fun questions, creative tweets, and useful advice. This tool helps you connect with your audience by providing fresh and engaging posts tailored to the programming community.",
    url: "https://therinkit-tweetspree.vercel.app/",
    github: "https://github.com/rinkitadhana/TweetSpree",
    skill: ["React", "Tailwind"],
    preview: "./assets/Videos/preview/tweetspree.mp4",
  },
  {
    id: 7,
    img: "./assets/Images/project/port.jpeg",
    title: "Old Portfolio",
    status: true,
    content:
      "This is my old portfolio. At first glance, it looks minimalistic, but it's packed with features. It includes sections like About, Projects, and Blog, along with seamless routing and a theme switcher.",
    url: "https://therinkit.online",
    github: "https://github.com/rinkitadhana/My-Portfolio-Website",
    skill: ["React", "Tailwind", "Motion"],
    preview: "./assets/Videos/preview/building.mp4",
  },
  {
    id: 8,
    img: "./assets/Images/project/promptopia.svg",
    title: "Promptopia",
    status: true,
    content:
      "A full-stack Next.js project for sharing your AI prompts and using others' shared prompts, featuring Google authentication, profile management, and options to like, edit, and delete prompts. It also includes advanced search and filtering capabilities to easily find and manage prompts.",
    url: "https://therinkit-promptopia.vercel.app",
    github: "https://github.com/rinkitadhana/Promptopia",
    skill: ["NextJS", "MongoDB", "Tailwind"],
    preview: "./assets/Videos/preview/promptopia.mp4",
  },
  {
    id: 9,
    img: "./assets/Images/project/LinkIt.png",
    title: "LinkIt",
    status: true,
    content:
      "A project that includes all your social media and project links, fully customizable with a simple and easy-to-use interface. It provides a streamlined way to showcase your online presence, allowing you to effortlessly update and manage your profiles.",
    url: "https://therinkit-linkit.vercel.app/",
    github: "https://github.com/rinkitadhana/LinkIt",
    skill: ["React", "Tailwind", "GSAP"],
    preview: "./assets/Videos/preview/linkit.mp4",
  },
  {
    id: 10,
    img: "./assets/Images/project/11Hack.png",
    title: "11Hack",
    status: false,
    statusColor: "text-blue-500",
    content:
      "A full-stack project showcasing the top 11 hackathon ideas from various students, ranked by popularity. This project helps you effectively implement these ideas and improve your chances of winning.",
    github: "/error",
    skill: ["React", "Tailwind", "Node", "Express", "MongoDB"],
    preview: "./assets/Videos/preview/building.mp4",
  },
  {
    id: 11,
    img: "./assets/Images/project/Snake.png",
    title: "Snake Game",
    status: true,
    content:
      "I made this snake game in my first year just for fun. At that time, I was a big Java fan and created this project using Java and JavaFX. This project really helped me deepen my understanding of object-oriented programming.",
    github: "https://github.com/rinkitadhana/SnakeByJava",
    skill: ["Java", "JavaFX"],
    preview: "./assets/Videos/preview/snake.mp4",
  },
  {
    id: 12,
    img: "./assets/Images/project/StopWatch.png",
    title: "Stop Watch",
    status: true,
    content:
      "I created this stopwatch to customize its functionality. It was built using only Java and JavaFX and is fully operational. This project helped me enhance my skills in Java programming and GUI design.",
    github: "https://github.com/rinkitadhana/StopWatchByJava",
    skill: ["Java", "JavaFX"],
  },
]

const writings = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Q3Hv7-rg8dfuKPn-r79jjVJEQaeg7g17mA&s",
    head: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, repellendus.",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores impedit dolore saepe vero expedita animi cumque rerum. Porro, nostrum assumenda.",
    link: "anecblog.vercel.app",
  },
]

const hireText =
  "I’m currently available for internships, full-time opportunities, and freelance projects. If you’re looking for someone passionate, skilled, and ready to contribute, I’m here to help bring your ideas to life!"

const emailLink =
  "mailto:therinkit@gmail.com?subject=Interested%20in%20Hiring%20You"
export { projects, writings, emailLink, skills, hireText }
