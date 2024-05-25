import * as React from 'react';
// import { Link } from 'react-router-dom';

export default function Form(){
    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'> 
        <h1 className='text-5xl font-semibold'>Welcome!</h1>
        <p className='font-medium text-lg text-gray-500 mt-4'>Please Enter your details.</p>
        <div className='mt-8'>
            <div>
                <label className='text-lg font-medium'>Username</label>
                <input 
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1' 
                placeholder='Enter your Username'
                />
            </div>
        </div>
        
        <div>
            <div>
                <label className='text-lg font-medium'>Password</label>
                <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1' 
                placeholder='Enter your Password' 
                type='password'/>
            </div>
        </div>
        
        <div className='mt-8 flex justify-between items-center'> 
            <div>
                <input id='remember' placeholder='' type='checkbox'/>
                <label className='ml-2 font-medium text-base' for='remember'>Remember Login</label>
            </div>
            
        </div>
        <div className='mt-8 flex flex-col'>
                <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-semibold'>
                    Sign In
                </button>
        </div>

    </div>
    )
}