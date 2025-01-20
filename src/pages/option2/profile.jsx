import { useState, useEffect } from "react";
import Layout from '../components/ui/Layout';
import { getDocs, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

import {
  FaEdit,
  FaLanguage,
  FaAward,
  FaPenFancy,
} from "react-icons/fa";

const ProfilePage = () => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const usersCollectionRef = collection(db, "users");

  const toggleEditModal = () => setEditModalOpen(!isEditModalOpen);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const data = await getDocs(usersCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        // Assuming you're displaying the first user's info for demonstration purposes
        if (filteredData.length > 0) {
          const user = filteredData[0]; // Replace with actual user retrieval logic
          setUserInfo(user);
          setName(user.name);
          setEmail(user.email);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUserInfo();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const userDoc = doc(db, "users", userInfo.id);
      await updateDoc(userDoc, { name, email });
      setUserInfo({ ...userInfo, name, email });
      toggleEditModal();
    } catch (error) {
      console.error("Error updating profile: ", error);
    }
  };

  return (
    <Layout>
      <div className="flex mt-20">
        <div className="sm:p-6 bg-gray-100 dark:bg-slate-900 min-h-screen w-full text-gray-900">
          {/* Profile Header */}
          <header className="bg-white dark:bg-slate-950 shadow-md rounded-lg p-3 sm:p-6 mb-8 flex-wrap flex items-center justify-between gap-4">
            <div className="flex gap-4 flex-wrap">
              <img src="/profile-pic.jpg" alt="User" className="w-24 h-24 rounded-full border-2 border-blue-100" />
              <div>
                <h1 className="text-3xl font-bold dark:text-slate-200">{userInfo.name || 'John Doe'}</h1>
                <p className="text-gray-600 dark:text-slate-400">{userInfo.email || 'john.doe@example.com'}</p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <span className="flex items-center text-sm text-blue-600">
                    <FaLanguage className="mr-2" />
                    <strong>Main Language: </strong> {userInfo.mainLanguage || 'English'}
                  </span>
                  <span className="flex items-center text-sm text-blue-600">
                    <FaPenFancy className="mr-2" />
                    <strong>Learning:</strong> {userInfo.learningLanguages ? userInfo.learningLanguages.join(', ') : 'Spanish, French'}
                  </span>
                </div>
              </div>
            </div>
            <button onClick={toggleEditModal} className="mt-5 px-4 py-2 bg-blue-600 text-white rounded shadow-md flex items-center space-x-2 hover:bg-blue-800">
              <FaEdit />
              <span>Edit Profile</span>
            </button>
          </header>

          {/* Edit Profile Modal */}
          {isEditModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white dark:bg-slate-950 rounded-lg p-6 w-full max-w-lg shadow-lg">
                <h3 className="text-xl font-bold dark:text-slate-200 mb-4">Edit Profile</h3>
                <form onSubmit={handleSave}>
                  <div className="mb-4">
                    <label className="block text-sm font-bold dark:text-slate-200 mb-2">Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-600"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold dark:text-slate-200 mb-2">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;