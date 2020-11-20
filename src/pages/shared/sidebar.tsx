import React from "react";
export function Sidebar() {
  return (
    <div className="flex w-full max-w-xs p-4 bg-white">
      <ul className="flex flex-col w-full">
        <li className="my-px">
          <a href="#" className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 bg-gray-100">
            <span className="flex items-center justify-center text-lg text-gray-400">
              <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </span>
            <span className="ml-3">Introduction</span>
          </a>
        </li>
        <li className="my-px">
          <span className="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">Components</span>
        </li>
        <li className="my-px">
          <a href="#" className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
            <span className="flex items-center justify-center text-lg text-gray-400">
              <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </span>
            <span className="ml-3">Manager</span>
          </a>
        </li>
        <li className="my-px">
          <a href="#" className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
            <span className="flex items-center justify-center text-lg text-gray-400">
              <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </span>
            <span className="ml-3">Tasks</span>
          </a>
        </li>
        <li className="my-px">
          <a href="#" className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
            <span className="flex items-center justify-center text-lg text-gray-400">
              <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
            <span className="ml-3">Clients</span>
            <span className="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">1k</span>
          </a>
        </li>
        <li className="my-px">
          <a href="#" className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
            <span className="flex items-center justify-center text-lg text-green-400">
              <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <span className="ml-3">Add new</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
