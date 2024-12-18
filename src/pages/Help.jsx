
import { FaSearch, FaEnvelope, FaPhoneAlt, FaQuestionCircle } from 'react-icons/fa';
import SideMenu from '../components/ui/SideMenu'
import Layout from '../components/ui/Layout';

{/* Sidebar */}
<SideMenu />
const HelpPage = () => {
  return (
    <Layout>
        <section className=" py-10 flex justify-center pt-24 text-slate-900 ">

            <div className='flex flex-col w-full items-center'>    

                <h1 className="text-3xl font-bold mb-6 text-center dark:text-slate-200">Help & Support</h1>

                {/* Search Section */}
                <div className="flex w-10/12 items-center justify-between bg-white dark:bg-slate-950 mb-10 px-4 py-2 ">
                    <input type="text" placeholder="Search for help topics..." className="w-full dark:bg-slate-950 focus:outline-none" />
                    <button className=" text-slate-500 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 rounded-md  flex items-center gap-2 px-3 py-1 cursor-pointer">
                        <FaSearch />
                        Search
                    </button>
                </div>

                <div className='w-full'>

                    {/* Categories Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="p-6 bg-white dark:bg-slate-950 shadow rounded-lg">
                            <h2 className="text-xl font-semibold dark:text-slate-200 mb-4">Account Issues</h2>
                            <ul className="space-y-2 dark:text-slate-400">
                                <li>Resetting your password</li>
                                <li>Updating profile information</li>
                                <li>Managing account settings</li>
                            </ul>
                        </div>

                        <div className="p-6 bg-white dark:bg-slate-950 shadow rounded-lg">
                            <h2 className="text-xl font-semibold dark:text-slate-200 mb-4">Learning Issues</h2>
                            <ul className="space-y-2 dark:text-slate-400">
                                <li>Accessing lessons</li>
                                <li>Using AI features</li>
                                <li>Tracking progress</li>
                            </ul>
                        </div>

                        <div className="p-6 bg-white dark:bg-slate-950 shadow rounded-lg">
                        <h2 className="text-xl font-semibold dark:text-slate-200 mb-4">Payment & Subscriptions</h2>
                        <ul className="space-y-2 dark:text-slate-400">
                            <li>Payment methods</li>
                            <li>Subscription management</li>
                            <li>Requesting refunds</li>
                        </ul>
                        </div>
                    </div>

                    {/* FAQs Section */}
                    <div className="bg-white dark:bg-slate-950 shadow rounded-lg p-6 mb-10">
                        <h2 className="text-2xl font-semibold mb-4 dark:text-slate-200">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                        <div>
                            <p className="font-medium dark:text-slate-200">How do I change my primary language?</p>
                            <p className="text-sm text-slate-700 dark:text-slate-400">Go to your profile settings and click EDIT next to your language preferences.</p>
                        </div>
                        <div>
                            <p className="font-medium dark:text-slate-200">What should I do if lessons don&apos;t load?</p>
                            <p className="text-sm text-slate-700 dark:text-slate-400">Ensure you have a stable internet connection and try reloading the page.</p>
                        </div>
                        <div>
                            <p className="font-medium dark:text-slate-200">How do I contact support?</p>
                            <p className="text-sm text-slate-700 dark:text-slate-400">You can reach us via email or phone using the options below.</p>
                        </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="bg-white dark:bg-slate-950 shadow rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4 dark:text-slate-200">Contact Us</h2>
                        <div className="flex flex-wrap md:flex-row gap-3">
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
                                <FaEnvelope />
                                Email Us
                            </button>
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
                                <FaPhoneAlt />
                                Call Us
                            </button>
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
                                <FaQuestionCircle />
                                Live Chat
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
  );
};

export default HelpPage;
