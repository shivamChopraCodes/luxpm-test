import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../assets/Logo-removebg-preview.png'
import { FaCheckCircle } from 'react-icons/fa'
import {IoCheckbox} from 'react-icons/io5'


const SignUp = () => {
    const history = useHistory()
    const [checkBoxes, setCheckBoxes] = useState({
        isLengthy : false,
        hasUppercase : false,
        hasNumber: false,
        hasSpecialCharacter :false
    })
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);
    const [userCredentials, setUserCredentials] = useState({
        email : '',
        name:'',
        dob:'',
        phoneNo : '',
        password:'',
        confirmPassword:''
    })
    const [warnings,setWarnings] = useState({
        email: '',
        password: '',
        confirmPassword : ''
    })

    const checkLengthOfPassword = (password)=> password.length >= 8 ? true : false

    const checkUppercaseCharacter = (password)=>/[A-Z]/.test(password) ? true : false
    
    const checkOneNumber = password => /[0-9]/.test(password) ? true : false
    
    const checkSpecialCharacter= password => /[!@#$%^&*)(+=._-]/.test(password) ? true : false
    
    const handleEmailChange = (e)=>{
        setIsBtnDisabled(false)
        let input = e.target.value
        let validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(input.match(validEmailRegex) || !input){
            setWarnings(prev=>({
                ...prev,
                email:''
            }))
        } else {
            setWarnings(prev=>({
                ...prev,
                email:'Please enter a valid email address'
                
            }))
            setIsBtnDisabled(true)

        }
        setUserCredentials(prev=>({
            ...prev,
            email : input

        }))
    }
    const handlePasswordChange = (e)=>{
        let input = e.target.value;
        setCheckBoxes({
            isLengthy : (checkLengthOfPassword(input)),
            hasUppercase : (checkUppercaseCharacter(input)),
            hasNumber: (checkOneNumber(input)),
            hasSpecialCharacter : (checkSpecialCharacter(input))
        })
        setUserCredentials(prev=>({
            ...prev,
            password : input
        }))
    }

    const handleConfirmPasswordChange = (e) =>{
        setWarnings(prev=>({
            ...prev,
            confirmPassword: ''
        }))
        let input = e.target.value;
        if(!userCredentials.password.includes(input)){
            setWarnings(prev=>({
                ...prev,
                confirmPassword: 'Passwords don\'t match. Please re-enter'
            }))
        } else if(userCredentials.password === input){
            setIsBtnDisabled(false)
        }

        setUserCredentials(prev=>({
            ...prev,
            confirmPassword : input
        }))

    }

    const handleButtonClick = ()=>{
        if(warnings.confirmPassword || warnings.email) return alert('Please fill required fields')
        if( userCredentials.password === '' || userCredentials.confirmPassword === '' || userCredentials.confirmPassword !== userCredentials.password) return alert('Invalid password')
        if(!userCredentials.email) return alert('No email')
        if(!checkBoxes.isLengthy || !checkBoxes.hasNumber || !checkBoxes.hasSpecialCharacter || !checkBoxes.hasUppercase) return alert('Please choose a password which passes all the criteria ')

        history.push('/home')
        
    }

    return (
        <div className='w-full flex flex-col justify-center items-center' >
            <div className='w-4/5  sm:w-3/4 md:w-1/2 flex flex-col justify-center items-center py-10 space-y-14' >
                <div className='w-full flex flex-col justify-center items-center space-y-8' >
                    <img src={Logo} alt='logo' width='200px' />
                    <span className='text-3xl font-normal ' >회원가입</span>
                </div>
                <div className='inputs w-full flex flex-col justify-center items-center space-y-6' >
                    <div className='w-11/12 sm:w-3/4 md:w-1/2 flex flex-col justify-center items-center text-left' >
                        <label htmlFor='name' className='px-1 text-base w-full' >이름</label>
                        <input name='name' type='text' className=' text-sm px-1 py-2 bg-transparent w-full border-b border-gray-1000 focus:outline-none focus:border-gray-500 ' autoComplete='off' placeholder='이채민' />
                    </div>
                    <div className='w-11/12 sm:w-3/4 md:w-1/2 flex flex-col justify-center items-center text-left' >
                        <label htmlFor='phone' className='px-1 text-base w-full' >휴대폰 번호</label>
                        <input name='phone' type='tel' className=' text-sm px-1 py-2 bg-transparent w-full border-b border-gray-1000 focus:outline-none focus:border-gray-500 ' autoComplete='off' placeholder='+82 111 1111111' />
                    </div>
                    <div className='w-11/12 sm:w-3/4 md:w-1/2 flex flex-col justify-center items-center text-left' >
                        <label htmlFor='dob' className='px-1 text-base w-full' >생년월일</label>
                        <input name='dob' type='text' className=' text-sm px-1 py-2 bg-transparent w-full border-b border-gray-1000 focus:outline-none focus:border-gray-500 ' autoComplete='off' placeholder='mm-dd-yy' />
                    </div>
                    <div className='w-11/12 sm:w-3/4 md:w-1/2 flex flex-col justify-center items-center text-left' >
                        <label htmlFor='email' className='px-1 text-base w-full' >Email</label>
                        <input name='email' type='email' className=' text-sm px-1 py-2 bg-transparent w-full border-b border-gray-1000 focus:outline-none focus:border-gray-500 ' autoComplete='off' placeholder='john.doe@alphametics.com'
                          onChange={handleEmailChange} value={userCredentials.email}
                         />
                         {warnings.email && <span className='text-red-500 tex-left w-full text-xs' >{warnings.email}</span> }
                    </div>
                    <div className='w-11/12 sm:w-3/4 md:w-1/2 flex flex-col justify-center items-center text-left' >
                        <label htmlFor='password' className='px-1 text-base w-full' >비밀번호</label>
                        <input name='password' type='password' className='tracking-widest text-2xl px-1 py-2 bg-transparent w-full border-b border-gray-1000 focus:outline-none focus:border-gray-500 ' autoComplete='off' 
                        onChange={handlePasswordChange} value={userCredentials.password}
                        />
                    </div>
                    <div className='w-11/12 sm:w-3/4 md:w-1/2 flex flex-col justify-center items-center text-left' >
                        <label htmlFor='confirm-password' className='px-1 text-base w-full' >비밀번호 확인</label>
                        <input name='confirm-password' type='password' className='tracking-widest text-2xl  px-1 py-2 bg-transparent w-full border-b border-gray-1000 focus:outline-none focus:border-gray-500 ' autoComplete='off' 
                            onChange={handleConfirmPasswordChange} value={userCredentials.confirmPassword}
                        />
                         {warnings.confirmPassword && <span className='text-red-500 tex-left w-full text-xs' >{warnings.confirmPassword}</span> }

                    </div>
                </div>
                <div className='w-full sm:w-3/4 md:w-1/2 grid grid-cols-2 gap-6 justify-center items-center ' >
                    <span className='flex flex-row' ><FaCheckCircle className={`w-3/12 ${checkBoxes.isLengthy ? 'text-purple-850' : 'text-gray-1000'} `} /><p className='text-xs w-9/12 font-bold text-gray-1000' >최소 8자 이상</p></span>
                    <span className='flex flex-row' ><FaCheckCircle className={`w-3/12 ${checkBoxes.hasUppercase ? 'text-purple-850' : 'text-gray-1000'} `} /><p className='text-xs w-9/12 font-bold text-gray-1000' >최소 하나의 대문자</p></span>
                    <span className='flex flex-row' ><FaCheckCircle className={`w-3/12 ${checkBoxes.hasNumber ? 'text-purple-850' : 'text-gray-1000'} `} /><p className='text-xs w-9/12 font-bold text-gray-1000' >최소 하나의 숫자</p></span>
                    <span className='flex flex-row' ><FaCheckCircle className={`w-3/12 ${checkBoxes.hasSpecialCharacter ? 'text-purple-850' : 'text-gray-1000'} `} /><p className='text-xs w-9/12 font-bold text-gray-1000' >최소 하나의 특수문자</p></span>
                </div>
                <span className='w-full md:w-3/5 flex flex-row text-center justify-center items-center space-x-3' >
                <IoCheckbox className='w-5 h-5 text-gray-1000 cursor-pointer' onClick={(e)=>{
                    e.target.classList.toggle('text-gray-1000')
                    e.target.classList.toggle('text-purple-850')
                }} />
                <p className=' text-xs text-gray-1000' >이용약관에 동의합니다</p>
                </span>
                <div className='w-full flex flex-col justify-center items-center space-y-4 pb-10' >
                    <button className={`w-3/4 text-center text-white md:w-1/5 rounded-md py-4 ${ isBtnDisabled ? 'bg-gray-700 cursor-not-allowed' : 'bg-purple-850 cursor-pointer'} `} 
                    onClick={handleButtonClick}
                    >가입하기</button>
                    <Link to='/signin' className='w-3/4 text-center text-purple-850 md:w-3/5 ' >이미 계정이 있으신가요?  로그인</Link>
                </div>
            </div>

        </div>
    );
}

export default SignUp;