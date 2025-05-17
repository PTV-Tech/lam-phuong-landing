"use client";
import { clsx } from "clsx";
import Link from "next/link";
import Image from "next/image";
import { RouterRoot } from "@/app/contants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

const MENU_ITEMS = [
  { label: "HOME", key: RouterRoot.Home },
  { label: "ABOUT", key: RouterRoot.About },
  { label: "OUR SERVICES", key: RouterRoot.Service },
  { label: "CASE STUDIES", key: RouterRoot.Studies },
  { label: "CAREERS", key: RouterRoot.Career, isNewPage: true },
  { label: "OUR PARTNERS", key: RouterRoot.Partner },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState(RouterRoot.Home);

  useLayoutEffect(() => {
    function toggleClasses() {
      ["scroll", "bg-white", "shadow-none"].forEach((myClass) => {
        if (headerRef.current) {
          headerRef.current.classList.toggle(myClass);
        }
      });
    }

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "70px top",
      onEnter: toggleClasses,
      onLeaveBack: toggleClasses,
      onLeave: toggleClasses,
      onEnterBack: toggleClasses,
    });

    return () => {
      trigger.kill();
    };
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      const sections = document.querySelectorAll("section.section");

      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveSection(section.id as any),
          onEnterBack: () => setActiveSection(section.id as any),
        });
      });
    } else {
      const matchingItem = MENU_ITEMS.find(
        (item) => item.isNewPage && pathname.includes(item.key),
      );

      if (matchingItem) {
        setActiveSection(matchingItem.key);
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);

  // Handle popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.substring(1);
        handleMenuClick(targetId);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleMenuClick = (key: string, isNewPage?: boolean) => {
    if (isNewPage) {
      router.push(`/${key}`);
      return;
    }

    if (pathname !== "/") {
      router.push(`/#${key}`);
      return;
    }

    window.history.pushState({}, "", `/#${key}`);

    const section = document.getElementById(key);
    if (section) {
      const headerHeight = headerRef.current
        ? headerRef.current.offsetHeight
        : 0;

      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: section,
          offsetY: headerHeight,
        },
        ease: "power3.inOut",
      });

      setActiveSection(key as any);
    }
  };

  const baseButtonClasses =
    "text-primary px-5 py-2 rounded-3xl cursor-pointer transition link-menu";

  return (
    <header
      ref={headerRef}
      className={clsx("fixed w-full z-10 transition-all duration-300")}
    >
      <div className={clsx("container mx-auto p-6 lg:px-8 lg:py-2")}>
        <div className={clsx("flex justify-between items-center")}>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Lam Phương"
              className={clsx("w-[160px] xl:w-[260px] link-menu")}
              width={260}
              height={68}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className={clsx("menu hidden md:hidden xl:block")}>
            <ul className={clsx("flex gap-8")}>
              {MENU_ITEMS.map(({ label, key, isNewPage }) => {
                return (
                  <li key={key} className={clsx("py-5")}>
                    {isNewPage ? (
                      <Link href={`/${key}`}>
                        <button
                          className={clsx(
                            baseButtonClasses,
                            activeSection === key
                              ? "bg-primary text-white"
                              : "hover:bg-primary hover:text-white",
                          )}
                        >
                          {label}
                        </button>
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          if (pathname === "/") {
                            handleMenuClick(key);
                          } else {
                            router.push(`/#${key}`);
                          }
                        }}
                        className={clsx(
                          baseButtonClasses,
                          activeSection === key
                            ? "bg-primary text-white"
                            : "hover:bg-primary hover:text-white",
                        )}
                      >
                        {label}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile Menu */}
          <MobileSidebar
            activeSection={activeSection}
            pathname={pathname}
            handleMenuClick={handleMenuClick}
          />
        </div>
      </div>
    </header>
  );
}

const MobileSidebar = ({
  activeSection,
  handleMenuClick,
}: {
  activeSection: string;
  pathname: string;
  handleMenuClick: (key: string, isNewPage?: boolean) => void;
}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const openSidebar = () => {
    setShowSidebar(true);
  };

  const closeSidebar = () => {
    if (sidebarRef.current && overlayRef.current) {
      gsap.to(sidebarRef.current, {
        x: "-100%",
        duration: 0.3,
        ease: "power2.in",
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => setShowSidebar(false),
      });
    } else {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    if (showSidebar && sidebarRef.current && overlayRef.current) {
      gsap.set(sidebarRef.current, { x: "-100%" });
      gsap.set(overlayRef.current, { opacity: 0 });

      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
      });
    }
  }, [showSidebar]);

  const handleMobileMenuClick = (key: string, isNewPage?: boolean) => {
    closeSidebar();

    setTimeout(() => {
      handleMenuClick(key, isNewPage);
    }, 300);
  };

  return (
    <Fragment>
      <button
        aria-label="Open menu"
        className="lg:hidden flex items-center justify-center"
        onClick={openSidebar}
      >
        <svg width="16" height="12">
          <use xlinkHref="/images/icons.svg#icon-navbar"></use>
        </svg>
      </button>

      {showSidebar && (
        <>
          <div
            ref={overlayRef}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeSidebar}
          />

          {/* Sidebar Content */}
          <div
            ref={sidebarRef}
            className="fixed top-0 left-0 w-full h-screen bg-white p-8 z-50 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <Link href="/" onClick={closeSidebar}>
                <Image
                  src="/images/logo.png"
                  alt="Lam Phương"
                  width={160}
                  height={42}
                  className="w-[160px]"
                />
              </Link>

              <button
                aria-label="Close menu"
                className="p-2"
                onClick={closeSidebar}
              >
                <svg width="14" height="14">
                  <use xlinkHref="/images/icons.svg#icon-close"></use>
                </svg>
              </button>
            </div>

            <ul className="flex flex-col gap-4">
              {MENU_ITEMS.map(({ label, key, isNewPage }) => (
                <li key={key} className="py-2">
                  <button
                    onClick={() => handleMobileMenuClick(key, isNewPage)}
                    className={clsx(
                      "text-primary px-5 py-3 rounded-3xl cursor-pointer transition w-full text-left",
                      activeSection === key
                        ? "bg-primary text-white"
                        : "hover:bg-primary hover:text-white",
                    )}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </Fragment>
  );
};
