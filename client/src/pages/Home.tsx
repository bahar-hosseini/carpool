import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Signin from '../components/Signin'
import NeedRide from './NeedRide'
import './styles/home.css'
import { signinContext } from '../providers/SigninProvider'




const Home = () => {

  const { isLogin }: any = useContext(signinContext)
  return (
    <div>
      <header className='bg'>
        <Navbar />
        {isLogin && <Signin />}
      </header>
      < NeedRide />
    </div>
  )
}

export default Home