import React from 'react'
import Image from 'next/image'
import Status from '@/components/ui/common/status'

const page = () => {
  return (
    <div className='flex-1 flex flex-col justify-start gap-18 h-full'>
      <div className='flex flex-row items-center justify-between gap-4 w-fit'>
        <Image src={"/sky-coin.png"} alt='' width={60} height={60}></Image>
        <div className='flex flex-col gap-2'>
            <h3 className='text-3xl'>Sky Frontier Foundation</h3>
            <Status status='Active'/>
        </div>
      </div>
      <div className='w-full h-120 bg-blue-300 rounded-2xl shadow-2xs'>

      </div>
    </div>
  )
}

export default page
