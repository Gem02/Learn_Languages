import { useState, useEffect } from "react";
import Layout from "../components/ui/Layout";
import { useUserContext } from "../context/useUser";
import { FaEdit, FaLanguage, FaStar, FaFire, FaPenFancy, FaTrophy } from "react-icons/fa";
import {setMainLanguage, languageLearningNow} from '../utils/languageFunctions';
import {LanguageModal, LearningNow} from '../components/ui/LanguageDropdown';
import {UpdateNamePop} from '../components/ui/UpdatUserPop';
import {updateName} from '../utils/userFunctions';
import Toast from '../components/ui/toast';
import {updateStreak} from '../utils/updateStreak'


const ProfilePage = () => {
  const { user, learningData } = useUserContext();
  const [modalCode, setModalCode] = useState('');
  const [streak, setStreak] = useState(0);
  const [response, setResponse] = useState({type: '', message: ''});
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("");
  const [newName, setName] = useState('');
  const [showToast, setShowToast] = useState(false)
 
  const handleCloseToast = () => {
    setShowToast(false);
  };

  const closeModal = () => setModalCode('');

  const handleChange = (e) =>{
    setSelectedLanguage(e.target.value)
  }

  const handleMainLanguageChange = async () => {
    await setMainLanguage(user, setResponse, selectedLanguage, setLoading);
    setShowToast(true);
    setTimeout(() => {
        setShowToast(false);
      }, 3000);
  };
  
  // Fetch streak data on load
  useEffect(() => {
    setStreak(user?.dailyStreak?.streakCount)
  }, [user]);
  
  //update streak
  useEffect(() => {
    // Update the streak if user is logged in
    if (user?.uid) {
      updateStreak({
        user,
        lastUpdated,
        streak,
        setStreak,
        setLastUpdated,
      });
    }
  }, [user, lastUpdated, streak]);
  
  const saveLanguage = () => {
    languageLearningNow(selectedLanguage, setResponse);
  }

  const handleNameSubmit = async() =>{
    await updateName(user, setResponse, newName, setLoading);
    setShowToast(true);
    setTimeout(() => {
        setShowToast(false);
      }, 3000);
  }
  
  const currentLanguage = localStorage.getItem('selectedLanguage');

  return (
    <Layout>
      <div className="flex mt-16">
        <div className="sm:p-6 bg-gray-100 dark:bg-slate-900 min-h-screen w-full text-gray-900">
          {/* Profile Header */}
          <header className="bg-white dark:bg-slate-950 shadow-md rounded-lg p-3 sm:p-6 mb-8">
            <div className="flex gap-4 flex-wrap justify-between">
              <div className="flex gap-4 flex-wrap">
                <img
                  src={user?.photoUrl || "https://api.dicebear.com/6.x/adventurer/svg"}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-2 border-blue-100"
                />
                <div>
                  <h1 className="text-3xl font-bold dark:text-slate-200">
                    {user?.name}
                  </h1>
                  <p className="text-gray-600 dark:text-slate-400">
                    {user?.email}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <span className="flex items-center text-sm ">
                      <FaLanguage className="mr-2 text-slate-800 dark:text-slate-300" />
                      <strong className="text-slate-800 dark:text-slate-300">Main Language: </strong>
                      <strong className="text-blue-600">{user?.mainLanguage || "Not set"}</strong>
                      <button onClick={() => setModalCode('mainLanguage')} className="ring-1 px-5 ring-slate-500 text-slate-500 hover:dark:ring-slate-300 hover:dark:text-slate-300 rounded ml-3 hover:underline"
                        >
                          Edit
                      </button>
                    </span>
                    <span className="flex items-center text-sm">
                      <FaPenFancy className="mr-2 text-slate-800 dark:text-slate-300" />
                      <strong className="text-slate-800 dark:text-slate-300">Learning: </strong>
                      <strong className="text-blue-600">{currentLanguage || "Not set"}</strong>
                      <button  onClick={() => setModalCode('learningNow')} className="ring-1 px-5 ring-slate-500 text-slate-500 hover:dark:ring-slate-300 hover:dark:text-slate-300 rounded ml-3 hover:underline">
                        Edit
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setModalCode('editName')}
                className="px-4 py-2 bg-blue-600 text-white h-fit rounded shadow-md flex items-center space-x-2 hover:bg-blue-700"
              >
                <FaEdit />
                <span>Edit Profile</span>
              </button>
            </div>
          </header>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-950 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold dark:text-slate-200">
                  Current Level
                </h3>
                <FaTrophy className="text-yellow-500 text-xl" />
              </div>
              <p className="text-3xl font-bold text-blue-600 mt-2">{learningData.lessons.indexOf(user.lastLesson) + 1}</p>
            </div>

            <div className="bg-white dark:bg-slate-950 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold dark:text-slate-200">
                  Daily Streak
                </h3>
                <FaFire className="text-orange-500 text-xl" />
              </div>
              <p className="text-3xl font-bold text-blue-600 mt-2">
                {streak} {streak > 1 ? 'days' : 'day'} 
              </p>
            </div>

            <div className="bg-white dark:bg-slate-950 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold dark:text-slate-200">
                  Total Points
                </h3>
                <FaStar className="text-yellow-500 text-xl" />
              </div>
              <p className="text-3xl font-bold text-blue-600 mt-2">0</p>
            </div>

          </div>

          {/* Edit Profile Modal */}
          {modalCode === 'editName' && (
            <UpdateNamePop name={newName} setName={setName} closeModal={closeModal} loading={loading} handleSubmit={handleNameSubmit}/>
          )}

          {modalCode === 'mainLanguage' && (
            <LanguageModal title={"Main Language"} description={"Set your primary language"} closeModal={closeModal} loading={loading} onSelectChange={handleChange} onSubmit={handleMainLanguageChange}/>
          )}

          {modalCode === 'learningNow' && (
            <LearningNow closeModal={closeModal} title={"Set language"} description={"Select a language to learn now"} onSelectChange={handleChange} saveLanguage={saveLanguage} />
          )}
          {showToast && (
            <Toast message={response.message} type={response.type} onClose={handleCloseToast}/>
        )}
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
