
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
        <main className="overflow-y-auto flex-grow bg-gray-100 px-2">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full bg-gray-200 text-center py-4 border-t border-gray-300">
          <p className="text-sm text-gray-600">
            © 2024 Godwin Mangai. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
