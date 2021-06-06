import React from 'react';
import Logo from '../../assets/Logo-removebg-preview.png'
import Graphic from '../../assets/Graphic_png-removebg-preview.png'
import { Link } from 'react-router-dom';


const GettingStarted = () => {

    return ( 
        <div className='w-full h-full flex flex-col justify-center items-center' >
          <div className='w-4/5 sm:w-3/4 md:w-1/2 flex flex-col justify-center items-center space-y-44' >
              <div className='w-full flex flex-col justify-center items-center space-y-8' >
                 <img src={Logo} alt='logo' width='200px'  />
                 <div className='w-full flex flex-col justify-center items-center text-center space-y-4' >
                     <img src={Graphic} alt={'graphic'} width='200px' />
                     <span className='text-xl font-normal text-gray-500' >
                         Stay on top <span className='font-bold'>of your finance</span>
                     </span>
                     <sapn className='font-extralight text-sm' >Lorem ipsum dolor sit amet, consetetur sadipscing elitr</sapn>
                 </div>
              </div>
              <div className='w-full flex flex-col justify-center items-center space-y-4' >
                  <Link to='/signup' className='w-3/4 text-center text-white md:w-1/5 rounded-md py-4 bg-purple-850 ' >가입하기</Link>
                  <Link to='/signin' className='w-3/4 text-center text-purple-850 md:w-1/5 ' >로그인</Link>
              </div>
          </div>
        </div>
     );
}
 
export default GettingStarted;