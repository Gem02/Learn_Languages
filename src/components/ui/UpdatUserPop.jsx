
import {Spinner} from './TextSpinner';

export const UpdateNamePop = ({handleSubmit, name, setName, closeModal, loading}) =>{
    return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white dark:bg-slate-950 rounded-lg p-6 w-full max-w-lg shadow-lg">
        <h3 className="text-xl font-bold dark:text-slate-200 mb-4">
            Edit Name
        </h3>
        <div>
            <div className="mb-4">
            <label className="block text-sm font-bold dark:text-slate-200 mb-2">
                Name
            </label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border border-gray-300 dark:border-gray-800 rounded px-4 py-2 text-slate-800 dark:text-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            </div>
            <div className="flex justify-end space-x-4">
            <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 bg-gray-100 dark:bg-slate-900 dark:hover:dark:bg-slate-800 rounded text-slate-800 dark:text-slate-300 hover:bg-gray-200"
            >
                Cancel
            </button>
            <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className="px-4 py-2 flex justify-center items-center gap-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                {loading ? (<Spinner />) : ""}
                {loading ? `Updating...` : "Update"}
            </button>
            </div>
        </div>
        </div>
    </div>
    )
}

export const UpdatePasswordPop = ({handleSubmit, setCurrentPassword, setPassword, currentPassword, password, closeModal, loading}) =>{
    
    
    return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white dark:bg-slate-950 rounded-lg p-6 w-full max-w-lg shadow-lg">
        <h3 className="text-xl font-bold dark:text-slate-200 mb-4">
            Add/Edit Password
        </h3>

        <div>
            <div className="mb-4">
            <label className="block text-sm font-bold dark:text-slate-200 mb-2">
                Current Password
            </label>
            <input
                type="password"
                onChange={(e) => setCurrentPassword(e.target.value)}
                name="name"
                value={currentPassword}
                className="w-full bg-transparent border border-gray-300 dark:border-gray-800 rounded px-4 py-2 text-slate-800 dark:text-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            </div>
            <div className="mb-4">
            <label className="block text-sm font-bold dark:text-slate-200 mb-2">
                New Password
            </label>
            <input
                type="password"
                name="name"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border border-gray-300 dark:border-gray-800 rounded px-4 py-2 text-slate-800 dark:text-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            </div>
            <div className="flex justify-end space-x-4">
            <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 bg-gray-100 dark:bg-slate-900 dark:hover:dark:bg-slate-800 rounded text-slate-800 dark:text-slate-300 hover:bg-gray-200"
            >
                Cancel
            </button>
            <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className="px-4 py-2 flex justify-center items-center gap-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                {loading ? (<Spinner />) : ""}
                {loading ? `Updating...` : "Update"}
            </button>
            </div>
        </div>

        </div>
    </div>
    )
}