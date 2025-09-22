import React from 'react'

const statusVariants = {
  "in progress": " border-yellow-500 bg-yellow-100 text-yellow-800",
  "active": "border-green-500 bg-green-100 text-green-800",
  "pending": "border-blue-500 bg-blue-100 text-blue-800",
  "cancelled": "border-red-500 bg-red-100 text-red-800",
}

const Status = ({status}: {status: string}) => {
  return (
    <div className={`w-fit h-fit flex items-center justify-center p-0.5 border rounded-md text-sm font-medium ${statusVariants[status.toLowerCase() as keyof typeof statusVariants]}`}>
      {status}
    </div>
  )
}

export default Status
