"use client";

import React from "react";
import Button from "../Button";
import { cn } from "@/lib";

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((v) => !v);
  };

  return (
    <>
      <header
        className={cn(
          "container pb-6 pt-12 lg:pb-0 w-full mx-auto md:max-w-[90vw] lg:max-w-[95vw] max-w-[77vw]",
          menuOpen && "z-[50]"
        )}
      >
        {menuOpen && (
        <div className="fixed bg-[#242A45] opacity-95 left-0 bottom-0 w-full h-full" />
        )}
        <div className="flex items-center justify-between w-full">
          <div className="flex justify-between w-full">
            <div className="flex justify-between items-center w-full">
              <div
                className={cn(
                  "w-[148px] h-[25px] text-[#5267DF] mr-auto",
                  menuOpen && "z-[100] text-white"
                )}
              >
                <svg width="148" height="25" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z"
                      fill="currentColor"
                      fillRule="nonzero"
                    />
                    <g>
                      <circle
                        fill="currentColor"
                        cx="12.5"
                        cy="12.5"
                        r="12.5"
                      />
                      <path
                        d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z"
                        fill="currentColor"
                        className={cn(
                          "text-white",
                          menuOpen && "text-[#242A45] opacity-95"
                        )}
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <button
                onClick={handleMenuToggle}
                className={cn(
                  "md:hidden w-[18px] h-[15px] text-[#242A45]",
                  menuOpen && "block z-[100] text-white"
                )}
              >
                {menuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                  >
                    <path
                      fill="#FFF"
                      fillRule="evenodd"
                      d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="15"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
                    />
                  </svg>
                )}
              </button>
            </div>
            {menuOpen ? (
              <nav
                className={cn(
                  "hidden md:block text-color-secondary",
                  menuOpen &&
                    "flex text-white fixed left-0 right-0 flex-col flex-col max-w-[77vw] w-full mx-auto container"
                )}
              >
                <ul
                  className={cn(
                    "flex text-[0.8125rem] leading-[1.31] tracking-[1.5px] gap-x-12 items-center uppercase",
                    menuOpen &&
                      "flex-col mt-10 text-[1.25rem] leading-[0.85] tracking-[2.31px] font-normal w-full"
                  )}
                >
                  {["features", "pricing", "contact"].map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "py-6 flex w-full justify-center",
                        menuOpen &&
                          "border-t-[1px] border-white border-opacity-[0.15]"
                      )}
                    >
                      <a
                        href="#"
                        className="transition-colors duration-100 ease-in-out cursor-pointer hover:text-color-accent"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                  <li
                    className={cn(
                      "py-6 flex w-full justify-center",
                      menuOpen &&
                        "border-t-[1px] border-white border-opacity-[0.15]"
                    )}
                  >
                    <Button
                      asLink
                      href="#"
                      variant="link"
                      className={cn(
                        "px-8 py-3 rounded-[5px] font-medium leading-[inherit] tracking-[inherit] shadow-[0_8px_8px_-4px_rgba(73,93,207,0.2)]",
                        menuOpen &&
                          "py-4 shadow-none text-[1.25rem] leading-[0.85] tracking-[2.31px] font-normal border-white border-2 w-full text-center"
                      )}
                    >
                      Login
                    </Button>
                  </li>
                </ul>
              </nav>
            ) : (
              <nav className="hidden md:block text-color-secondary">
                <ul className="flex text-[0.8125rem] leading-[1.31] tracking-[1.5px] gap-x-12 items-center uppercase">
                  {["features", "pricing", "contact"].map((item) => (
                    <li key={item} className="py-6 flex w-full justify-center">
                      <a
                        href="#"
                        className="transition-colors duration-100 ease-in-out cursor-pointer hover:text-color-accent"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                  <li className="py-6 flex w-full justify-center">
                    <Button
                      asLink
                      href="#"
                      variant="accent"
                      className="px-8 py-3 rounded-[5px] font-medium leading-[inherit] tracking-[inherit] shadow-[0_8px_8px_-4px_rgba(73,93,207,0.2)]"
                    >
                      Login
                    </Button>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
