import {Grammer, ABC, Personal, Ai} from '../assets/images/exports'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" px-4 mt-16 ">
      
      
      {/* Hero Section */}
      <div className=" bg-[url('/src/assets/images/1691055810.png')] bg-center bg-cover mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 text-center lg:pt-32">
          

          <h1 className="mx-auto max-w-5xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
              <span className="inline-block">Master
                  <span className="relative whitespace-nowrap text-blue-600">
                  <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                  <span className="relative">Languages</span></span>
              </span>
              <span className="inline-block">with AI</span>
          </h1>

          <p className="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
              <span className="inline-block">Discover the future of language learning. With AI-powered tools, you can improve grammar, expand vocabulary, and enjoy personalized lessons—all at your fingertips.</span>
          </p>

          <div className="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
              <Link to={"signup"} className="group flex items-center justify-center rounded-full py-3 px-12 text-sm font-semibold bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 focus-visible:outline-slate-900" >
                  <span className="ml-3">Get Started</span>
              </Link>
              <div className="relative flex flex-1 flex-col items-stretch sm:flex-none" data-headlessui-state="">
                  <Link to={'/try'} className="group inline-flex ring-1 items-center justify-center rounded-full py-3 px-12 text-sm focus:outline-none ring-slate-300 text-slate-700 hover:text-slate-900 hover:ring-slate-400 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right" type="button">
                     <span className="ml-3">Try Now</span>
                  </Link>
              </div>
          </div>

      </div>



      {/* why section */}
      <div className="relative bg-white py-16 px-6 md:px-12 lg:px-20 mb-16 rounded-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Why Choose AI Language Tutor?
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
          Empower yourself with cutting-edge AI technology designed to take your language skills to the next level. 
          Discover why millions trust us for their learning journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Icon + Text Block */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full mb-4 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Advanced AI Tools
            </h3>
            <p className="text-gray-600">
              Experience the power of advanced algorithms for real-time grammar corrections and adaptive learning.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full mb-4 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a8.003 8.003 0 01-7.071 7.071M5 11a8.003 8.003 0 017.071-7.071"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Personalized Learning
            </h3>
            <p className="text-gray-600">
              Tailored lessons that adapt to your level, goals, and preferences, ensuring the best learning experience.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-green-500 text-white rounded-full mb-4 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h11M9 21V3"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Community Support
            </h3>
            <p className="text-gray-600">
              Join a vibrant community of learners and gain insights from peers and experts.
            </p>
          </div>
        </div>
      </div>


      {/* Banner Section */}
      <div className="bg-blue-600 text-white text-center py-10 mb-16 relative -z-10">
        <div
          className="absolute inset-0 bg-opacity-10 bg-texture-pattern mix-blend-overlay"
          style={{
            backgroundImage: `url("https://www.transparenttextures.com/patterns/diamond-upholstery.png")`,
          }}
        ></div>
        <h2 className="text-4xl font-bold relative z-10">Ready to <span className="relative whitespace-nowrap text-white">
                  <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                  <span className="relative">Transform</span></span> Your Skills?</h2>
        <p className="text-lg mt-4 relative z-10">
          Take the first step in your language-learning journey with state-of-the-art AI tools.
        </p>
        <button className="mt-6 bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 relative z-10">
          Explore Features
        </button>
      </div>


          {/* Image Section */}
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-blue-50 to-white py-2 md:py-16 px-2 sm:px-6 md:px-12 lg:px-20 rounded-lg shadow-md my-16">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src={ABC}
            alt="A student learning with AI tools"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Learn Smarter, Not Harder
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Revolutionize the way you learn with cutting-edge AI technology. Get
            real-time feedback on your writing, improve pronunciation with speech
            analysis, and track your progress effortlessly. Whether you&apos;re a
            beginner or looking to refine advanced skills, our tools are tailored
            to your needs.
          </p>
          <button className="my-4 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 shadow">
            Start Learning Now
          </button>
        </div>
      </div>


      {/* Captivating Intro Section */}
      <div className=" text-slate-950 py-10 px-3 md:px-12 lg:px-20 rounded-lg mb-16">
        <h1 className=" text-4xl font-bold text-center mb-6 leading-tight">
          Break <span className="relative whitespace-nowrap text-blue-600">
                  <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                  <span className="relative">Barriers,</span></span> Speak Fluently
        </h1>
        <p className="text-lg md:text-xl text-center max-w-4xl mx-auto">
          Imagine a world where language is no longer a limitation. With our cutting-edge AI tools, you can learn, practice, and master any language faster than ever before. 
          It&apos;s not just learning—it&apos;s empowerment.
        </p>
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-blue-700 transform hover:scale-105 transition duration-300">
            Join the Revolution
          </button>
        </div>
      </div>


      {/* Complex Text and Checkbox Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-10 px-3 sm:px-3 md:px-12 lg:px-20 rounded-lg mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 leading-snug mb-4">
              Unlock Language Mastery with Advanced AI
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Explore a revolutionary way to learn languages, tailored specifically for you. From pronunciation to grammar, our platform is designed to bring out the best in your language-learning journey.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                Personalized lesson plans based on your goals.
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                Real-time feedback on pronunciation and grammar.
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                Progress tracking with detailed analytics.
              </li>
            </ul>
          </div>

          {/* Checkbox Section */}
          <div className="bg-white p-3 md:p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Select the features you&apos;re excited to explore:
            </p>
            <form className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                />
                <span className="ml-3 text-gray-800">Grammar Assistance</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-green-600 rounded focus:ring focus:ring-green-300 focus:ring-opacity-50"
                />
                <span className="ml-3 text-gray-800">Speech Analysis</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                />
                <span className="ml-3 text-gray-800">Vocabulary Expansion</span>
              </label>
            </form>
            <button className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
              Proceed to Registration
            </button>
          </div>
        </div>
      </div>


      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 via-white to-gray-50 p-3 md:p-8 rounded-xl">
        {/* Grammar Perfection Section */}
        <div className="text-center w-full p-6 bg-gradient-to-r from-blue-50 via-white to-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-200">
            <span className="text-3xl text-blue-800 font-extrabold">G</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-900">
            Grammar Perfection
          </h2>
          <p className="text-gray-700">
            Instantly improve your writing with cutting-edge AI grammar tools.
          </p>
        </div>

        {/* Vocabulary Booster Section */}
        <div className="text-center p-6 bg-gradient-to-r from-green-50 via-white to-green-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-200">
            <span className="text-3xl text-green-800 font-extrabold">V</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-green-900">
            Vocabulary Booster
          </h2>
          <p className="text-gray-700">
            Learn new words daily and expand your linguistic horizons.
          </p>
        </div>

        {/* Personalized Lessons Section */}
        <div className="text-center p-6 bg-gradient-to-r from-blue-50 via-white to-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-200">
            <span className="text-3xl text-blue-800 font-extrabold">P</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-900">
            Personalized Lessons
          </h2>
          <p className="text-gray-700">
            Enjoy tailored lessons based on your goals and proficiency.
          </p>
        </div>
      </div>


      {/* AI to Human-Like Text Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-12 px-2 sm:px-6 md:px-12 lg:px-20 rounded-lg shadow-lg mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 leading-snug mb-4">
              Transform AI-Generated Text into Human-Like Content
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Take AI’s precision and enhance it with a human touch. Our platform helps you create natural, engaging, and relatable content that resonates with your audience.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                Simplify jargon into conversational language.
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-yellow-500 rounded-full mr-3"></span>
                Infuse creativity and emotion into structured outputs.
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                Customize tone and style for any audience.
              </li>
            </ul>
          </div>

          {/* Interactive Card Section */}
          <div className="bg-white p-5 sm:p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              What Makes Text Human-Like?
            </h3>
            <div className="space-y-6">
              {/* First Card */}
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Personalization</h4>
                  <p className="text-gray-600">
                    Adapt content to reflect your audience’s unique preferences and values.
                  </p>
                </div>
              </div>
              {/* Second Card */}
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 flex items-center justify-center bg-yellow-500 text-white rounded-full font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Emotion</h4>
                  <p className="text-gray-600">
                    Add emotional depth to connect with readers on a personal level.
                  </p>
                </div>
              </div>
              {/* Third Card */}
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 flex items-center justify-center bg-green-500 text-white rounded-full font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Creativity</h4>
                  <p className="text-gray-600">
                    Go beyond facts—spark imagination and curiosity with compelling narratives.
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>


      {/* call to action */}
      <div className="py-16 px-6 md:px-12 lg:px-20 text-gray-800">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-slate-900">
            AI-Powered Language Learning
          </h2>
          <p className="text-lg leading-relaxed">
            Discover the tools and techniques used by thousands of learners to elevate their skills and reach their goals. Whether you&apos;re a beginner or a pro, our AI-driven platform adapts to your needs.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Custom-tailored lessons to match your pace and preferences.</li>
            <li>Real-time grammar correction and vocabulary enhancements.</li>
            <li>Step-by-step guidance with progress tracking.</li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-200">
              Start Learning
            </button>
            <button className="bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-300 transition duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>

      
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Resources to Boost Your Learning
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={Grammer}
              alt="Resource 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Master Common Phrases
              </h3>
              <p className="text-gray-600 mt-2">
                A guide to essential phrases to use in everyday conversations.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Read More →
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={Personal}
              alt="Resource 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Vocabulary for Beginners
              </h3>
              <p className="text-gray-600 mt-2">
                Tips and tricks to learn 50 new words every week effectively.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Read More →
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={Ai}
              alt="Resource 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                AI in Language Learning
              </h3>
              <p className="text-gray-600 mt-2">
                How AI is shaping the way we learn and communicate globally.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


