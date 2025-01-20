
import { FaTimes } from 'react-icons/fa';
import {languages} from '../../components/smallFunctions/quickFunc'
import {Spinner} from '../../components/ui/TextSpinner'

export const LanguageModal = ({ closeModal, title, description, loading, onSubmit, onSelectChange}) => {
 
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white relative dark:bg-slate-800 p-6 rounded-lg shadow-lg w-11/12 md:w-1/2">
        <FaTimes className="absolute right-5 top-5 text-2xl cursor-pointer dark:text-slate-300" onClick={closeModal} />
        <h3 className="text-xl dark:text-slate-200 font-semibold mb-4">{title}</h3>
        <p className="text-sm text-gray-700 dark:text-slate-300 mb-4">{description}</p>
        <select
          onChange={onSelectChange}
          className="px-4 py-2 border border-gray-300 dark:border-gray-800 rounded bg-white dark:bg-slate-950 dark:text-slate-300 shadow-sm w-[80%]"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </option>
          ))}
        </select>
        <div className="flex items-center flex-wrap gap-2 mt-10">
          <button
            onClick={onSubmit}
            className="mt-4 px-4 py-2 flex justify-center items-center gap-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? (<Spinner />) : ""}
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
};

export const LearningNow = ({closeModal, title, description, onSelectChange, saveLanguage}) =>{
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white relative dark:bg-slate-800 p-6 rounded-lg shadow-lg w-11/12 md:w-1/2">
        <FaTimes className="absolute right-5 top-5 text-2xl cursor-pointer dark:text-slate-300" onClick={closeModal} />
        <h3 className="text-xl dark:text-slate-200 font-semibold mb-4">{title}</h3>
        <p className="text-sm text-gray-700 dark:text-slate-300 mb-4">{description}</p>
        <select
          onChange={onSelectChange}
          className="px-4 py-2 border border-gray-300 dark:border-gray-800 rounded bg-white dark:bg-slate-950 dark:text-slate-300 shadow-sm w-[80%]"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </option>
          ))}
        </select>
        <div className="flex items-center flex-wrap gap-2 mt-10">
          <button
            onClick={saveLanguage}
            className="mt-4 px-4 py-2 flex justify-center items-center gap-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

