import { createContext, useState, useContext } from 'react'

interface signinInterface {
  isLogin?: any;
  setIsLogin?: any;
}

export const signinContext = createContext<signinInterface | null>(null);

export const useSignin = () => useContext(signinContext)
//todo:change file name to dataprovider

export default function SigninProvider(props: any) {
  const [isLogin, setIsLogin] = useState(false)

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
