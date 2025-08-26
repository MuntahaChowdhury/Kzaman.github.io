"use client"

import Image from "next/image";
import { useEffect } from "react";
import { FacebookLogoIcon, LinkedinLogoIcon, XLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

export default function Header() {
  const v_pathname = usePathname();

  useEffect(() => {
    const header = document.querySelector("header");

    const handleScroll = () => {
      if (window.scrollY === 0 && v_pathname === "/") {
        header?.classList.add("top");
        header?.classList.remove("scrolled");
      } else {
        header?.classList.add("scrolled");
        header?.classList.remove("top");
      }
    };

    // run on page load
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="flex justify-between items-center z-40 w-full top">
      <section>
        <Image
          src={'/images/logo.png'}
          alt="logo"
          width={50}
          height={50}
          className="w-auto h-10 pl-5"
        />
      </section>
      <section className="flex items-center justify-end p-4 gap-4">
        <div onClick={() => window.location.href="/"}>Home</div>
        <div onClick={() => window.location.href="/about"}>About</div>
        <div onClick={() => window.location.href="/experience"}>Experience</div>
        <div onClick={() => window.location.href="/projects"}>Projects</div>
        <div onClick={() => window.location.href="/skills"}>Skills</div>
        <div onClick={() => window.location.href="/education-and-certifications"}>Education & Certifications</div>
        <button onClick={() => window.location.href="/contact"} className="bg-cta text-background font-[amarante] cursor-pointer hover:brightness-80 duration-300 px-2 rounded-xl">Contact</button>
        <button onClick={() => window.location.href="www.facebook.com"}><FacebookLogoIcon size={28} className="hover:text-foreground text-gray-400 cursor-pointer duration-300" /></button>
        <button onClick={() => window.location.href="www.x.com"}>       <XLogoIcon        size={28} className="hover:text-foreground text-gray-400 cursor-pointer duration-300" /></button>
        <button onClick={() => window.location.href="www.youtube.com"}> <YoutubeLogoIcon  size={28} className="hover:text-foreground text-gray-400 cursor-pointer duration-300" /></button>
        <button onClick={() => window.location.href="www.linked.com"}>  <LinkedinLogoIcon size={28} className="hover:text-foreground text-gray-400 cursor-pointer duration-300" /></button>

      </section>
    </header>
  );
}
