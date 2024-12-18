import { useState } from "react";
import Layout from '../components/ui/Layout';


import {
  FaEdit,
  FaLanguage,
  FaBook,
  FaAward,
  FaPenFancy,
  FaTrophy,
  FaCog,
  FaLock,
} from "react-icons/fa";

const ProfilePage = () => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);

  const toggleEditModal = () => setEditModalOpen(!isEditModalOpen);
  const togglePasswordModal = () => setPasswordModalOpen(!isPasswordModalOpen);

  const languages = [
    { name: "Spanish", level: "Intermediate", progress: 75 },
    { name: "French", level: "Beginner", progress: 40 },
  ];

  return (
    <Layout>
        <div className=" flex mt-20">
            <div className=" sm:p-6 bg-gray-100 dark:bg-slate-900 min-h-screen w-full text-gray-900">
                
            {/* Profile Header */}
            <header className="bg-white dark:bg-slate-950 shadow-md rounded-lg p-3 sm:p-6 mb-8 flex-wrap flex items-center justify-between gap-4">
                <div className="flex gap-4 flex-wrap">
                    <img src="/profile-pic.jpg" alt="User" className="w-24 h-24 rounded-full border-2 border-blue-100" />
                    <div>
                        <h1 className="text-3xl font-bold dark:text-slate-200">John Doe</h1>
                        <p className="text-gray-600 dark:text-slate-400">john.doe@example.com</p>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <span className="flex items-center text-sm text-blue-600">
                                <FaLanguage className="mr-2" />
                                <strong>Main Language: </strong> English
                            </span>

                            <span className="flex items-center text-sm text-blue-600">
                                <FaPenFancy className="mr-2" />
                                <strong>Learning:</strong> Spanish, French
                            </span>
                        </div>
                    </div>
                </div>
                <button onClick={toggleEditModal} className="mt-5 px-4 py-2 bg-blue-600 text-white rounded shadow-md flex items-center space-x-2 hover:bg-blue-800" >
                    <FaEdit />
                    <span>Edit Profile</span>
                </button>
            </header>

            {/* Languages Section */}
            <section className="mb-8">
                <h2 className="text-xl font-bold dark:text-slate-200 mb-4 flex items-center space-x-2">
                <FaBook className="text-blue-600" />
                <span>Languages</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {languages.map((language, index) => (
                    <div
                    key={index}
                    className="bg-white dark:bg-slate-950 shadow-md rounded-lg p-4 flex flex-col items-center"
                    >
                    <h3 className="text-lg font-bold dark:text-slate-200">{language.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{language.level} Level</p>
                    <div className="relative w-24 h-24 my-4">
                        <div
                        className="absolute inset-0 rounded-full border-4 border-gray-200"
                        style={{
                            background: `conic-gradient(#6b46c1 ${
                            language.progress * 3.6
                            }deg, #e5e7eb 0deg)`,
                        }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold dark:text-slate-900">{language.progress}%</span>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </section>

            {/* Achievements Section */}
            <section className="mb-8">
                <h2 className="text-xl font-bold dark:text-slate-200 mb-4 flex items-center space-x-2">
                <FaTrophy className="text-blue-600" />
                <span>Achievements</span>
                </h2>
                <div className="bg-white dark:bg-slate-950 shadow-md rounded-lg p-6 flex space-x-6">
                <div className="text-center">
                    <FaAward className="text-blue-600 text-4xl mx-auto" />
                    <p className="mt-2 text-sm dark:text-slate-400">Completed 10 Lessons</p>
                </div>
                <div className="text-center">
                    <FaAward className="text-green-500 text-4xl mx-auto" />
                    <p className="mt-2 text-sm dark:text-slate-400">5 Days Streak</p>
                </div>
                </div>
            </section>

            {/* Settings Section */}
            <section>
                <h2 className="text-xl font-bold dark:text-slate-200 mb-4 flex items-center space-x-2">
                <FaCog className="text-blue-600" />
                <span>Settings</span>
                </h2>
                <div className="space-y-4 dark:text-slate-400">
                <button
                    onClick={toggleEditModal}
                    className="w-full bg-white dark:bg-slate-950 shadow-md rounded-lg p-4 flex items-center space-x-3 hover:bg-blue-50"
                >
                    <FaEdit />
                    <span>Update Profile</span>
                </button>
                <button
                    onClick={togglePasswordModal}
                    className="w-full bg-white dark:bg-slate-950 shadow-md rounded-lg p-4 flex items-center space-x-3 hover:bg-blue-50"
                >
                    <FaLock />
                    <span>Change Password</span>
                </button>
                </div>
            </section>

            {/* Edit Profile Modal */}
            {isEditModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white dark:bg-slate-950 rounded-lg p-6 w-full max-w-lg shadow-lg">
                    <h3 className="text-xl font-bold dark:text-slate-200 mb-4">Edit Profile</h3>
                    <form>
                    <div className="mb-4">
                        <label className="block text-sm font-bold dark:text-slate-200 mb-2">Name</label>
                        <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-600"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold dark:text-slate-200 mb-2">Email</label>
                        <input
                        type="email"
                        defaultValue="john.doe@example.com"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-600"
                        />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                        type="button"
                        onClick={toggleEditModal}
                        className="px-4 py-2 bg-gray-100 dark:bg-slate-900 rounded-lg hover:bg-gray-200"
                        >
                        Cancel
                        </button>
                        <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
                        >
                        Save
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            )}

            {/* Password Change Modal */}
            {isPasswordModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white dark:bg-slate-950 rounded-lg p-6 w-full max-w-lg shadow-lg">
                    <h3 className="text-xl font-bold dark:text-slate-200 mb-4">Change Password</h3>
                    <form>
                    <div className="mb-4">
                        <label className="block text-sm font-bold dark:text-slate-200 mb-2">New Password</label>
                        <input
                        type="password"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-600"
                        />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                        type="button"
                        onClick={togglePasswordModal}
                        className="px-4 py-2 bg-gray-100 dark:bg-slate-900 rounded-lg hover:bg-gray-200"
                        >
                        Cancel
                        </button>
                        <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
                        >
                        Save
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            )}
            </div>
        </div>
    </Layout>
  );
};

export default ProfilePage;
