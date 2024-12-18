import { useState } from 'react';
import { FaEdit, FaLanguage, FaBell, FaLock, FaUser, FaSignOutAlt, FaPaintBrush } from 'react-icons/fa';
import Layout from '../components/ui/Layout';
import DarkmodeToggle from '../components/ui/DarkmodeBtn'


const SettingsPage = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <Layout>
        <section className="pt-20 py-10 text-slate-900 dark:text-slate-200">
        <h1 className="text-3xl font-bold mb-6 text-center">Settings</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Account Settings */}
            <div className="p-6 bg-white dark:bg-slate-950 shadow rounded-lg">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <FaUser />
                    Account Settings
                </h2>
                <p className="text-sm text-gray-600 dark:text-slate-400 dark:text-slate-300 mb-4">Manage your account details.</p>
                <ul className="space-y-3">
                    <li>
                    <span>Email: user@example.com</span>
                    <button
                        className="ml-4 text-blue-600 hover:underline"
                        onClick={() => openModal('Update Email')}
                    >
                        <FaEdit /> Edit
                    </button>
                    </li>
                    <li>
                    <span>Password: ********</span>
                    <button
                        className="ml-4 text-blue-600 hover:underline"
                        onClick={() => openModal('Update Password')}
                    >
                        <FaEdit /> Edit
                    </button>
                    </li>
                </ul>
            </div>

            {/* Language Preferences */}
            <div className="p-6 bg-white dark:bg-slate-950 shadow rounded-lg">
            <h2 className="text-xl font-semibold flex items-center gap-2">
                <FaLanguage />
                Language Preferences
            </h2>
            <p className="text-sm text-gray-600 dark:text-slate-400 mb-4 dark:text-slate-300">Set your learning languages.</p>
            <ul className="space-y-3">
                <li>
                <span>Primary Language: English</span>
                <button
                    className="ml-4 text-blue-600 hover:underline"
                    onClick={() => openModal('Edit Primary Language')}
                >
                    <FaEdit /> Edit
                </button>
                </li>
                <li>
                <span>Learning: Spanish, French</span>
                <button
                    className="ml-4 text-blue-600 hover:underline"
                    onClick={() => openModal('Manage Learning Languages')}
                >
                    <FaEdit /> Manage
                </button>
                </li>
            </ul>
            </div>

            {/* Notification Settings */}
            <div className="p-6 bg-white dark:bg-slate-950 dark:text-slate-300 shadow rounded-lg">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <FaBell />
                    Notification Settings
                </h2>
                <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">Control your notification preferences.</p>
                <ul className="space-y-3">
                    <li>
                    <label>
                        <input type="checkbox" className="mr-2" /> Email Notifications
                    </label>
                    </li>
                    <li>
                    <label>
                        <input type="checkbox" className="mr-2" /> SMS Notifications
                    </label>
                    </li>
                    <li>
                    <label>
                        <input type="checkbox" className="mr-2" /> App Notifications
                    </label>
                    </li>
                </ul>
            </div>

            {/* Security */}
            <div className="p-6 bg-white dark:bg-slate-950 dark:text-slate-300 shadow rounded-lg">
            <h2 className="text-xl font-semibold flex items-center gap-2">
                <FaLock />
                Security
            </h2>
            <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">Manage your account security.</p>
            <ul className="space-y-3">
                <li>
                    <span>Two-Factor Authentication: Enabled</span>
                    <button
                        className="ml-4 text-blue-600 hover:underline"
                        onClick={() => openModal('Manage Two-Factor Authentication')}
                    >
                        <FaEdit /> Manage
                    </button>
                </li>
                <li>
                    <span>Active Sessions</span>
                    <button
                        className="ml-4 text-blue-600 hover:underline"
                        onClick={() => openModal('View Active Sessions')}
                    >
                        <FaEdit /> View
                    </button>
                </li>
            </ul>
            </div>

            <div className="p-6 bg-white dark:bg-slate-950 dark:text-slate-300 shadow rounded-lg">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <FaPaintBrush />
                    Theme Settings
                </h2>
                <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">Chose your desired theme </p>
                <DarkmodeToggle />
            </div>
        </div>


        {/* Logout Section */}
        <div className="mt-10 text-center">
            <button className="px-6 py-3 bg-red-600 text-white rounded-lg flex items-center gap-2 hover:bg-red-700 transition">
            <FaSignOutAlt />
            Logout
            </button>
        </div>

        {/* Modal */}
        {modalContent && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2">
                <h3 className="text-xl font-semibold mb-4">{modalContent}</h3>
                <p className="text-sm text-gray-700 mb-4">
                This is where the modal content for <strong>modalContent</strong> would go.
                </p>
                <button
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={closeModal}
                >
                Close
                </button>
            </div>
            </div>
        )}
        </section>
    </Layout>
  );
};

export default SettingsPage;
