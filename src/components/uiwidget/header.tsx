"use client"

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
    <header className="flex items-center justify-end z-40 p-4 w-full gap-4 top">
      <div>Home</div>
      <div>About</div>
      <div>Experience</div>
      <div>Projects</div>
      <div>Skills</div>
      <div>Education & Certifications</div>
      <button className="bg-background text-foreground font-head cursor-pointer hover:brightness-80 duration-300 px-2 rounded-xl">Contact</button>
    </header>
  );
}
