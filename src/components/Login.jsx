'use client'

import { API_URL } from '@/config/apiUrl';
import { useState } from 'react'
import toast from 'react-hot-toast';

export const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    function handleChangeInput(event) {
        setLoginData({ ...loginData, [event.target.name]: event.target.value });
    }

    async function handleLogin() {
        const {email, password} = loginData;

        if (!email || !password) {
            toast.error('All field must be filled');
            return;
        }

        const res = await fetch('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(loginData)
        });

        if (res.status === 401 || res.status === 404 || res.status === 500) {
            const { errorMessage } = await res.json();
            toast.error(errorMessage);
            return;
        }

        const {data, message} = await res.json();
        localStorage.setItem('user', JSON.stringify(data));
        toast.success(message);

        window.location.replace(`${API_URL}/dashboard`);
    }

  return (
    <div className='bg-slate-100 py-4 flex h-screen justify-center items-center'>
        <div className='bg-white max-w-md w-full h-fit rounded-lg border-2 flex flex-col gap-4 px-6 py-4'>
            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-2xl'>Selamat datang👋</h1>
                <p>Silakan masuk ke akun Anda.</p>
            </div>
            <div className="flex flex-col gap-2">
                <label>Email</label>
                <input type='email' name='email' placeholder="name@gmail.com" onChange={handleChangeInput}></input>
            </div>
            <div className="flex flex-col gap-2">
                <label>Password</label>
                <input type='password' name='password' placeholder="Password" onChange={handleChangeInput}></input>
            </div>
            <button className='btn btn-primary text-base' onClick={handleLogin}>Masuk</button>
        </div>
    </div>
  )
}
