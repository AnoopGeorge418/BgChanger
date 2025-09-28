import { useState } from 'react'

function App() {

  const [color, setColor] = useState("olive");

  // function changeColor(color) {
  //   setColor(color);
  // }

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor:  color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-5'>

        <div className='flex flex-wrap justify-center shadow-lg bg-red-500 px-3 py-2 rounded-2xl cursor-pointer  '>
          <button 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
            onClick={() => setColor("red")}
          >
            Red
          </button>
        </div>

        <div className='flex flex-wrap justify-center shadow-lg bg-green-800 px-3 py-2 rounded-2xl cursor-pointer'>
          <button 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={() => setColor("green")}
          >
            Green
          </button>
        </div>

        <div className='flex flex-wrap justify-center shadow-lg bg-blue-500 px-3 py-2 rounded-2xl cursor-pointer'>
          <button 
            className='outline-none px-4 py-1 rounded-full text-white  shadow-lg'
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
