import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
  return (
    <div className='navbar w-full bg-slate-700 py-4 px-6 flex flex-row'>
      {/* <div className='icon mx-auto'>
        <FontAwesomeIcon icon={faUmbrella} />
      </div> */}

      <div className='news-icon'>
        <FontAwesomeIcon icon={faNewspaper} />
      </div>
      
      <div className='pages flex flex-row text-gray-400'>
        
        <div className='news'>
          <Link className="menu-item text-center hover:text-white active:text-white focus:text-white" to="/"> 
            {/* <div className='icon-weather mx-auto'>
              <FontAwesomeIcon icon={faCloudSunRain}/>
            </div> */}
            <h1>News</h1>
          </Link>
        </div>

        <div className='details flex'>
          <Link className="menu-item flex flex-col text-center hover:text-white active:text-white focus:text-white" to="/details"> 
            {/* <div className='icon-cities mx-auto'>
              <FontAwesomeIcon icon={faListUl} />
            </div> */}
            <h1>Details</h1>
          </Link>
        </div>

        <div className='categories flex'>
          <Link className="menu-item flex flex-col text-center hover:text-white active:text-white focus:text-white" to="/categories"> 
            {/* <div className='icon-map mx-auto'>
              <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
            </div> */}
            <h1>Categories</h1>
          </Link>
        </div>











      </div>

      
    </div>
  )
}

export default Navbar
