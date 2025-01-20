import { NavLink } from "react-router-dom";

import { LayoutDashboard, Users, Settings, Upload, FileText, LogOut, PlusCircle } from "lucide-react";

const AdminSideNav = () => {


  return (
    <aside className="h-screen w-full bg-white dark:bg-slate-950">

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive ? "dark:bg-slate-800 bg-gray-200 text-slate-800 dark:text-slate-300" : "text-gray-800 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-900"
                }`
              }
            >
              <LayoutDashboard className="mr-3 w-5 h-5" />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive ? "dark:bg-slate-800 bg-gray-200 text-slate-800 dark:text-slate-300" : "text-gray-800 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-900"
                }`
              }
            >
              <Users className="mr-3 w-5 h-5" />
              Users
            </NavLink>
          </li>

          <li>
            <NavLink
                to="/admin/addQuestions"
                className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg ${
                        isActive ? "dark:bg-slate-800 bg-gray-200 text-slate-800 dark:text-slate-300" : "text-gray-800 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-900"
                    }`
                }
            >
                <PlusCircle className="mr-3 w-5 h-5" />
                Add questions
            </NavLink>
          </li>

          {/* <li>
            <NavLink
              to="/admin/reports"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive ? "dark:bg-slate-800 bg-gray-200 text-slate-800 dark:text-slate-300" : "text-gray-800 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-900"
                }`
              }
            >
              <FileText className="mr-3 w-5 h-5" />
              Reports
            </NavLink>
          </li> */}

          <li>
            <NavLink
              to="/admin/settings"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive ? "dark:bg-slate-800 bg-gray-200 text-slate-800 dark:text-slate-300" : "text-gray-800 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-900"
                }`
              }
            >
              <Settings className="mr-3 w-5 h-5" />
              Settings
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/upload"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive ? "dark:bg-slate-800 bg-gray-200 text-slate-800 dark:text-slate-300" : "text-gray-800 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-900"
                }`
              }
            >
              <Upload className="mr-3 w-5 h-5" />
              Manual Upload
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-slate-800">
        <button
          onClick={() => alert("Logging out...")}
          className="w-full flex items-center justify-start p-3 text-gray-800 dark:text-slate-300 hover:bg-red-500 hover:text-white rounded-lg"
        >
          <LogOut className="mr-3 w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSideNav;
