
import SideMenu from "./SideMenu"; 

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Side Menu */}
      <div className=" mt-16 fixed hidden lg:block h-full w-[25%]">
        <SideMenu />
      </div>

      {/* Main Content */}
      <div className="w-full lg:ml-[25%] lg:w-3/4 flex flex-col justify-between h-full">
        {/* Scrollable Content */}
        <main className="overflow-y-auto mt-5 sm:mt-0 flex-grow bg-gray-100 dark:bg-slate-900 px-2">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full bg-gray-200 dark:bg-slate-900 text-center py-4 border-t  dark:border-gray-700 border-gray-300">
          <p className="text-sm text-gray-600 dark:text-slate-300">
            © 2024 Godwin Mangai. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
