import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo-removebg-preview.png'
import {MdEmail} from 'react-icons/md'
import {FaLock} from 'react-icons/fa'

const SignIn = () => {
    const history = useHistory();
    const [userCredentials, setUserCredentials] = useState({
        email : '',
        password:''
        })
    const [warnings,setWarnings] = useState({
        email: '',
        password: ''
    })

    const handleEmailChange = (e)=>{
        setUserCredentials(prev=>({
            ...prev,
            email : e.target.value
        }))
        
    }

    const handlePasswordChange = (e)=>{
        setUserCredentials(prev=>({
            ...prev,
            password : e.target.value
        }))
        
    }

    const handleButtonClick = () => {
        setWarnings({
            email : '',
            password : ''
        })
        if(userCredentials.email !== 'test@luxpmsoft.com'){
            setWarnings(prev=>({
                ...prev,
                email : 'Incorrect email address'
            }))
        } else if(userCredentials.password !== 'test1234!'){
            setWarnings(prev=>({
                ...prev,
                password : 'Incorrect password'
            }))
        } else{
          history.push('/home')
        }
    }

    return (
            <div className='w-full flex flex-col justify-center items-center' >
                <div className='w-4/5  sm:w-3/4 md:w-1/2 flex flex-col justify-center items-center py-10 space-y-14' >
                    <div className='w-full flex flex-col justify-center items-center space-y-8' >
                        <img src={Logo} alt='logo' width='200px' />
                        <span className='text-3xl font-normal ' >로그인</span>
                    </div>
                    <div className='inputs w-full flex flex-col justify-center items-center space-y-6' >
                        <div className='w-11/12 sm:w-3/4 md:w-1/2 flex flex-col justify-center items-center text-left' >
                            <label htmlFor='email' className='px-1 text-base w-full' >Email</label>
                            <section className='bg-transparent w-full border-b border-gray-1000 focus-within:border-gray-500 flex flex-row items-center text-gray-1000 focus-within:text-gray-500' >
                            <MdEmail className='w-6 h-5' />
                            <input name='email' type='email' className='w-9/12 text-sm px-1 py-2 focus:outline-none ' autoComplete='off' placeholder='sabahat@gmail.com'
                                onChange={handleEmailChange} value={userCredentials.email}
                            />
                            </section>
                            {warnings.email && <span className='text-red-500 tex-left w-full text-xs' >{warnings.email}</span>}
                        </div>
                        <div className='w-11/12 sm:w-3/4 md:w-1/2 flex flex-col justify-center items-center text-left' >
                            <label htmlFor='password' className='px-1 text-base w-full' >비밀번호</label>
                            <section className='bg-transparent w-full border-b border-gray-1000 focus-within:border-gray-500 flex flex-row items-center text-gray-1000 focus-within:text-gray-500' >
                            <FaLock className='w-6 h-5' />
                            <input name='password' type='password' className='tracking-widest text-2xl px-1 py-2 bg-transparent focus:outline-none' autoComplete='off' placeholder='*********'
                                onChange={handlePasswordChange} value={userCredentials.password}
                            />
                            </section>
                            {warnings.password && <span className='text-red-500 tex-left w-full text-xs' >{warnings.password}</span>}

                        </div>
                        <p className='w-11/12 sm:w-3/4 md:w-1/2 text-right text-sm font-bold cursor-pointer' >비밀번호 찾기</p>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center space-y-4 pb-10' >
                        <button className={`w-3/4 text-center text-white md:w-1/5 rounded-md py-4 bg-purple-850 cursor-pointer `}
                            onClick={handleButtonClick}
                        >로그인</button>
                        <Link to='/signup' className='w-3/4 text-center text-purple-850 md:w-3/5 ' >이미 계정이 있으신가요?  로그인</Link>
                    </div>
                </div>

            </div>
        );
}

export default SignIn;