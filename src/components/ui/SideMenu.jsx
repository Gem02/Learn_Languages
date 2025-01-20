import { useMenuBar } from "../../context/useSideMenu";
import { NavLink } from "react-router-dom";
import {
    BarChart2,
    BookOpen,
    HelpCircle,
    Settings,
    LogOut,
    User,
} from "lucide-react";
import signoutFunc from "../../utils/logout";
import {useUserContext} from '../../context/useUser';

const SideMenu = () => {
    const { setShowSideBar } = useMenuBar();
    const {user} = useUserContext()

    return (
        <aside className="w-full bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-300 h-screen">
            <div className="p-6 text-center border-b border-gray-200">
                <h1 className="text-2xl font-bold dark:text-slate-300">{user?.name}</h1>
                <p>{user?.email}</p>
            </div>
            <nav className="mt-6 space-y-1">
                <NavLink
                    onClick={() => setShowSideBar(false)}
                    to="/dashboard"
                    className={({ isActive }) =>
                        `flex items-center px-6 py-3 transition-colors ${
                            isActive ? "bg-gray-200 dark:bg-slate-900 text-slate-900 dark:text-slate-300" : "hover:bg-gray-200 dark:hover:bg-slate-900"
                        }`
                    }
                >
                    <BarChart2 className="mr-3" />
                    Dashboard Overview
                </NavLink>

                <NavLink
                    onClick={() => setShowSideBar(false)}
                    to="/lesson"
                    className={({ isActive }) =>
                        `flex items-center px-6 py-3 transition-colors ${
                            isActive ? "bg-gray-200 dark:bg-slate-900 text-slate-900 dark:text-slate-300" : "hover:bg-gray-200 dark:hover:bg-slate-900"
                        }`
                    }
                >
                    <BookOpen className="mr-3" />
                    Lessons
                </NavLink>

                <NavLink
                    onClick={() => setShowSideBar(false)}
                    to="/exercisePage"
                    className={({ isActive }) =>
                        `flex items-center px-6 py-3 transition-colors ${
                            isActive ? "bg-gray-200 dark:bg-slate-900 text-slate-900 dark:text-slate-300" : "hover:bg-gray-200 dark:hover:bg-slate-900"
                        }`
                    }
                >
                    <HelpCircle className="mr-3" />
                    Questions
                </NavLink>

                <NavLink
                    onClick={() => setShowSideBar(false)}
                    to="/profile"
                    className={({ isActive }) =>
                        `flex items-center px-6 py-3 transition-colors ${
                            isActive ? "bg-gray-200 dark:bg-slate-900 text-slate-900 dark:text-slate-300" : "hover:bg-gray-200 dark:hover:bg-slate-900"
                        }`
                    }
                >
                    <User className="mr-3" />
                    My Profile
                </NavLink>

                <NavLink
                    onClick={() => setShowSideBar(false)}
                    to="/help"
                    className={({ isActive }) =>
                        `flex items-center px-6 py-3 transition-colors ${
                            isActive ? "bg-gray-200 dark:bg-slate-900 text-slate-900 dark:text-slate-300" : "hover:bg-gray-200 dark:hover:bg-slate-900"
                        }`
                    }
                >
                    <HelpCircle className="mr-3" />
                    Help
                </NavLink>

                <NavLink
                    onClick={() => setShowSideBar(false)}
                    to="/settings"
                    className={({ isActive }) =>
                        `flex items-center px-6 py-3 transition-colors ${
                            isActive ? "bg-gray-200 dark:bg-slate-900 text-slate-900 dark:text-slate-300" : "hover:bg-gray-200 dark:hover:bg-slate-900"
                        }`
                    }
                >
                    <Settings className="mr-3" />
                    Settings
                </NavLink>

                <NavLink
                    onClick={signoutFunc}
                    to="/"
                    className={({ isActive }) =>
                        `flex items-center px-6 py-3 transition-colors ${
                            isActive ? "bg-gray-200 dark:bg-slate-900 text-slate-900 dark:text-slate-300" : "hover:bg-gray-200 dark:hover:bg-slate-900"
                        }`
                    }
                >
                    <LogOut className="mr-3" />
                    Logout
                </NavLink>
            </nav>
        </aside>
    );
};

export default SideMenu;
