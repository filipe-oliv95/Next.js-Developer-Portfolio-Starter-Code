import React from "react";
import Logo from "./Logo";
import CustomLink from "./CustomLink";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a 
            href="https://github.com/filipe-oliv95" 
            target={"_blank"} 
            whileHover={{y:-2}} 
            whileTap={{scale:0.9}}
            className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
            href="https://www.linkedin.com/in/filipe-oliv95/"
            target={"_blank"}
            whileHover={{y:-2}} 
            whileTap={{scale:0.9}}
            className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
