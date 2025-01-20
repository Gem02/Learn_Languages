import { useState } from "react";
import { User, Lock, Settings, ShieldCheck } from "lucide-react";
import AdminLayout from "../components/AdminLayout";

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("Account");

  const renderContent = () => {
    switch (activeTab) {
      case "Account":
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">
                Admin Name
              </label>
              <input
                type="text"
                defaultValue="Admin"
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-transparent dark:text-slate-400 text-slate-700 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="admin@example.com"
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-transparent dark:text-slate-400 text-slate-700 focus:outline-none"
              />
            </div>
            <div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Save Changes
              </button>
            </div>
          </div>
        );
      case "Security":
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">
                Change Password
              </label>
              <input
                type="password"
                placeholder="New Password"
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-transparent dark:text-slate-400 text-slate-700 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-transparent dark:text-slate-400 text-slate-700 focus:outline-none"
              />
            </div>
            <div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Update Password
              </button>
            </div>
          </div>
        );
      case "System":
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">
                Application Name
              </label>
              <input
                type="text"
                defaultValue="Admin Dashboard"
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-transparent dark:text-slate-400 text-slate-700 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">
                Maintenance Mode
              </label>
              <select
                defaultValue="Disabled"
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-transparent dark:text-slate-400 text-slate-700 focus:outline-none"
              >
                <option>Enabled</option>
                <option>Disabled</option>
              </select>
            </div>
            <div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Save Settings
              </button>
            </div>
          </div>
        );
      case "Permissions":
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">
                Role
              </label>
              <select
                defaultValue="Admin"
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-transparent dark:text-slate-400 text-slate-700 focus:outline-none"
              >
                <option>Admin</option>
                <option>Editor</option>
                <option>Viewer</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">
                Access Level
              </label>
              <select
                defaultValue="Full"
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-transparent dark:text-slate-400 text-slate-700 focus:outline-none"
              >
                <option>Full</option>
                <option>Limited</option>
                <option>Restricted</option>
              </select>
            </div>
            <div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Update Permissions
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <AdminLayout>
      <div className="p-1 sm:p-6 min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-slate-200 mb-6">
          Admin Settings
        </h1>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["Account", "Security", "System", "Permissions"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center justify-center px-6 py-2 rounded-lg text-sm font-medium transition w-full sm:w-auto ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 dark:bg-slate-700 dark:text-slate-200"
              }`}
            >
              {tab === "Account" && <User className="w-5 h-5 mr-2" />}
              {tab === "Security" && <Lock className="w-5 h-5 mr-2" />}
              {tab === "System" && <Settings className="w-5 h-5 mr-2" />}
              {tab === "Permissions" && <ShieldCheck className="w-5 h-5 mr-2" />}
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-slate-950 shadow-lg rounded-lg p-6">
          {renderContent()}
        </div>
      </div>
    </AdminLayout>
  );
}
