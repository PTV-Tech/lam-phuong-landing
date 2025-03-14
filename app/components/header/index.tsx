"use client";
import { RouterRoot } from "@/app/contants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { clsx } from "clsx";

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

const index = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [baseUrl, setBaseUrl] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams.toString());
  const id = searchParams.get("id");

  const onScroll = useCallback((id: string | null) => {
    if (!id) return;
    if (id == RouterRoot.Home) return;
    const el = document.querySelector(`#${id}`);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const openSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const closeSideBar = () => {
    setShowSideBar(false);
  };

  const handleScroll = (menuItem: string) => {
    params.set("id", menuItem);
    router.push(`${baseUrl}?${params.toString()}`, { scroll: false });
    onScroll(menuItem);
  };

  useEffect(() => {
    const srollPages = () => {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", srollPages);
    return () => {
      window.removeEventListener("scroll", srollPages);
    };
  }, []);

  useEffect(() => {
    const paths = pathname.split("/");
    const activeMenuItem = id || paths[1];
    setActiveMenu(activeMenuItem);
    onScroll(id);
  }, [id, onScroll]);

  useEffect(() => {
    if (!!window) {
      setBaseUrl(window.location.origin);
    }
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
            className="w-[160px] xl:w-[260px]"
          />
          <div className="menu hidden md:hidden xl:block">
            <ul className="flex gap-8">
              {MENU_ITEMS.map((menu) => (
                <li key={menu.key}>
                  <a
                    onClick={() => handleScroll(menu.key)}
                    className={clsx(
                      "text-primary px-5 py-2 rounded-3xl cursor-pointer transition",
                      {
                        "bg-primary text-white": activeMenu === menu.key,
                        "hover:bg-primary hover:text-white":
                          activeMenu !== menu.key,
                      },
                    )}
                  >
                    {menu.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <svg
            width="16"
            height="12"
            className="lg:hidden"
            onClick={openSideBar}
          >
            <use xlinkHref="../images/icons.svg#icon-navbar"></use>
          </svg>
        </div>
        {showSideBar && (
          <div className="fixed top-0 left-0 w-full h-screen bg-white p-8">
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
              {MENU_ITEMS.map((menu) => (
                <li key={menu.key} className="py-5">
                  <a
                    onClick={() => handleScroll(menu.key)}
                    className={clsx(
                      "text-primary rounded-3xl cursor-pointer transition",
                      {
                        "bg-primary text-white px-5": activeMenu === menu.key,
                        "hover:bg-primary hover:text-white":
                          activeMenu !== menu.key,
                      },
                    )}
                  >
                    {menu.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default index;
