import { useState, useContext } from 'react'
import axios from 'axios'
import { signinContext } from '../providers/SigninProvider'




const Signup = () => {

  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setIsLogin }: any = useContext(signinContext)

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    axios
      .post(`/api/signup`, JSON.stringify({ fullname, email, password }), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then(() => {
        setFullname('')
        setEmail('')
        setPassword('')
      }).then(() => {
        setIsLogin(() => true)
      })

      .catch((err) => {
        console.log(err, 'Could not register')
      })
  }

  const handleClick = () => {
    console.log('test')
  }
  return (
    <div>
      {/*  component  */}
      <body className="antialiased bg-transparent">
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
          <h1 className="text-4xl font-medium">Sign up</h1>
          <p className="text-slate-500">Sign up with your google account:</p>

          <div className="my-5">
            <button onClick={handleClick} className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
              <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="" /> <span>Sign up with Google</span>
            </button>
          </div>
          <form action="" className="my-10" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-5">
              <label htmlFor="name">
                <p className="font-medium text-slate-700 pb-2">Full name</p>
                <input id="name" name="name" type="text" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter full name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
              </label>
              <label htmlFor="email">
                <p className="font-medium text-slate-700 pb-2">Email address</p>
                <input id="email" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
              <label htmlFor="password">
                <p className="font-medium text-slate-700 pb-2">Password</p>
                <input id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
              <div className="flex flex-row justify-between">

              </div>

              <button className="w-full py-3 font-base text-white bg-orange-600 hover:bg-orange-500 rounded-lg border-orange-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span>Sign up</span>
              </button>
              <p className="text-center">Already part of the Carpool Crew?  <a href="/" className="text-gray-900 hover:text-orange-600 font-medium inline-flex space-x-1 items-center"><span><small>Sign in</small>
              </span></a></p>
            </div>
          </form>
        </div>

      </body>
    </div>
  )
}

export default Signup