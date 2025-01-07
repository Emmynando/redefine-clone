import {
  FaWhatsapp,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
export default function Footer() {
  const socialLinks = [
    {
      href: "https://facebook.com/profile.php?id=100089802986275",
      icon: <FaFacebook />,
    },
    {
      href: "https://x.com/mytex_baba?t=WxVVTO4XEZiolHWhvNwh3Q&s=09",
      icon: <FaTwitter />,
    },
    { href: "https://github.com/emmynando", icon: <FaGithub /> },
    {
      href: "https://linkedin.com/in/chukwuemeka-okezie-2b1335177/",
      icon: <FaLinkedin />,
    },
  ];
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Nova 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white">
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
