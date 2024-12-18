import { useMenuBar } from '../../context/useSideMenu'
import {Link} from 'react-router-dom'
import {Menu } from 'lucide-react';
import SideMenu from "./SideMenu";
import DarkModeToggle from '../ui/DarkmodeBtn'

const LogedNav = () => {
    const {showSideBar, handleSideBar} = useMenuBar()
    console.log("from somewhere", showSideBar)
  return (
    <nav className="shadow-sm border-b-default border-solid border-gray-200 dark:border-gray-600 z-10 w-full fixed bg-white dark:bg-slate-900">
      <div aria-label="top bar" className=" px-4 sm:px-8 flex-none flex justify-between bg-white dark:bg-slate-950 h-16">

        {/* <!-- top bar left --> */}
        <div className="flex items-center justify-center">
            <Link to={'/'} className="font-bold text-2xl mb-1 dark:text-slate-100">Ai Tutor</Link>
            <Menu onClick={handleSideBar}  className=" ml-2 w-6 h-6 text-gray-700 dark:text-slate-400 hover:text-black lg:hidden cursor-pointer" />
            <ul aria-label="top bar left" aria-orientation="horizontal" className="hidden sm:flex dark:text-slate-300 ">
                    {/* <!-- add button --> */}
                <li className="group relative">
                    <button aria-controls="add" aria-expanded="false" aria-haspopup="listbox" className="flex items-center h-full px-4 text-sm">
                        <i>
                            <svg className="fill-current w-3 h-3 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M24 10h-10v-10h-2v10h-10v2h10v10h2v-10h10z" />
                            </svg>
                        </i>
                        <span className="ml-2">Add</span>
                    </button>
                    <span className="absolute p-1 hidden group-hover:block">
                        <ul id="add" role="listbox" className="outline-none py-2 bg-white dark:bg-black border rounded-md w-screen max-w-md w-dropdown-large shadow-lg focus:outline-none leading-relaxed">
                            <li role="separator" className="mb-2">
                                <label className="block px-4 py-3 font-semibold">New</label>
                                <hr />
                            </li>
                            <li role="option" className="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
                            Ticket
                            </li>

                            <li role="option" className="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
                                <div className="flex">
                                    <div className="pr-2">
                                        <span className="font-mono rounded-sm bg-blue-600 text-white leading-none">P</span>
                                    </div>
                                    <h2>Something here</h2>
                                </div>
                            </li>

                            <li role="option" className="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
                                <div className="flex">
                                    <div className="pr-2">
                                        <span className="font-mono rounded-sm bg-blue-600 text-white leading-none">P</span>
                                    </div>
                                    <h2>Series here</h2>
                                </div>
                            </li>

                        </ul>
                    </span>
                </li>
            </ul>
        </div>

        {/* menu */}
        {showSideBar && (<div className='absolute sm:w-3/6 w-full bg-slate-300 top-16 left-0 h-full '><SideMenu /></div>)}

        {/* <!-- to bar right  --> */}
        <ul aria-label="top bar right" aria-orientation="horizontal" className=" flex items-center">
            <li className='hidden sm:block'>
                <DarkModeToggle />
            </li>

            {/* <li className="relative">
                <input title="Search Bar" aria-label="search bar" role="search" className="pr-8 pl-4 py-2 dark:bg-slate-900 rounded-md cursor-pointer transition-all duration-300 ease-in-out focus:border-black focus:cursor-text w-4 focus:w-40 ml-2 sm:ml-0 sm:focus:w-64 placeholder-transparent focus:placeholder-gray-500" type="text" placeholder="Search Chi Desk Support" />
                <i className="pointer-events-none absolute top-0 right-0 h-full flex items-center pr-3">
                    <svg className="fill-current w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
                    </svg>
                </i>
            </li> */}

            <li className="h-8 w-8 ml-1">
                <button title="Notifications" aria-label="notifications" className="w-full h-full text-slate-800 dark:text-slate-300">
                    <i>
                        <svg className="fill-current w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z" />
                        </svg>
                    </i>
                </button>
            </li>

            <li className="h-10 w-10 ml-3">
                <button title="Page Menu" aria-label="page menu" className="h-full w-full rounded-full border focus:outline-none focus:shadow-outline">
                    <img className="h-full w-full rounded-full mx-auto" src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/me.jpg" />
                </button>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default LogedNav;
