import React from 'react'

const Footer = () => {
  return (
    <div>
      <div>
        <div className='border-t border-gray-300 py-10'>
          <div className='flex flex-col px-5 md:flex-row md:justify-between md:items-center text-center  md:text-left'>
            <div>
              <h2 className='text-gray-400 font-aileron'>© KEL.DEV 2025</h2>
            </div>

            <div className="flex gap-4 justify-center py-2 cursor-pointer ">
                <h2 className='text-gray-400 font-bold'>LinkedIn</h2>
                <h2 className='text-gray-400 font-bold'>Github</h2>
                <h2 className='text-gray-400 font-bold'>Facebook</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
