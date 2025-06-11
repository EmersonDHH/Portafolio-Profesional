import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex flex-col items-center justify-center">
      <div className="flex space-x-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-24 h-24 rounded-full shadow-xl" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-24 h-24 rounded-full shadow-xl" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl font-extrabold text-white mt-8 text-shadow-md">
        Vite + React <span className="text-yellow-400">App</span>
      </h1>
      <div className="card mt-6 p-8 bg-white bg-opacity-80 rounded-3xl shadow-2xl w-96">
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-full transform hover:scale-110 transition-all duration-300"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-700">
          Edit <code className="font-mono text-sm text-blue-600">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-6 text-white text-lg font-semibold">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
