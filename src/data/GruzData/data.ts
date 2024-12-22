import { FaXTwitter, FaGithub, FaDiscord } from "react-icons/fa6"
import { SiBuymeacoffee } from "react-icons/si"

const gruzImage = "/assets/Images/pfps/gruz.jpeg"
const gruzName = "Gruz"
const gruzBio = "Software Engineer"
const gruzLink = [
  {
    name: "Github",
    link: "https://github.com",
    icon: FaGithub,
  },

  {
    name: "X",
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
    link: "https://github.com",
    icon: SiBuymeacoffee,
  },
]

export { gruzName, gruzBio, gruzImage, gruzLink }
