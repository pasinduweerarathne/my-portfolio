import Image from "next/image";
import {
  facebook,
  facebookDark,
  github,
  githubDark,
  gmail,
  gmailDark,
  linkedin,
  linkedinDark,
  whatsapp,
  whatsappDark,
} from "../../public/social";
import { motion } from "framer-motion";

const social_links = [
  { name: "facebook", icon: { dark: facebookDark, light: facebook } },
  { name: "linkedin", icon: { dark: linkedinDark, light: linkedin } },
  { name: "github", icon: { dark: githubDark, light: github } },
  { name: "whatsapp", icon: { dark: whatsappDark, light: whatsapp } },
  { name: "gmail", icon: { dark: gmailDark, light: gmail } },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-col justify-center gap-5">
      {social_links.map((social_link, i) => (
        <div key={i} className="relative overflow-hidden">
          <div className="w-fit cursor-pointer group">
            <Image
              src={social_link.icon.dark}
              alt={`${social_link.name}`}
              width={60}
              height={60}
              className={`absolute duration-300 group-hover:translate-y-[60px] rounded-xl ${
                social_link.name === "gmail" && "bg-black"
              }`}
            />
            <Image
              src={social_link.icon.light}
              alt={`${social_link.name}`}
              width={60}
              height={60}
              className="cursor-pointer rounded-xl bg-white"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
