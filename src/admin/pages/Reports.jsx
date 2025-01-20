import { useState } from "react";
import { Search, Filter, Trash2, Eye } from "lucide-react";
import AdminLayout from '../components/AdminLayout'

export default function AdminReportsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy report data
  const reports = [
    {
      id: 1,
      reportedBy: "John Doe",
      reportedAgainst: "Jane Smith",
      type: "Spam",
      date: "2024-12-24",
      status: "Pending",
    },
    {
      id: 2,
      reportedBy: "Alice Green",
      reportedAgainst: "Bob White",
      type: "Harassment",
      date: "2024-12-23",
      status: "Resolved",
    },
    // Add more dummy reports as needed
  ];

  const filteredReports = reports.filter((report) =>
    report.reportedBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
        <div className="p-6 min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-slate-200 mb-6">
            Admin Reports
        </h1>

        {/* Filters and Actions */}
        <div className="flex items-center justify-between mb-6">
            <div className="relative">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by reporter..."
                    className="w-72 px-4 py-2 border bg-transparent border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute top-2.5 right-3 w-5 h-5 text-gray-400" />
            </div>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <Filter className="w-4 h-4 mr-2" />
            Filter
            </button>
        </div>

        {/* Reports Table */}
        <div className="bg-white dark:bg-slate-900 shadow-lg rounded-lg">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-200">
                    <th className="px-4 py-3">Reported By</th>
                    <th className="px-4 py-3">Reported Against</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Status</th>
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

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
            <button className="px-4 py-2 bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-slate-200 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition">
            Previous
            </button>
            <span className="text-gray-600 dark:text-slate-400">Page 1 of 5</span>
            <button className="px-4 py-2 bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-slate-200 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition">
            Next
            </button>
        </div>
        </div>
    </AdminLayout>
  );
}
