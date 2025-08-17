"use client"
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

export default function WorksSnippet() {
    const v_slides = [
        { title: "Portfolio Website", description: "A personal website showcasing projects and skills using Next.js and Tailwind CSS.", img: "/images/project1.jpg" },
        { title: "E-commerce App", description: "A fully functional online store with product listings, cart, and checkout features.", img: "/images/project2.jpg" },
        { title: "Blog Platform", description: "A CMS-powered blog allowing users to create, edit, and comment on posts.", img: "/images/project3.jpg" },
        { title: "Task Manager", description: "A productivity app to create, track, and manage daily tasks efficiently.", img: "/images/project4.jpg" },
    ];

    // refs for custom arrows
    const v_prevRef = useRef<HTMLDivElement>(null);
    const v_nextRef = useRef<HTMLDivElement>(null);

    return (
        <section className="relative altbody p-6 py-12">
            <div className="absolute inset-0 bg-[url('/images/works.jpg')] bg-cover bg-center filter brightness-20"></div>
            <div className="relative z-40 w-full px-4 md:px-20">

                <div className="hidden md:flex justify-between items-center w-full">
                    <div ref={v_prevRef} className="text-4xl font-extrabold text-white cursor-pointe w-fit"> &#8592; </div>
                    <div className="text-center space-y-3">
                        <h1 className="text-6xl font-head font-thin">My Works</h1>
                        <p className="w-74 text-md leading-6 italic text-gray-300 font-serif">
                            Small Description over here that would span 3 lines. Just a bit more description should be fine.
                        </p>
                    </div>
                    <div ref={v_nextRef} className="text-4xl font-extrabold text-white cursor-pointer w-fit"> &#8594; </div>
                </div>

                <div className="md:hidden flex flex-col items-center justify-center w-full text-center space-y-3 ">
                    <h1 className="text-6xl font-head font-thin">My Works</h1>
                    <p className="w-40 md:w-74 text-md leading-6 italic text-gray-300 font-serif">
                        Small Description over here that would span 3 lines. Just a bit more description should be fine.
                    </p>
                    <div className="flex justify-between gap-20">
                        <div ref={v_prevRef} className="text-4xl font-extrabold text-white cursor-pointer"> &#8592; </div>
                        <div ref={v_nextRef} className="text-4xl font-extrabold text-white cursor-pointer"> &#8594; </div>
                    </div>
                </div>

                <div className="h-[83vh] max-h-[650px] w-full mt-10 relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={40}
                        breakpoints={{
                            0: {       // mobile
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            640: {     // small screens (sm)
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {    // large screens (lg+)
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        navigation={{
                            prevEl: v_prevRef.current,
                            nextEl: v_nextRef.current,
                        }}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => {
                            // initialize navigation after refs are rendered
                            if (swiper.params.navigation) {
                                // @ts-expect-error --doesn't want to listen
                                swiper.params.navigation.prevEl = v_prevRef.current;
                                // @ts-expect-error --doesn't want to listen
                                swiper.params.navigation.nextEl = v_nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }
                        }}
                        className="h-full"
                    >
                        {v_slides.map((slide, i) => (
                            <SwiperSlide key={i} className={`relative !h-[75vh] max-h-[600px] bg-[url('/images/project${i + 1}.jpg')] bg-cover bg-center rounded-2xl`}>
                                <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background/30 rounded-2xl"></div>
                                <div className="relative h-full w-full p-8 text-white">
                                    <h1 className="text-4xl text-left font-bold text-headers tracking-tighter">{slide.title}</h1>
                                    <p className="mt-2 text-left text-md italic text-foreground">{slide.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section >
    );
}

