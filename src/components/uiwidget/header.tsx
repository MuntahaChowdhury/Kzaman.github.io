"use client"

import Image from "next/image";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const header = document.querySelector("header");

    const handleScroll = () => {
      if (window.scrollY === 0) {
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
          src={'/images/trlogo.png'}
          alt="logo"
          width={50}
          height={50}
          className="w-auto h-10 pl-5"
        />
      </section>
      <section className="flex items-center justify-end p-4  gap-4">
        <div>Home</div>
        <div>About</div>
        <div>Experience</div>
        <div>Projects</div>
        <div>Skills</div>
        <div>Education & Certifications</div>
        <button className="bg-background text-foreground font-head cursor-pointer hover:brightness-80 duration-300 px-2 rounded-xl">Contact</button>
      </section>
    </header>
  );
}
