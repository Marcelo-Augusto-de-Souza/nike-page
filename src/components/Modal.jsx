import React from 'react'
import { star } from '../assets/icons'

const Modal = ({isvisible, onClose, shoeImg, nameShoes, priceShoes}) => {
    if(!isvisible) return null
  
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-20 flex justify-center items-center'
        onClick={()=>onClose()}>
        <div className='lg:w-[600px] md:w-[400px] flex flex-col'>
            <button className='text-white text-xl place-self-end'
            onClick={() => onClose()}>X</button>
            <div className='bg-white p-3 rounded-xl flex flex-col dark:bg-slate-800 dark:text-slate-300 shadow-md'>
                <img
                    src={shoeImg}
                    alt="shoe card"
                    className='bg-card bg-center bg-cover w-full rounded-xl'
                />
                <div className='mt-8 flex justify-start gap-2.5'>
                    <img src={star} alt='rating icon' width={24} height={24} />
                    <p className='font-montserrat text-xl leading-normal text-slate-gray dark:text-slate-300'>
                        (4.5)
                    </p>
                </div>
                <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin dark:text-white'>
                    {nameShoes}
                </h3>
                <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
                    {priceShoes}
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default Modal