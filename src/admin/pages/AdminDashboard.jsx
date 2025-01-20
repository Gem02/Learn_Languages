import AdminLayout from '../components/AdminLayout'

const AdminDashboard = () =>{

    return (
      <AdminLayout>
        <main className="p space-y-6">
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
              <div className="mr-6">
                <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-slate-200">Dashboard</h1>
                <p className="text-gray-600  dark:text-slate-400 ml-0.5">My Language Tutor Site</p>
              </div>
              <div className="flex flex-wrap gap-2 items-start -mb-3">
                <button className="inline-flex px-5 py-3 text-blue-600 hover:text-slate-100 focus:text-blue-700 hover:bg-blue-900 focus:bg-blue-800 border border-blue-600 rounded mb-3">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Manage Student
                </button>
                <button className="inline-flex px-5 py-3 text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 rounded mb-3">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Create new student
                </button>
              </div>
            </div>
  
            {/* top numbers bars */}
            <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              
              <div className="flex items-center p-8 bg-white dark:bg-slate-950 shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold dark:text-slate-200">62</span>
                  <span className="block text-gray-500 dark:text-slate-300">Students</span>
                </div>
              </div>
  
              <div className="flex items-center p-8 bg-white dark:bg-slate-950 shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold dark:text-slate-200">6.8</span>
                  <span className="block text-gray-500 dark:text-slate-300">Average mark</span>
                </div>
              </div>
  
              <div className="flex items-center p-8 bg-white dark:bg-slate-950 shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
                <div>
                  <span className="inline-block text-2xl font-bold dark:text-slate-200">9</span>
                  <span className="inline-block text-xl text-gray-500 dark:text-slate-300 font-semibold">(14%)</span>
                  <span className="block text-gray-500 dark:text-slate-300">Bad performance</span>
                </div>
              </div>
  
              <div className="flex items-center p-8 bg-white dark:bg-slate-950 shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold dark:text-slate-200">83%</span>
                  <span className="block text-gray-500 dark:text-slate-300">Finished homeworks</span>
                </div>
             
              </div>
              
            </section>
  
            <section className="">
              <div className='flex flex-col md:flex-row gap-2 w-full mb-3'>

                <div className=" bg-white dark:bg-slate-950 shadow rounded w-full md:w-6/12">
                  <div className="px-6 py-5 font-semibold border-b border-gray-100 text-gray-400 dark:text-slate-300">The number of new students registering</div>
                  <div className="p-4 flex-grow">
                    <div className="flex items-center justify-center h-full px-4 py-16 text-3xl font-semibold bg-gray-100 dark:bg-slate-950 border-2 border-gray-200 border-dashed rounded-md"><p className='text-gray-400 dark:text-slate-300'>Chart</p></div>
                  </div>
                </div>

                <div className=" bg-white dark:bg-slate-950 shadow rounded w-full md:w-6/12">
                  <div className="flex items-center justify-between text-gray-400 dark:text-slate-300 px-6 py-5 font-semibold border-b border-gray-100">
                    <span>Students by average mark</span>
                    <button type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white dark:bg-slate-900 text-sm leading-5 font-medium text-gray-500 dark:text-slate-300 hover:text-gray-600 dark:text-slate-400" id="options-menu" aria-haspopup="true" aria-expanded="true">
                      Descending
                      <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {/* Refer here for full dropdown menu code: https://tailwindui.com/components/application-ui/elements/dropdowns  */}
                  </div>
                  <div className="overflow-y-auto max-h-[13rem]">
                    <ul className="p-6 space-y-6">
                      <li className="flex items-center">
                        <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                          <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="Annette Watson profile" />
                        </div>
                        <span className="text-gray-600 dark:text-slate-400">Annette Watson</span>
                        <span className="ml-auto font-semibold">9.3</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                          <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="Calvin Steward profile" />
                        </div>
                        <span className="text-gray-600 dark:text-slate-400">Calvin Steward</span>
                        <span className="ml-auto font-semibold">8.9</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                          <img src="https://randomuser.me/api/portraits/men/80.jpg" alt="Ralph Richards profile" />
                        </div>
                        <span className="text-gray-600 dark:text-slate-400">Ralph Richards</span>
                        <span className="ml-auto font-semibold">8.7</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                          <img src="https://randomuser.me/api/portraits/men/79.jpg" alt="Bernard Murphy profile" />
                        </div>
                        <span className="text-gray-600 dark:text-slate-400">Bernard Murphy</span>
                        <span className="ml-auto font-semibold">8.2</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                          <img src="https://randomuser.me/api/portraits/women/78.jpg" alt="Arlene Robertson profile" />
                        </div>
                        <span className="text-gray-600 dark:text-slate-400">Arlene Robertson</span>
                        <span className="ml-auto font-semibold">8.2</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                          <img src="https://randomuser.me/api/portraits/women/77.jpg" alt="Jane Lane profile" />
                        </div>
                        <span className="text-gray-600 dark:text-slate-400">Jane Lane</span>
                        <span className="ml-auto font-semibold">8.1</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                          <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Pat Mckinney profile" />
                        </div>
                        <span className="text-gray-600 dark:text-slate-400">Pat Mckinney</span>
                        <span className="ml-auto font-semibold">7.9</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Norman Walters profile" />
                        </div>
                        <span className="text-gray-600 dark:text-slate-400">Norman Walters</span>
                        <span className="ml-auto font-semibold">7.7</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className='my-10'>
                <h1 className='text-3xl mb-1 font-bold text-slate-700 dark:text-slate-300'>Languages Ranking</h1>
                <p className='text-slate-700 mb-5 dark:text-slate-300'>These languages are ranked base on the number of users</p>
                <div className="block w-full overflow-x-auto max-w-2xl border">
                <table className="items-center w-full bg-white dark:bg-slate-950 border-collapse">
                  <thead>
                    <tr>
                      <th
                        className="px-4 bg-gray-50 dark:bg-blue-600 dark:text-slate-200 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                        Top Languages</th>
                      <th
                        className="px-4 bg-gray-50 dark:bg-blue-600 dark:text-slate-200 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                        Users</th>
                      <th
                        className="px-4 bg-gray-50 dark:bg-blue-600 dark:text-slate-200 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                    <tr className="text-gray-500 dark:text-slate-300">
                      <th className="px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left border-b dark:border-slate-800">English</th>
                      <td className="px-4 align-middle text-xs font-medium text-gray-900 dark:text-slate-200 whitespace-nowrap p-4 border-b dark:border-slate-800">5,649</td>
                      <td className="px-4 align-middle text-xs whitespace-nowrap p-4 border-b dark:border-slate-800">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">30%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-sm h-2">
                              <div className="bg-cyan-600 h-2 rounded-sm w-[30%]"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr className="text-gray-500 dark:text-slate-300">
                      <th className="px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left border-b dark:border-slate-800">French</th>
                      <td className="px-4 align-middle text-xs font-medium text-gray-900 dark:text-slate-200 whitespace-nowrap p-4 border-b dark:border-slate-800">4,025</td>
                      <td className="px-4 align-middle text-xs whitespace-nowrap p-4 border-b dark:border-slate-800">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">24%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-sm h-2">
                              <div className="bg-orange-300 h-2 rounded-sm w-[24%]"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr className="text-gray-500 dark:text-slate-300">
                      <th className="px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left border-b dark:border-slate-800">Hausa</th>
                      <td className="px-4 align-middle text-xs font-medium text-gray-900 dark:text-slate-200 whitespace-nowrap p-4 border-b dark:border-slate-800">3,105</td>
                      <td className="px-4 align-middle text-xs whitespace-nowrap p-4 border-b dark:border-slate-800">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">18%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-sm h-2">
                              <div className="bg-teal-400 h-2 rounded-sm w-[18%]"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr className="text-gray-500 dark:text-slate-300">
                      <th className="px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left border-b dark:border-slate-800">Spanish</th>
                      <td className="px-4 align-middle text-xs font-medium text-gray-900 dark:text-slate-200 whitespace-nowrap p-4 border-b dark:border-slate-800">1,251</td>
                      <td className="px-4 align-middle text-xs whitespace-nowrap p-4 border-b dark:border-slate-800">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">12%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-sm h-2">
                              <div className="bg-pink-600 h-2 rounded-sm w-[12%]"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr className="text-gray-500 dark:text-slate-300">
                      <th className="px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left border-b dark:border-slate-800">Other</th>
                      <td className="px-4 align-middle text-xs font-medium text-gray-900 dark:text-slate-200 whitespace-nowrap p-4 border-b dark:border-slate-800">734</td>
                      <td className="px-4 align-middle text-xs whitespace-nowrap p-4 border-b dark:border-slate-800">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">9%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-sm h-2">
                              <div className="bg-indigo-600 h-2 rounded-sm w-[9%]"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                </div>
              </div>
            
            </section>
          </main>
      </AdminLayout>
    )
  }
  
  export default AdminDashboard;