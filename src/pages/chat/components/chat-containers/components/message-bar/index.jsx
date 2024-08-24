import React, { useState } from 'react'
import {GrAttachment} from "react-icons/gr"

const MessageBar = () => {
    const [message, setMessage] = useState("");
    console.log(message);
  return (
    <div className='h-[10vh[ bg-[#1c1d25] flex justify-center items-center px-8 mb-5 gap-6'>
        <div className="flex-1 flex bg-[#282b33] rounded-md items-center gap-5 pr-5">
            <input type="text" className='flex-1 p-5 bg-transparent rounded-md focus:border-none focus:outline-none'
            placeholder='Enter Message' 
            value={message}
            onChange={(e) =>{setMessage(e.target.value)}}/>
            <button className='text-neutral-500 focus:border-none focus:outline-none
             focus:text-white duration-300 transition-all'>
                < GrAttachment/>
            </button>
        </div>
    </div>
  )
}

export default MessageBar
