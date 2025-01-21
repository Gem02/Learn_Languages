import { useState, useEffect } from 'react';
import { FaLanguage, FaBell, FaLock, FaUser, FaSignOutAlt, FaPaintBrush } from 'react-icons/fa';
import Layout from '../components/ui/Layout';
import DarkmodeToggle from '../components/ui/DarkmodeBtn';
import {useUserContext} from '../context/useUser';
import {LanguageModal} from '../components/ui/LanguageDropdown';
import {setMainLanguage, languagesToLearn} from '../utils/languageFunctions';
import Toast from '../components/ui/toast';
import {UpdateNamePop, UpdatePasswordPop} from '../components/ui/UpdatUserPop';
import {updateName, updateUserPassword} from '../utils/userFunctions';
import {getAuth} from 'firebase/auth'


const SettingsPage = () => {
  const [modalContent, setModalContent] = useState('');
  const [response, setResponse] = useState({type: '', message: ''});
  const [showToast, setShowToast] = useState(false)
  const [loading, setLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [name, setName] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const {user} = useUserContext();

  const handleCloseToast = () => {
    setShowToast(false);
  };


  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent('');
  

  const handleChange = (e) =>{
    setSelectedLanguage(e.target.value)
  }

  const handleNameSubmit = async () =>{
    await updateName(user, setResponse, name, setLoading);
    setShowToast(true);
    setTimeout(() => {
        setShowToast(false);
      }, 3000);
  }

  const handleMainLanguageChange = async () => {
    await setMainLanguage(user, setResponse, selectedLanguage, setLoading);
    setShowToast(true);
    setTimeout(() => {
        setShowToast(false);
      }, 3000);
  };

  const handleLanguagesChange = async () =>{
    await languagesToLearn(setResponse, selectedLanguage, user, setLoading);
    setShowToast(true);
    setTimeout(() => {
        setShowToast(false);
      }, 3000);
  }

  const handlePassword = async() =>{
    const auth = getAuth();
    await updateUserPassword(auth, setResponse, password, currentPassword, setLoading)
    setShowToast(true);
    setTimeout(() => {
        setShowToast(false);
      }, 3000);
  }

  useEffect(() => {
    if (showToast.show) {
      const timer = setTimeout(() => {
        handleCloseToast();
      }, 3000); 

      return () => clearTimeout(timer); 
    }
  }, [showToast]);


  return (
    <Layout>
        <section className="pt-20 py-10 text-slate-900 relative dark:text-slate-200">
        <h1 className="text-3xl font-bold mb-6 text-center">Settings</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Account Settings */}
            <div className="p-6 bg-white dark:bg-slate-950 shadow rounded-lg">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <FaUser />
                    Account Settings
                </h2>
                <p className="text-sm text-gray-600 dark:text-slate-300 mb-4">Manage your account details.</p>
                <ul className="space-y-3">
                    <li className='flex flex-wrap gap-2'>
                    <span>Name: {user?.name}</span>
                    <button
                        className="ring-1 px-5 ring-slate-500 text-slate-500 rounded hover:underline"
                        onClick={() => setModalContent('name')}
                    >
                         Edit
                    </button>
                    </li>
                    <li className='flex flex-wrap gap-2'>
                    <span>Password: ********</span>
                    <button
                        className="ring-1 px-5 ring-slate-500 text-slate-500 rounded hover:underline"
                        onClick={() => openModal('password')}
                    >
                         Edit
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
                <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">Set your learning languages.</p>
                <ul className="space-y-3">
                    <li className='flex flex-wrap gap-2'>
                    <span>Primary Language: {user?.mainLanguage || 'Not set'}</span>
                    <button
                        className="ring-1 px-5 ring-slate-500 text-slate-500 rounded hover:underline"
                        onClick={() => openModal('setPrimary')}
                    >
                         Set Now
                    </button>
                    </li>
                    <li className='flex flex-wrap gap-2'>
                    <span>Language(s) to learn: {user?.learningLanguages?.join(', ') || 'None'}</span>
                    <button
                        className="ring-1 px-5 ring-slate-500 text-slate-500 rounded hover:underline"
                        onClick={() => openModal('languages')}
                    >
                         Add
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
                    <li className='flex flex-wrap gap-2'>
                    <label>
                        <input type="checkbox" className="mr-2" /> Email Notifications
                    </label>
                    </li>
                    <li className='flex flex-wrap gap-2'>
                    <label>
                        <input type="checkbox" className="mr-2" /> SMS Notifications
                    </label>
                    </li>
                    <li className='flex flex-wrap gap-2'>
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
                <li className='flex flex-wrap gap-2'>
                    <span>Two-Factor Authentication: Enabled</span>
                    <button
                        className="ring-1 px-5 ring-slate-500 text-slate-500 rounded hover:underline"
                        onClick={() => openModal('Manage Two-Factor Authentication')}
                    >
                         Manage
                    </button>
                </li>
                <li className='flex flex-wrap gap-2'>
                    <span>Active Sessions</span>
                    <button
                        className="ring-1 px-5 ring-slate-500 text-slate-500 rounded hover:underline"
                        onClick={() => openModal('View Active Sessions')}
                    >
                         View
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

        {modalContent === 'setPrimary' && (
            <LanguageModal title={"Main Language"} description={"Set your primary language"} closeModal={closeModal} loading={loading} onSelectChange={handleChange} onSubmit={handleMainLanguageChange}/>
        )}

        {modalContent === 'languages' && (
            <LanguageModal title={"Languages"} description={"choose the language you want want to learn "} closeModal={closeModal} loading={loading} onSelectChange={handleChange} onSubmit={handleLanguagesChange}/>
        )}

        {modalContent === 'name' && (
            <UpdateNamePop name={name} setName={setName} closeModal={closeModal} loading={loading} handleSubmit={handleNameSubmit}/>
        )}

        {modalContent === 'password' && (
            <UpdatePasswordPop handleSubmit={handlePassword} setCurrentPassword={setCurrentPassword} setPassword={setPassword} currentPassword={currentPassword} password={password} closeModal={closeModal} loading={loading} />
        )}



        {showToast && (
            <Toast message={response.message} type={response.type} onClose={handleCloseToast}/>
        )}
        
        </section>
    </Layout>
  );
};

export default SettingsPage;
