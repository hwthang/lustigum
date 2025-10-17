import React from 'react'
import Carousel from './Carousel'

function Main() {
  return (
    <div className='relative flex flex-col gap-4'>
      <div className='flex justify-center items-center mt-2'>
        <div className='flex flex-col flex-1 h-full gap-2'>
          <div className='border border-red-500 w-full'></div>
          <div className='border border-red-500 w-8/10'></div>
        </div>
        <p className='text-3xl font-bold text-red-500 px-8 font-normal-bold pt-2'>SẢN PHẨM MỚI NHẤT</p>
        <div className='flex flex-col flex-1 h-full gap-2 items-end'>
          <div className='border border-red-500 w-full'></div>
          <div className='border border-red-500 w-8/10'></div>
        </div>
      </div>
      <div className='w-full'><Carousel/></div>
      
    </div>
  )
}

export default Main