import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import logo from '../../src/assets/home_imgs/logo.png'



function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Popover className='relative bg-transparent/20'>
      <div className='mx-auto  px-4 sm:px-6'>
        <div className='flex items-center justify-between  border-gray-100 py-2 md:justify-start md:space-x-5'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <a href='#'>
              <img
                className='h-20 my-0 w-auto '
                src={logo}
                alt='logo'
              />
            </a>
          </div>

          <Popover.Group as='nav' className='hidden space-x-20 md:flex'>
            <Popover className='relative'>

            </Popover>

            <a
              href='#'
              className='text-xl font-medium text-gray-100 hover:text-orange-500'
            >
              Need a ride
            </a>
            <a
              href='#'
              className='text-xl font-medium text-gray-100 hover:text-orange-500'
            >
              Post a ride
            </a>


          </Popover.Group>
          <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0'>
            <a
              href='#'
              className='whitespace-nowrap text-xl font-medium text-gray-100 hover:text-orange-500'
            >
              Sign in
            </a>
            <a
              href='#'
              className='ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-orange-600 px-4 py-2 text-xl font-medium text-white shadow-sm hover:bg-orange-700'
            >
              Sign up
            </a>
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
                <a
                  href='#'
                  className='text-xl font-medium text-gray-900 hover:text-gray-700'
                >
                  Pricing
                </a>

                <a
                  href='#'
                  className='text-xl font-medium text-gray-900 hover:text-gray-700'
                >
                  Docs
                </a>

              </div>
              <div>
                <a
                  href='#'
                  className='flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-xl font-medium text-white shadow-sm hover:bg-orange-700'
                >
                  Sign up
                </a>
                <p className='mt-6 text-center text-xl font-medium text-gray-500'>
                  Existing customer?{' '}
                  <a href='#' className='text-orange-600 hover:text-orange-500'>
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
