import React from 'react'

const taskalert = ({update, message}) => {

  return (
    <div className='w-[20rem] h-[15rem] absolute top-1/3 rounded-3xl left-1/2 flex flex-col ease-in-out shadow-lg shadow-gray-600 justify-center items-center bg-white px-5 py-2'>
        <div className='h-1/3 w-full flex justify-center items-center  '>
        <img className='h-full' src="/image.png" alt="" />
        </div>
        {message!=""?        <div className='h-1/3 w-full flex justify-center items-center'>{message}</div>:
                <div className='h-1/3 w-full flex justify-center items-center'>wait!</div>

}
        <div className='h-1/3 w-full flex justify-center items-center'>
        <button className='py-2 w-full rounded-lg text-white font-semibold bg-black cursor-pointer' onClick={update}>Back</button>
        </div>

    </div>
  )
}

export default taskalert