"use client";
import {Fragment, Suspense, useEffect} from "react";
import Banner from "./components/banner";
import About from "./components//about";
import Services from "./components/services";
import Parallax from "./components/parallax";
import Studies from "./components/studies";
import Careers from "./components/careers";
import Partners from "./components/partners";
import {RouterRoot} from "@/app/contants";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import Head from 'next/head'

gsap.registerPlugin(ScrollToPlugin);

const Page = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    useEffect(() => {
        const handleHashScroll = () => {
            const hash = window.location.hash;
            if (hash) {
                const targetId = hash.substring(1); // Bỏ dấu # ở đầu
                const targetElement = document.getElementById(targetId);

                if (!targetElement) {
                    console.warn(`Element with id ${targetId} not found`);
                    return; // Thêm early return để tránh chạy code không cần thiết
                }

                setTimeout(() => {
                    const headerHeight =
                        document.querySelector("header")?.offsetHeight || 0;

                    gsap.to(window, {
                        duration: 1,
                        scrollTo: {
                            y: targetElement,
                            offsetY: headerHeight
                        },
                        ease: "power3.inOut"
                    });
                }, 100);
            }
        };

        handleHashScroll();

        window.addEventListener("hashchange", handleHashScroll);

        return () => {
            window.removeEventListener("hashchange", handleHashScroll);
        };
    }, []);

    return (
        <Fragment>
            <Head>
                <title>Trang chủ</title>
                <meta name="title" key="title" content="Trang chủ" />
            </Head>

            <main>
                <section id={RouterRoot.Home} className="section">
                    <Suspense>
                        <Banner/>
                    </Suspense>
                </section>

                <section id={RouterRoot.About} className="section">
                    <About/>
                </section>

                <section id={RouterRoot.Service} className="section">
                    <Services/>
                </section>

                <Parallax/>

                <section id={RouterRoot.Studies} className="section">
                    <Studies/>
                </section>

                <section id={RouterRoot.Career} className="section">
                    <Careers/>
                </section>

                <section id={RouterRoot.Partner} className="section">
                    <Partners/>
                </section>
            </main>
        </Fragment>
    );
};

export default Page;
