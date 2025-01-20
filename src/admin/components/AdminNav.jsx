import {useState} from 'react';
import {Link} from 'react-router-dom';
import { LanguageIcon } from '../../assets/images/exports';
import {Menu } from 'lucide-react';
import DarkModeToggle from '../../components/ui/DarkmodeBtn';
import { useUserContext } from "../../context/useUser";
import AdminSideNav from './AdminSideNavs';

const AdminNav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { user } = useUserContext();
    const handleSideBar = () =>{
        setShowMenu(val => !val);
    }
    

  return (
    <header className="flex w-full top-0 fixed bg-white items-center h-15 sm:h-20 px-2 sm:px-10 shadow dark:bg-slate-950">
        <div className='flex items-center'>
            <Link to={'/'} className="font-bold text-xl dark:text-slate-100 mb-1 flex gap-1">
                <img src={LanguageIcon} alt="icon" className='h-7' />
                <p>My<span className='text-blue-500'> Tutor</span></p>
            </Link>
            <Menu onClick={handleSideBar}  className=" ml-2 w-6 h-6 z-10 text-gray-700 dark:text-slate-400 hover:text-black lg:hidden cursor-pointer" />
        </div>

        <div className="flex flex-shrink-0 items-center ml-auto">
            <button className="inline-flex items-center p-2 bg-white dark:bg-slate-950 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                <span className="sr-only">User Menu</span>
                <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                    <span className="font-semibold dark:text-slate-300">Godwin Mangai</span>
                    <span className="text-sm text-gray-400 dark:text-slate-300">Admin</span>
                </div>
                <span className="h-8 w-8 sm:h-12 sm:w-12 sm:ml-2 bg-gray-100 rounded-full overflow-hidden">
                    <img src={user?.photoUrl || "https://api.dicebear.com/6.x/adventurer/svg"} alt="user profile" className="h-full w-full object-cover" />
                </span>
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="hidden sm:block h-6 w-6 text-gray-300">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg> 
            </button>
            <div className='hidden sm:block'><DarkModeToggle /></div>
            <div className="border-l pl-3 ml-3 space-x-1">
                <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                    <span className="sr-only">Notifications</span>
                    <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                    <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </button>
            </div>
        </div>

        {showMenu && (<div className='absolute sm:w-3/6 w-full bg-slate-300 top-16 left-0 h-full '><AdminSideNav /></div>)}
    </header>
  )
}

export default AdminNav