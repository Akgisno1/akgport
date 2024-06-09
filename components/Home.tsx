import React from 'react'
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className='relative w-[100vw] h-1/2  overflow-y-hidden'>
      {/* <div className="w-full h-[100vh]  z-10 absolute top-0 text-[30vw] border-2 bg-indigo-950 border-white font-oxo font-extrabold text-green-500 ">
            <div className="flex flex-row">
            <div className=" w-1/6 bg-indigo-950" ></div>
            <div className=" w-1/6 bg-indigo-950" ></div>
            <div className=" w-1/6 bg-indigo-950" ></div>
            <div className=" w-1/6 bg-indigo-950" ></div>
            <div className=" w-1/6 bg-indigo-950" ></div>
            <div className=" w-1/6 bg-indigo-950" ></div>
            </div>
            <div className="flex h-full justify-center items-center border-2 border-black"><p className="z-20 ">hello!</p></div>
            
      </div> */}
      <div id="home" className=' w-full   h-full flex flex-col z-0 '>
      <Navbar/>
      <div className='flex flex-row font-mono font-bold text-6xl my-auto '>
        <div className=' text-gray-400 flex flex-col space-y-8 px-8'>
          <div>My name is</div>
        <div>Anshul Kumar Godiwar</div>
        <div>and I am a Full Stack Developer.</div>
        </div></div><div></div></div>
        </div>
 
  )
};

export default Home;