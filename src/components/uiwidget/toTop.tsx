"use client"

import { CaretUpIcon } from "@phosphor-icons/react"
import { useState, useEffect } from "react"

export default function BackToTop() {
    const [v_isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) setIsVisible(true)
            else setIsVisible(false)
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <>
            {v_isVisible && (
                <button onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-foreground text-white p-2 rounded-full shadow-lg hover:opacity-100 opacity-80 transition-all cursor-pointer"
                >
                    <CaretUpIcon size={20} color="white"/>
                </button>
            )}
        </>
    )
}
