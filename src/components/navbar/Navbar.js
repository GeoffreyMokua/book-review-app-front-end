import { Link } from "react-router-dom";
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLocation } from "react-router-dom";

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Book Review', path: '/reviews' },
  { name: 'Login', path: '/login' },
  { name: 'Sign Up', path: '/register' },
  { name: 'Add Book', path: '/add-book' }
]


export default function Navbar() {
  const location = useLocation()
  const path = location.pathname;
 
  return (
    <Disclosure as="nav" className="bg-gray-800 pt-4">

      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex justify-between">
                <div className="flex-shrink-0">
                  <h2 className="text-white font-extrabold text-2xl">Book Review App</h2>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navItems.map((item) => <Link to={item.path} className={`rounded-md ${path === item.path && 'bg-gray-900'} px-3 py-2 text-sm font-medium text-white`}>
                      {item.name}
                    </Link>)}
                  </div>
                </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                {navItems.map((item) => <Link as='a' to={item.path} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  {item.name}
                </Link>)}
            </div>
          </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  )
}

