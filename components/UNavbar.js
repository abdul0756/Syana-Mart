import React from 'react'
import Image from 'next/image'
import profile from '../public/profile.svg'
const UNavbar = (params) => {
    return (
        <>
            <div className="bg-green-800 py-3 flex justify-between items-center text-green-50 shadow-green-600 shadow-2xl sticky top-0 z-50 transition-colors duration-300">
                <div className='flex items-center gap-2'>
                    <button href='/profile' className='flex items-center rounded-full 
                    
                                gap-2 px-4 py-1.5 ml-3 text-sm     
                                sm:px-5 sm:py-2 sm:text-base 
                                md:px-6 md:py-2 md:text-base font-semibold shadow-md
                              text-green-100 bg-green-600 
                              hover:bg-green-500 hover:text-white 
                                transition-all duration-300 
                                transform hover:scale-105 
                                focus:outline-none hover:cursor-pointer'
                                onClick={params.profile}
                                >
                        <span className='text-lg'>Profile</span>
                        <Image src={profile} width={20} height={20} alt="profile" />
                    </button>
                </div>
                <div>
                    <button
                        className="inline-flex items-center 
                                px-4 py-1.5 mr-3 text-sm     
                                sm:px-5 sm:py-2 sm:text-base 
                                md:px-6 md:py-2 md:text-base 
                                font-semibold rounded-full shadow-md 
                             text-red-100 bg-red-600 
                            hover:bg-red-500 hover:text-white 
                                transition-all duration-300 
                                transform hover:scale-105 
                                focus:outline-none hover:cursor-pointer "
                        onClick={params.click}
                    >
                        Logout

                    </button>
                </div>
            </div>
        </>
    )
}

export default UNavbar