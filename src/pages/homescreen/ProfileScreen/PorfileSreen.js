import React from 'react'
import { useSelector } from 'react-redux'
import {selectUser} from "../../../features/userSlice"
import Navbar from "../../../Components/Navbar/Navbar"
import { signOut } from 'firebase/auth'
import {auth} from "../../../Firebase" 
function PorfileSreen() {
  const user=useSelector(selectUser)
  const logout=()=>{
    signOut(auth)
  }
  return (
    <div className='h-[100vh] text-white'>
      <Navbar/>
     <div className='flex flex-col w-[50%] ml-auto mr-auto pt-[30%] md:pt-[10%] max-w-[800px]'>
      <h1 className='text-xl md:text-2xl font-semibold border-b-2 border-gray-600 mb-[20px]'>Edit Profile</h1>
      <div className='flex'>
        <img className='h-[50px] md:h-[100px]' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'/>
        <div className='text-white ml-[25px] flex-1'>
          <h2 className='bg-gray-700 p-[15px] text-lg pl-[20px]'>{user.email}</h2>
          <div className='mt-[20px]'>
            <h2 className='border-b-2 border-[#282c2d] pb-[10px]'>plans</h2>



            <button className='py-[10px] px-[20px] text-lg mt-[5%] w-full text-white bg-[#e50914] cursor-pointer border-none' onClick={logout}>Sign Out</button>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default PorfileSreen