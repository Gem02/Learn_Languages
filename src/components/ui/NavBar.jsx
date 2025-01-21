import {useState} from 'react'
import {Menu } from 'lucide-react';
import { Link } from "react-router-dom";
import DarkModeToggle from '../ui/DarkmodeBtn'

   const Sample = () =>{

    const [isMegamenuOpen, setMegamenuOpen] = useState(false);
    const [isFeatureOpen, setFeatureOpen] = useState(false);
    const [menuOpened, setMenuOpen] = useState(false);

    const toggleDropdown = (value) =>{

        if (value === 'megamenu'){
            setFeatureOpen(false);
            setMegamenuOpen((prev) => !prev);
        } 

        if (value === 'features') {
            setMegamenuOpen(false)
            setFeatureOpen((prev) => !prev);
        } 
    }

    const closeDropdown = () =>{
        setFeatureOpen(false);
        setMegamenuOpen(false)
    }

    const handleMenu = () =>{
      setMenuOpen((val) => !val)
    }

        return (
            <nav className="bg-white dark:bg-slate-950 pt-1 lg:py-0 border-b-default border-solid border-gray-200 z-10 w-full fixed" id="topnav" >
              <div className="lg:px-8">
                <div className="w-full flex flex-col lg:flex-row ">

                  <div className="flex justify-between items-center px-4">
                    <Link to={"/"} className="flex items-center">
                        <span className="self-center text-2xl font-extrabold mb-2 whitespace-nowrap dark:text-white">AI Tutor</span>
                    </Link>
                    <Menu onClick={handleMenu} className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-black lg:hidden cursor-pointer" />
                  </div>

                  <ul className={`flex lg:items-center max-lg:gap-4 max-lg:mb-4 flex-col px-4  lg:flex-1 lg:flex-row lg:flex ${menuOpened ? "block" : "hidden"}`} >
                      
                      <li onClick={handleMenu}>
                        <Link to={"/"} className="text-gray-500 dark:text-slate-300 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900">
                          Home
                        </Link>
                      </li>

                      <li onClick={handleMenu}>
                        <Link to={"/learn"} className="text-gray-500 dark:text-slate-300 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900" >
                          Learn
                        </Link>
                      </li>

                      <li onClick={handleMenu}>
                        <Link to={"/practice"} className="text-gray-500 dark:text-slate-300 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900" >
                          Practice
                        </Link>
                      </li>
        

                      <li onClick={handleMenu} className="relative">
                        <div className="dropdown relative inline-flex">
                          <button onMouseEnter={() => toggleDropdown('features')} type="button" data-target="dropdown-feature" className="dropdown-toggle flex items-center justify-between text-gray-500 dark:text-slate-300 text-sm max-lg:h-max text-center lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-gray-900" >
                            Personalize
                            <svg
                              className="w-3 h-2 ml-1.5  dropdown-active-rotate-180"
                              width="10"
                              height="6"
                              viewBox="0 0 10 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1L3.58579 3.58579C4.25245 4.25245 4.58579 4.58579 5 4.58579C5.41421 4.58579 5.74755 4.25245 6.41421 3.58579L9 1"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </button>

                          {/* dropdown */}
                          <div onMouseLeave={() => closeDropdown()} id="dropdown-feature" className={`dropdown-menu rounded-xl shadow-lg lg:bg-white dark:bg-slate-950 relative lg:absolute max-lg:-left-14 max-lg:top-2 max-lg:bg-white dark:bg-slate-950 lg:top-full lg:w-72 mt-2 hidden" aria-labelledby="dropdown-feature ${isFeatureOpen ? "block" : "hidden"} `} >
                            <ul className="py-2">
                              <li>
                                <Link
                                  className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                                  href="#"
                                >
                                  Downloads
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                                  href="#"
                                >
                                  Saved Files
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                                  href="#"
                                >
                                  Notifications
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                  </ul>

                  <div className={` w-full lg:flex justify-between max-lg:bg-white dark:bg-slate-950 py-5 lg:py-2 max-lg:mt-1 max-lg:px-4 max-lg:shadow-lg max-lg:shadow-gray-200 max-lg:h-auto max-lg:overflow-auto transition-all duration-500 delay-200 ${menuOpened ? "block" : "hidden"}`} id="navbar">
                    
                    
                    <div className="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end" >
                      
                      <div className='mr-5'><DarkModeToggle /></div>
                      
                      <Link onClick={handleMenu} to={"/login"} className=" text-blue-500 dark:text-slate-200 rounded-full ring-1 dark:ring-slate-300 hover:shadow-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm" >
                        Login
                      </Link>

                      <Link onClick={handleMenu} to={"/signup"} className="bg-blue-500 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5 hover:bg-blue-700" >
                        Sign up
                      </Link>
                    </div>
                  </div>

                  
                </div>
              </div>
          </nav>
                                                  
        );
    };

export default Sample;
    
                                      