import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";

const Nav = () => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }
  
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  return (
    <header className='fixed padding-x py-8 z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray dark:text-coral-red'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 dark:text-coral-red'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block' >
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
        <input type="checkbox" onClick={handleThemeSwitch} class=" relative
                          appearance-none
                          inline-block
                          h-[30px]
                          w-[54px]
                          cursor-pointer
                          rounded-full
                          bg-slate-400
                          shadow-md
                          transition-all
                          after:content-['']
                          after:absolute
                          after:top-[3px]
                          after:left-[3px]
                          after:h-6
                          after:w-6
                          after:rounded-full
                          after:bg-white
                          after:shadow-sm
                          after:transition-all
                          checked:bg-[#327E36]
                          checked:after:translate-x-6
                          left-20
                          max-lg:left-0" />

      </nav>
    </header>
  );
};

export default Nav;
