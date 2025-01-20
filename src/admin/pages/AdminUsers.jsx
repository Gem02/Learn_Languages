import { useState } from "react";
import { Search, Trash2, Eye, PlusCircle } from "lucide-react";
import AdminLayout from '../components/AdminLayout'

export default function AdminUserPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy report data
  const reports = [
    {
      id: 1,
      reportedBy: "Joseph Gowon",
      reportedAgainst: "20992776",
      type: "Spanish",
      date: "Average",
      status: "Pending",
    },
    {
      id: 2,
      reportedBy: "Series Patrick",
      reportedAgainst: "200928",
      type: "Ngas lol",
      date: "Very Bad",
      status: "Resolved",
    },
    // Add more dummy reports as needed
  ];

  const filteredReports = reports.filter((report) =>
    report.reportedBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
        <div className="p-2 sm:p-6 min-h-screen">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-slate-200 mb-6">
              Users
          </h1>

            {/* Filters and Actions */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              
              <div className="flex items-center border bg-transparent border-gray-300 dark:border-slate-700 rounded-lg w-72">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search a user..."
                  className="flex-grow px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                />
                <Search className="w-5 h-5 text-gray-400 mx-3" />
              </div>


                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  New User
                </button>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-slate-900 shadow-lg pb-2 rounded-lg overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-max">
                <thead>
                  <tr className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-200">
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">User ID</th>
                    <th className="px-4 py-3">Main Language</th>
                    <th className="px-4 py-3">Performance</th>
                    <th className="px-4 py-3">Level</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredReports.map((report) => (
                    <tr
                      key={report.id}
                      className="border-t dark:border-slate-700 hover:bg-gray-200 bg-slate-100 dark:bg-slate-950 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      <td className="px-4 py-3">{report.reportedBy}</td>
                      <td className="px-4 py-3">{report.reportedAgainst}</td>
                      <td className="px-4 py-3">{report.type}</td>
                      <td className="px-4 py-3">{report.date}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded ${
                            report.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {report.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 flex items-center space-x-4">
                        <button
                          title="View Details"
                          className="text-blue-600 hover:text-blue-800 transition"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <button
                          title="Delete Report"
                          className="text-red-600 hover:text-red-800 transition"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Responsive Pagination */}
            <div className="flex items-center p-3">
              <button
                  className="h-10 w-10 bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1
              </button>
              <button
                  className="h-10 w-10 font-semibold dark:text-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2
              </button>
              <button
                  className="h-10 w-10 font-semibold dark:text-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">3
              </button>
              <button
                  className="h-10 w-10 font-semibold dark:text-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">4
              </button>
              <button
                  className="h-10 w-10 font-semibold dark:text-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">
                  Next
              </button>
          </div>


           

        </div>
    </AdminLayout>
  );
}
