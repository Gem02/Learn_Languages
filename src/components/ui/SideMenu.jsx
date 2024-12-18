import { useState } from "react";
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

const SideMenu = ({setShowMenu}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        
        <aside className="w-full bg-white text-slate-900 h-screen">
            <div className="p-6 text-center border-b border-gray-200">
                <h1 className="text-2xl font-bold">Godwin Mangai</h1>
                <p>godwin@gmail.com</p>
            </div>
            <nav className="mt-6 space-y-1">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `flex items-center px-6 py-3 transition-colors ${
                            isActive ? "bg-gray-200 text-slate-900" : "hover:bg-gray-200"
                        }`
                    }
                >
                    <FaChartBar className="mr-3" />
                    Dashboard Overview
                </NavLink>
                
                <NavLink
                    to="/lesson"
                    className={({ isActive }) =>
                        `flex items-center px-6 py-3 transition-colors ${
                            isActive ? "bg-gray-200 text-slate-900" : "hover:bg-gray-200"
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
                            isDropdownOpen ? "bg-gray-200 text-slate-900" : "hover:bg-gray-200"
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
                                to="/quizPage"
                                className={({ isActive }) =>
                                    `flex items-center px-6 py-3 transition-colors ${
                                        isActive ? "bg-gray-200 text-slate-900" : "hover:bg-gray-100"
                                    }`
                                }
                            >
                                <FaQuestionCircle className="mr-3" />
                                Quiz
                            </NavLink>
                            <NavLink
                                to="/speakingPage"
                                className={({ isActive }) =>
                                    `flex items-center px-6 py-3 transition-colors ${
                                        isActive ? "bg-gray-200 text-slate-900" : "hover:bg-gray-200"
                                    }`
                                }
                            >
                                <FaVolumeUp className="mr-3" />
                                Speaking
                            </NavLink>
                            <NavLink
                                to="/vocabularyPage"
                                className={({ isActive }) =>
                                    `flex items-center px-6 py-3 transition-colors ${
                                        isActive ? "bg-gray-200 text-slate-900" : "hover:bg-gray-200"
                                    }`
                                }
                            >
                                <FaBookOpen className="mr-3" />
                                Vocabulary
                            </NavLink>
                            <NavLink
                                to="/grammerPage"
                                className={({ isActive }) =>
                                    `flex items-center px-6 py-3 transition-colors ${
                                        isActive ? "bg-gray-200 text-slate-900" : "hover:bg-gray-200"
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
                    to="/profile"
                    className={({ isActive }) =>
                        `flex items-center px-6 py-3 transition-colors ${
                            isActive ? "bg-gray-200 text-slate-900" : "hover:bg-gray-200"
                        }`
                    }
                >
                    <FaUser className="mr-3" />
                    My Profile
                </NavLink>

                <NavLink
                    to="/help"
                    className={({ isActive }) =>
                        `flex items-center px-6 py-3 transition-colors ${
                            isActive ? "bg-gray-200 text-slate-900" : "hover:bg-gray-200"
                        }`
                    }
                >
                    <FaQuestionCircle className="mr-3" />
                    Help
                </NavLink>

                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        `flex items-center px-6 py-3 transition-colors ${
                            isActive ? "bg-gray-200 text-slate-900" : "hover:bg-gray-200"
                        }`
                    }
                >
                    <FaCog className="mr-3" />
                    Settings
                </NavLink>
                
                <NavLink
                    to="/logout"
                    className={({ isActive }) =>
                        `flex items-center px-6 py-3 transition-colors ${
                            isActive ? "bg-gray-200 text-slate-900" : "hover:bg-gray-200"
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
