import React from "react";

const StatisticsContainer = () => {
  return (
    <section className=" rounded-lg     ">
      <div className="">
        <div className="flex items-center justify-between">
          <span className="font-bold text-sm text-indigo-600">Total Views</span>
          <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
            from start
          </span>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div>
            <svg
              className="w-12 h-12 p-2.5 bg-blue-400 bg-opacity-20 rounded-full text-blue-600 border border-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex items-end">
              <span className="text-2xl 2xl:text-3xl font-bold">8,141</span>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex items-center justify-between">
          <span className="font-bold text-sm text-green-600">
            Total Messages
          </span>
          <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
            from start
          </span>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div>
            <svg
              className="w-12 h-12 p-2.5 bg-green-400 bg-opacity-20 rounded-full text-green-600 border border-green-600"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              id="message"
            >
              <g>
                <path d="M24 7H8a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h1v4a1 1 0 0 0 1.61.79L16.77 23H24a3 3 0 0 0 3-3V10a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1h-7.57a1 1 0 0 0-.61.21L11 25v-3a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Z"></path>
                <path d="M11 14h6a1 1 0 0 0 0-2h-6a1 1 0 0 0 0 2zm10 2H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2z"></path>
              </g>
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex items-end">
              <span className="text-2xl 2xl:text-3xl font-bold">217</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl"> */}
        <div className="flex items-center justify-between">
          <span className="font-bold text-sm text-blue-600">Weekly views</span>
          <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
            7 days
          </span>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div>
            <svg
              className="w-12 h-12 p-2.5 bg-blue-400 bg-opacity-20 rounded-full text-blue-600 border border-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex items-end">
              <span className="text-2xl 2xl:text-3xl font-bold">54</span>
              <div className="flex items-center ml-2 mb-1">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  ></path>
                </svg>
                <span className="font-bold text-sm text-gray-500 ml-0.5">
                  7%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsContainer;
