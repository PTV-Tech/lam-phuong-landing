"use client";
import { RouterRoot } from "@/app/contants";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { clsx } from "clsx";
import Link from "next/link";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP)

const MENU_ITEMS = [
  {
    label: "HOME",
    key: RouterRoot.Home,
  },
  {
    label: "ABOUT",
    key: RouterRoot.About,
  },
  {
    label: "OUR SERVICES",
    key: RouterRoot.Service,
  },

  {
    label: "CASE STUDIES",
    key: RouterRoot.Studies,
  },
  {
    label: "CAREERS",
    key: RouterRoot.Career,
  },
  {
    label: "OUR PARTNERS",
    key: RouterRoot.Partner,
  },
];

const SideBar = ({ activeMenu }: { activeMenu: string }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  const openSideBar = () => {
    setShowSideBar(true);
  };

  const closeSideBar = () => {
    setShowSideBar(false);
  };

  return (
    <Fragment>
      <svg width="16" height="12" className="lg:hidden" onClick={openSideBar}>
        <use xlinkHref="../images/icons.svg#icon-navbar"></use>
      </svg>
      {showSideBar && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white p-8 mobile-bar">
          <div className="flex justify-between items-center mb-5">
            <img
              src="../images/logo.png"
              alt=""
              className="w-[160px] xl:w-[260px]"
            />
            <svg
              width="14"
              height="14"
              className="lg:hidden"
              onClick={closeSideBar}
            >
              <use xlinkHref="../images/icons.svg#icon-close"></use>
            </svg>
          </div>
          <ul>
            {MENU_ITEMS.map((menu) => {
              const url = `#${menu.key}`;
              return (
                <li key={menu.key} className="py-5">
                  <Link
                    href={url}
                    scroll
                    className={clsx(
                      "text-primary rounded-3xl cursor-pointer transition px-5",
                      {
                        "bg-primary text-white":
                          activeMenu === url &&
                          activeMenu !== `#${RouterRoot.Home}`,
                        "hover:bg-primary hover:text-white": activeMenu !== url,
                      },
                    )}
                  >
                    {menu.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

const index = ({ base = "" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();

  useGSAP(() => {
    gsap.fromTo(
      ".link-menu",
      { 
        visibility: "visible",
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power2.out",
        delay: 0.5,
        stagger: (index) => 0.25 * index,
      }
    );
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section.section");
    const options = {
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        const id = entry.target.id;
        setActiveMenu(`#${id}`);
        if (id === RouterRoot.Home) {
          router.replace(pathname, { scroll: false });
          return;
        }
        router.push(`${pathname}#${id}`, { scroll: false });
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname, router]);
  useEffect(() => {
    if (!window) {
      return;
    }
    setActiveMenu(window.location.hash);
    if (window.scrollY > 70) {
      setScrolled(true);
      return;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScrolled(true);
        return;
      }
      setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx("fixed w-full z-10 transition-all duration-300", {
        "scroll bg-white shadow-lg": scrolled,
      })}
    >
      <div className="container mx-auto p-6 lg:px-8 lg:py-2">
        <div className="flex justify-between items-center">
          <img
            src="../images/logo.png"
            alt=""
            className="w-[160px] xl:w-[260px] link-menu"
          />
          <div className="menu hidden md:hidden xl:block">
            <ul className="flex gap-8">
              {MENU_ITEMS.map((menu) => {
                const url = `${base}#${menu.key}`;

                return (
                  <li key={menu.key}>
                    <Link
                      href={url}
                      scroll
                      className={clsx(
                        "text-primary px-5 py-2 rounded-3xl cursor-pointer transition link-menu",
                        {
                          "bg-primary text-white":
                            activeMenu === url &&
                            activeMenu !== `#${RouterRoot.Home}`,
                          "hover:bg-primary hover:text-white":
                            activeMenu !== url,
                        },
                      )}
                    >
                      {menu.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <SideBar activeMenu={activeMenu} />
        </div>
      </div>
    </header>
  );
};

export default index;
