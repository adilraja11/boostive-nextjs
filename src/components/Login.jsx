import React from 'react'

export const Login = () => {
  return (
    <div className='bg-slate-100 py-4 flex h-screen justify-center items-center'>
        <div className='bg-white max-w-md w-full h-fit rounded-lg border-2 flex flex-col gap-4 px-6 py-4'>
            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-2xl'>Selamat datang👋</h1>
                <p>Silakan masuk ke akun Anda.</p>
            </div>
            <div className="flex flex-col gap-2">
                <label>Email</label>
                <input placeholder="name@gmail.com"></input>
            </div>
            <div className="flex flex-col gap-2">
                <label>Password</label>
                <input placeholder="Password"></input>
            </div>
            <button className='btn btn-primary text-base'>Masuk</button>
        </div>
    </div>
  )
}
