import { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios';


interface signinInterface {
  isLogin?: boolean;
  setIsLogin?: any;
}

export const signinContext = createContext<signinInterface | null>(null);

export const useSignin = () => useContext(signinContext)
//todo:change file name to dataprovider

export default function SigninProvider(props: any) {
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    axios.get('/api/login').then((res) => {
      if (res) {
        setIsLogin(() => true)
      }
    })
  }, [])

  const providerData = {
    isLogin,
    setIsLogin,
  }
  return (
    <signinContext.Provider value={providerData}>
      {props.children}
    </signinContext.Provider>
  )
}
