import {Reading} from '../assets/images/exports';
import {Link} from 'react-router-dom'

const Login = () =>{
    return(
        
        <div className="h-[calc(100vh-4rem)] lg:h-auto mt-16 overflow-hidden bg-white dark:bg-slate-950 lg:bg-gray-100 dark:lg:bg-slate-900 text-gray-900 dark:text-gray-300 flex justify-center items-center">
            <div className=" lg:w-full max-w-screen-lg bg-slate-50 sm:rounded flex">
                {/* Form Section */}
                <div className="w-fit bg-white dark:bg-slate-950 lg:w-1/2 shadow-lg p-6 sm:p-12 flex flex-col">
                    <div className="mt-0 lg:mt-8 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-bold">Login</h1>
                        <div className="w-full flex-1 mt-6">
                        {/* Social Signup Buttons */}
                        <div className="flex flex-col items-center">
                            <button className="w-full max-w-xs font-bold shadow-sm py-3 bg-blue-100 dark:bg-blue-900 rounded text-gray-800 dark:text-gray-300 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                <div className="bg-white dark:bg-slate-950 p-2 rounded-full">
                                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                                        <path
                                            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                            fill="#4285f4"
                                        />
                                        <path
                                            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                            fill="#34a853"
                                        />
                                        <path
                                            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                            fill="#fbbc04"
                                        />
                                        <path
                                            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                            fill="#ea4335"
                                        />
                                    </svg>
                                </div>
                                <span className="ml-4">Continue with Google</span>
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="my-8 border-b border-slate-600 text-center">
                            <div className="px-2 inline-block text-sm text-gray-600 dark:text-gray-400 tracking-wide font-medium bg-white dark:bg-slate-950 transform translate-y-1/2">
                            Or login with e-mail
                            </div>
                        </div>

                        {/* Form */}
                        <div className="mx-auto max-w-xs">
                            <input className="w-full px-8 py-4 rounded font-medium bg-gray-100 border dark:border-slate-700 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white dark:bg-slate-950" type="email" placeholder="Email" />
                            <input className="w-full px-8 py-4 rounded font-medium bg-gray-100 border dark:border-slate-700 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 dark:bg-slate-950" type="password" placeholder="Password" />
                            <button className="mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                <span className="ml-3">Login</span>
                            </button>
                        </div>
                        </div>
                        {/* <Link>Don&apos;t have an account yet?</Link> */}
                        <Link to={"/signup"} className='mt-4 font-normal text-sm text-slate-500'>Don&apos;t have an account yet? <strong className='text-blue-600'>Sign up Here</strong></Link>
                        
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-1/2 bg-blue-100 hidden lg:flex items-center justify-center">
                <img src={Reading} alt="Learning" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>

    )
}

export default Login;