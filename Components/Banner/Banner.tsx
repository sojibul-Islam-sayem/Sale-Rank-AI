import React from 'react'

const Banner: React.FC = () => {
    return (
        <div className='max-w-[1440px] md:mt-28 sm:mt-7 mx-auto flex  lg:flex-row flex-col justify-between'>
            <div>
                <h1 className='font-manrope mb-4 md:text-[80px] text-5xl text-black font-medium'>Your AI- <br />Powered <br />Sales Coach</h1>
                <div className='flex mb-7 md:flex-row flex-col items-center justify-between'>
                    <img src="/robot.png" alt="Robot" />
                    <p className='max-w-[346px] font-manrope md:text-[20px] text-[14px] font-medium text-[#05131DB2]'>Get real-time coaching, script suggestions, and deal-closing strategies powered by advanced AI technology.</p>
                </div>
                <div className='flex md:flex-row flex-col items-center justify-between'>
                    <div className='flex items-center space-x-8'>
                        <img className='bg-white p-4 rounded-2xl drop-shadow-md' src="/backup_table.png" alt="Backup Table" />
                        <div className='font-manrope '>
                            <h3 className='font-semibold md:text-[40px] text-[25px] text-[#05131D]'>2000+</h3>
                            <p className='md:text-[20px] text-[14px] font-medium text-[#05131DB2]'>Your protection</p>
                        </div>
                    </div>
                    <div className='flex items-center md:mt-0 mt-2 space-x-8'>
                        <img className='bg-white p-4 rounded-2xl drop-shadow-md' src="/atr.png" alt="atr" />
                        <div className='font-manrope '>
                            <h3 className='font-semibold md:text-[40px] text-[25px] text-[#05131D]'>7001+</h3>
                            <p className='md:text-[20px] text-[14px] font-medium text-[#05131DB2]'>Provide tailored</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex space-x-4 md:mt-7 relative items-center justify-center'>
                    <img src="/banner.png" alt="Banner 1" className='m-0' />
                    <div className='max-w-[465px] absolute -bottom-24 left-3 lg:-left-40 px-8 py-12 flex flex-col space-y-7 bg-white rounded-3xl'>
                        <div className='flex items-center justify-between'>
                            <p className='font-manrope md:text-[50px] text-[30px] font-semibold text-[#00245F]'>721+</p>
                            <p className='font-manrope md:text-[50px] text-[30px] font-semibold text-[#00245F]'>1000+</p>
                        </div>
                        <h3 className='font-manrope md:text-[28px] text-[20px] font-semibold text-[#05131D] '>Growth is our priority.</h3>
                        <p className='font-manrope font-medium md:text-base text-[14px] text-[#05131DB2]'>As a full-service business agency, we specialize in helping companies of all sizes optimize their operations</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;