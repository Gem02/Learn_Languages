import AdminSideNav from './AdminSideNavs';
import AdminNav from './AdminNav'

const AdminLayout = ({children}) =>{
    
    return (
        <div className='bg-white dark:bg-slate-900 w-full h-screen'>
            {/* top nav */}
            <div>
                <AdminNav/>
            </div>

            {/* main */}
            <div className='flex h-screen w-full'>
                {/* side nav */}
                <div className='hidden sm:mt-20 fixed lg:block h-full lg:w-[25%]'>
                    <AdminSideNav />
                </div>

                {/* main content */}
                <div className="w-full h-full lg:ml-[25%] bg-slate-100 dark:bg-slate-900 lg:w-[80%] px-3 pt-24">
                
                    {children}
            
                </div>

            </div>
        </div>
    )
}

export default AdminLayout