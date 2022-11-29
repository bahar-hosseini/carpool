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
  const [user, setUser] = useState(() => ({
    loggedIn: false,
  }))

  useEffect(() => {
    axios.get('/api/login').then((res) => {
      if (res) {
        setIsLogin(() => true)
      }
    })
  }, [])

  useEffect(() => {
    fetch('http://localhost:8081/account', { credentials: 'include' }).then((res) => {
      res.json()
    })
      .then((data) => {
        console.log(...(data as any) as any);
        setUser({ ...(data as any) as any })
      })
  }, [])
  const providerData = {
    isLogin,
    setIsLogin,
    user
  }
  return (
    <signinContext.Provider value={providerData}>
      {props.children}
    </signinContext.Provider>
  )
}
