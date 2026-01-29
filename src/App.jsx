import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Counter App</h1>

        <p className="text-4xl font-semibold mb-6">{count}</p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            +
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            -
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
