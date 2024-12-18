import { useState } from "react";
import { useMenuBar } from '../../context/useSideMenu'
import { NavLink } from "react-router-dom";
import {
    FaChartBar,
    FaBook,
    FaCog,
    FaSignOutAlt,
    FaUser,
    FaQuestionCircle,
    FaCaretDown,
    FaCaretRight,
    FaBrain,
    FaVolumeUp,
    FaBookOpen,
    FaLanguage,
} from "react-icons/fa";

const SideMenu = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const {setShowSideBar} = useMenuBar();

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        
        <aside className="w-full bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-300 h-screen">
            <div className="p-6 text-center border-b border-gray-200">
                <h1 className="text-2xl font-bold dark:text-slate-300">Godwin Mangai</h1>
                <p>godwin@gmail.com</p>
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
                    <FaChartBar className="mr-3" />
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
                    <FaBook className="mr-3" />
                    Lessons
                </NavLink>

                <div>
                    <button
                        onClick={toggleDropdown}
                        className={`flex items-center w-full px-6 py-3 text-left transition-colors ${
                            isDropdownOpen ? "bg-gray-200 dark:bg-slate-900 text-slate-900 dark:text-slate-300" : "hover:bg-gray-200 dark:hover:bg-slate-900"
                        }`}
                    >
                        <FaBrain className="mr-3" />
                        Learning Tools
                        {isDropdownOpen ? (
                            <FaCaretDown className="ml-auto" />
                        ) : (
                            <FaCaretRight className="ml-auto" />
                        )}
                    </button>
                    {isDropdownOpen && (
                        <div className="ml-6 mt-2 space-y-2">
                            <NavLink
                                onClick={() => setShowSideBar(false)}
                                to="/quizPage"
                                className={({ isActive }) =>
                                    `flex items-center px-6 py-3 transition-colors ${
                                        isActive ? "bg-gray-200 dark:bg-slate-900 text-slate-900 dark:text-slate-300" : "hover:bg-gray-200 dark:hover:bg-slate-900"
                                    }`
                                }
                            >
                                <FaQuestionCircle className="mr-3" />
                                Quiz
                            </NavLink>

                            <NavLink
                                onClick={() => setShowSideBar(false)}
                                to="/speakingPage"
                                className={({ isActive }) =>
                                    `flex items-center px-6 py-3 transition-colors ${
                                        isActive ? "bg-gray-200 dark:bg-slate-900 text-slate-900 dark:text-slate-300" : "hover:bg-gray-200 dark:hover:bg-slate-900"
                                    }`
                                }
                            >
                                <FaVolumeUp className="mr-3" />
                                Speaking
                            </NavLink>

                            <NavLink
                                onClick={() => setShowSideBar(false)}
                                to="/vocabularyPage"
                                className={({ isActive }) =>
                                    `flex items-center px-6 py-3 transition-colors ${
                                        isActive ? "bg-gray-200 dark:bg-slate-900 text-slate-900 dark:text-slate-300" : "hover:bg-gray-200 dark:hover:bg-slate-900"
                                    }`
                                }
                            >
                                <FaBookOpen className="mr-3" />
                                Vocabulary
                            </NavLink>

                            <NavLink
                                onClick={() => setShowSideBar(false)}
                                to="/grammerPage"
                                className={({ isActive }) =>
                                    `flex items-center px-6 py-3 transition-colors ${
                                        isActive ? "bg-gray-200 dark:bg-slate-900 text-slate-900 dark:text-slate-300" : "hover:bg-gray-200 dark:hover:bg-slate-900"
                                    }`
                                }
                            >
                                <FaLanguage className="mr-3" />
                                Grammar
                            </NavLink>
                        </div>
                    )}
                </div>

                <NavLink
                    onClick={() => setShowSideBar(false)}
                    to="/profile"
                    className={({ isActive }) =>
                        `flex items-center px-6 py-3 transition-colors ${
                            isActive ? "bg-gray-200 dark:bg-slate-900 text-slate-900 dark:text-slate-300" : "hover:bg-gray-200 dark:hover:bg-slate-900"
                        }`
                    }
                >
                    <FaUser className="mr-3" />
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
                    <FaQuestionCircle className="mr-3" />
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
                    <FaCog className="mr-3" />
                    Settings
                </NavLink>
                
                <NavLink
                    onClick={() => setShowSideBar(false)}
                    to="/logout"
                    className={({ isActive }) =>
                        `flex items-center px-6 py-3 transition-colors ${
                            isActive ? "bg-gray-200 dark:bg-slate-900 text-slate-900 dark:text-slate-300" : "hover:bg-gray-200 dark:hover:bg-slate-900"
                        }`
                    }
                >
                    <FaSignOutAlt className="mr-3" />
                    Logout
                </NavLink>
            </nav>
        </aside>
    );
};

export default SideMenu;
