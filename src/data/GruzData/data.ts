import { FaXTwitter, FaGithub, FaDiscord } from "react-icons/fa6"
import { SiBuymeacoffee } from "react-icons/si"

const gruzImage = "/assets/Images/pfps/gruz.jpeg"
const gruzName = "Gruz"
const gruzBio = "Software Engineer"
const gruzLink = [
  {
    name: "Github",
    link: "https://github.com/rinkitadhana",
    icon: FaGithub,
  },

  {
    name: "Twitter",
    link: "https://x.com/intent/follow?screen_name=damnGruz",
    icon: FaXTwitter,
  },
  {
    name: "Discord",
    link: "https://discord.gg/JgcDzHpWum",
    icon: FaDiscord,
  },
  {
    name: "BuyMeACoffee",
    link: "",
    icon: SiBuymeacoffee,
  },
]

export { gruzName, gruzBio, gruzImage, gruzLink }
