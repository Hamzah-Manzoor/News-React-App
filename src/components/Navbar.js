import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'




const Navbar = () => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className='navbar w-full bg-slate-700 py-4 px-6 flex flex-row'>
      {/* <div className='icon mx-auto'>
        <FontAwesomeIcon icon={faUmbrella} />
      </div> */}

      <div className='news-icon text-4xl'>
        <FontAwesomeIcon icon={faNewspaper} />
      </div>
      
      <div className='pages ml-5 flex flex-row text-gray-400 text-xl'>
        
        <div className='news flex px-1 self-center'>
          <Link className="menu-item text-center hover:text-white active:text-white focus:text-white" to="/"> 
            {/* <div className='icon-weather mx-auto'>
              <FontAwesomeIcon icon={faCloudSunRain}/>
            </div> */}
            <h1>News</h1>
          </Link>
        </div>

        <div className='details flex px-1 self-center'>
          <Link className="menu-item flex flex-col text-center hover:text-white active:text-white focus:text-white" to="/articles"> 
            {/* <div className='icon-cities mx-auto'>
              <FontAwesomeIcon icon={faListUl} />
            </div> */}
            <h1>Articles</h1>
          </Link>
        </div>


        <Menu as="div" className="relative inline-block text-left pt-0.5">
          <div className='hover:text-white'>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-slate-700 px-3 pt-1
            shadow-sm ">
              Categories
              <ChevronDownIcon className="-mr-1 h-5 w-5 mt-1.5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-slate-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a href="/business" className={classNames(active ? 'bg-gray-800 text-gray-300' : '','block px-4 py-2 text-sm')}>
                    Business
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="/entertainment" className={classNames(active ? 'bg-gray-800 text-gray-300' : '','block px-4 py-2 text-sm')}>
                    Entertainment
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="/health" className={classNames(active ? 'bg-gray-800 text-gray-300' : '','block px-4 py-2 text-sm')}>
                    Health
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="/science" className={classNames(active ? 'bg-gray-800 text-gray-300' : '','block px-4 py-2 text-sm')}>
                    Science
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="/sports" className={classNames(active ? 'bg-gray-800 text-gray-300' : '','block px-4 py-2 text-sm')}>
                    Sports
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="/technology" className={classNames(active ? 'bg-gray-800 text-gray-300' : '','block px-4 py-2 text-sm')}>
                    Technology
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>





      </div>

      
    </div>
  )
}

export default Navbar
