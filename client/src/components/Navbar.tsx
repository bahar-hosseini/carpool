import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import logo from '../../src/assets/home_imgs/logo.png'
import { Link } from 'react-router-dom'



function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Popover className='relative bg-transparent/20'>
      <div className='mx-auto  px-4 sm:px-6'>
        <div className='flex items-center justify-between  border-gray-100 py-0 md:justify-start md:space-x-5'>
          <div className='flex justify-start lg:w-1 lg:flex-1'>

            <Link to='/'>
              <img
                className='h-16 my-0 w-auto '
                src={logo}
                alt='logo'
              />
            </Link>
            <Link to='/' className='text-lg font-extrabold text-gray-100 py-6'>CARPOOL</Link>
          </div>

          <Popover.Group as='nav' className='hidden space-x-20 md:flex'>
            <Popover className='relative'>

            </Popover>

            <Link
              to='/need-ride'
              className='text-base font-medium text-gray-100 hover:text-orange-500'
            >
              Need Link ride
            </Link>
            <Link
              to='/post-ride'
              className='text-base font-medium text-gray-100 hover:text-orange-500'
            >
              Post Link ride
            </Link>


          </Popover.Group>
          <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0'>
            <Link
              to='#'
              className='whitespace-nowrap text-base font-medium text-gray-100 hover:text-orange-500'
            >
              Sign in
            </Link>
            <Link
              to='#'
              className='ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-700'
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'
        >
          <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <img
                    className='h-8 w-auto'
                    src='../assets/home_imgs/logo.png'
                    alt='Your Company'
                  />
                </div>
                <div className='-mr-2'>

                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid gap-y-8'>
                </nav>
              </div>
            </div>
            <div className='space-y-6 py-6 px-5'>
              <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                <Link
                  to='#'
                  className='text-xl font-medium text-gray-900 hover:text-gray-700'
                >
                  Pricing
                </Link>

                <Link
                  to='#'
                  className='text-xl font-medium text-gray-900 hover:text-gray-700'
                >
                  Docs
                </Link>

              </div>
              <div>
                <Link
                  to='#'
                  className='flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-xl font-medium text-white shadow-sm hover:bg-orange-700'
                >
                  Sign up
                </Link>
                <p className='mt-6 text-center text-xl font-medium text-gray-500'>
                  Existing customer?{' '}
                  <Link to='#' className='text-orange-600 hover:text-orange-500'>
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
