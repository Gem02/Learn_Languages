import { useState } from "react";
import { FaUser, FaLanguage, FaEdit, FaSave, FaTimes, FaStar, FaAward, FaComments, FaBell } from "react-icons/fa";

const ProfilePage = () => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isNotificationModalOpen, setNotificationModalOpen] = useState(false);

    const toggleEditModal = () => setEditModalOpen(!isEditModalOpen);
    const toggleNotificationModal = () => setNotificationModalOpen(!isNotificationModalOpen);

    return (
        <div className="min-h-screen bg-blue-50 p-4 sm:p-8">
            {/* Header Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center text-3xl text-blue-600 font-bold">
                            G
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-blue-900">Godwin Mangai</h2>
                            <p className="text-blue-600">Primary Language: <strong>English</strong></p>
                        </div>
                    </div>
                    <button
                        onClick={toggleEditModal}
                        className="mt-4 sm:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        <FaEdit className="inline mr-2" /> Edit Profile
                    </button>
                </div>
            </div>

            {/* Languages Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Languages You're Learning</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-blue-100 p-4 rounded-lg flex items-center space-x-4">
                        <FaLanguage className="text-4xl text-blue-600" />
                        <div>
                            <h4 className="text-blue-900 font-bold">Spanish</h4>
                            <p className="text-blue-700">Proficiency: Beginner</p>
                        </div>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-lg flex items-center space-x-4">
                        <FaLanguage className="text-4xl text-blue-600" />
                        <div>
                            <h4 className="text-blue-900 font-bold">French</h4>
                            <p className="text-blue-700">Proficiency: Intermediate</p>
                        </div>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-lg flex items-center space-x-4">
                        <FaLanguage className="text-4xl text-blue-600" />
                        <div>
                            <h4 className="text-blue-900 font-bold">German</h4>
                            <p className="text-blue-700">Proficiency: Advanced</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Achievements</h3>
                <div className="flex space-x-4">
                    <div className="bg-blue-100 p-4 rounded-lg flex items-center space-x-4">
                        <FaAward className="text-4xl text-blue-600" />
                        <div>
                            <h4 className="text-blue-900 font-bold">Completed 50 Lessons</h4>
                            <p className="text-blue-700">Keep up the great work!</p>
                        </div>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-lg flex items-center space-x-4">
                        <FaStar className="text-4xl text-blue-600" />
                        <div>
                            <h4 className="text-blue-900 font-bold">5-Star Feedback</h4>
                            <p className="text-blue-700">Your efforts are appreciated.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notifications Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-blue-900">Notifications</h3>
                    <button
                        onClick={toggleNotificationModal}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        <FaBell className="inline mr-2" /> Manage Notifications
                    </button>
                </div>
                <ul className="mt-4 space-y-2">
                    <li className="bg-blue-100 p-3 rounded-lg flex items-center space-x-4">
                        <FaComments className="text-2xl text-blue-600" />
                        <span className="text-blue-900">New comment on your lesson progress.</span>
                    </li>
                    <li className="bg-blue-100 p-3 rounded-lg flex items-center space-x-4">
                        <FaAward className="text-2xl text-blue-600" />
                        <span className="text-blue-900">You've unlocked a new badge!</span>
                    </li>
                </ul>
            </div>

            {/* Edit Profile Modal */}
            {isEditModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg">
                        <h3 className="text-xl font-bold text-blue-900 mb-4">Edit Profile</h3>
                        <form>
                            <label className="block mb-4">
                                <span className="text-blue-700">Name</span>
                                <input type="text" className="mt-1 block w-full p-2 border rounded-lg" defaultValue="Godwin Mangai" />
                            </label>
                            <label className="block mb-4">
                                <span className="text-blue-700">Email</span>
                                <input type="email" className="mt-1 block w-full p-2 border rounded-lg" defaultValue="godwin@gmail.com" />
                            </label>
                            <div className="flex justify-end space-x-4">
                                <button type="button" onClick={toggleEditModal} className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500">
                                    <FaTimes className="inline mr-2" /> Cancel
                                </button>
                                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                    <FaSave className="inline mr-2" /> Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Manage Notifications Modal */}
            {isNotificationModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg">
                        <h3 className="text-xl font-bold text-blue-900 mb-4">Manage Notifications</h3>
                        <form>
                            <label className="block mb-4">
                                <input type="checkbox" className="mr-2" /> Receive lesson progress updates
                            </label>
                            <label className="block mb-4">
                                <input type="checkbox" className="mr-2" /> Receive badge unlock notifications
                            </label>
                            <div className="flex justify-end space-x-4">
                                <button type="button" onClick={toggleNotificationModal} className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500">
                                    <FaTimes className="inline mr-2" /> Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage









                

                

                

                