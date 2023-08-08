import { React, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from '../redux/counter';
import { waitFor } from '@testing-library/react';


export default function Article() {

  const [topic, setTopic] = useState('');
  const [showTopic, setShowTopic] = useState('');
  const [render, setRender] = useState(0);

  const resultCount = useSelector((state) => state.counter.totalResults);
  const newsArray = useSelector((state) => state.counter.newsArray);
  const dispatch = useDispatch();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short"
  };

  // var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // const options = { weekday: 'long' };


    const searchTopic = (event) => {
      if (event.key === 'Enter') {   
        dispatch(fetchArticles(topic));
        setShowTopic(topic);
        // setRender(1);
        setTopic('');
      }
    }


  return (
    <>
      {resultCount && showTopic ? (
        <>

        <div className='articles ml-4 mt-6'>

        <div className='user-control'>

          <div className="search">
              <input 
                  className='bg-slate-800 w-5/6 sm:w-1/2 text-sm py-2 px-3 rounded-2xl'
                  value={topic}
                  onChange={event => setTopic(event.target.value)}
                  onKeyDown={searchTopic}
                  placeholder="Search for a topic/keyword"
                  type="text"/>
          </div>

        </div>

        <div className='results mt-6 mr-4'>
            {/* <hr></hr> */}
            <div className="loaction text-xl font-bold pb-2 text-gray-400 mt-3">
              <p>Showing results for: {showTopic} ({resultCount} results)</p>
            </div>


            <div className='news-articles flex flex-row flex-wrap'>
              {newsArray.map((news, id) => (
                <>
                  {/* {news.author !== "BBC Sport" ? ( */}
                    <div className='bg-slate-700 rounded-2xl py-2 my-4 px-5 flex flex-col sm:flex-row sm:justify-between 
                    h-fit sm:items-center hover:bg-slate-800 active:bg-slate-900 focus:bg-slate-900 focus:border-blue-500' key={id}>

                      <div className='name-temp sm:basis-3/5 flex flex-col justify-between'>
                        <div className='name font-bold text-xl sm:text-2xl mb-7'>
                          {news.title}
                        </div>

                        <div className='temp text-lg sm:text-xl'>
                          {news.description}
                        </div>

                        {news.publishedAt ? ( 
                          <div className='additional-info text-gray-400 mt-2'>
                            Published at: {new Date(news.publishedAt).toLocaleDateString("en-US", options)}
                          </div>
                        ) : null}

                        {news.author ? ( 
                          <div className='additional-info text-gray-400'>
                            Author: {news.author} 
                          </div>
                        ) : null}

                        <div className='btn mt-4 mb-3 mx-auto'>
                          <button className='button rounded-2xl inline-block align-middle font-bold text-base bg-blue-700 px-3 py-1 hover:bg-blue-800 focus:bg-slate-900 focus:border-blue-500 mr-2' 
                            onClick={() => window.open(news.url, '_blank')}>
                            Read more <span className='font-black'>&#x2192;</span>
                          </button>

                        </div>
                      </div>

                      <div className='image-btns sm:basis-2/5 justify-between items-center pl-4 pr-1 py-3'>
                        <div className='image h-2/6'>
                          {news.urlToImage ? ( 
                            <img className='h-5/6' src={news.urlToImage} alt="Could not fetch image" />
                          ): <img className='h-5/6' src='https://th.bing.com/th/id/R.50428446fe1a2469bed28c5db4166ca6?rik=wTrZv%2bwhoFkmXw&riu=http%3a%2f%2fdehayf5mhw1h7.cloudfront.net%2fwp-content%2fuploads%2fsites%2f114%2f2017%2f10%2f02065917%2fbreaking-news-shutterstock.jpg&ehk=0gOFnAI5ADyEz1nv2r7WHW7VmbfFq4t3MXwfIC9vNRc%3d&risl=&pid=ImgRaw&r=0' alt="Could not fetch image" /> }
                          
                        </div>
                      </div>
                    </div>
                  {/* ) : null } */}
                </>
              ))}
            </div>







        </div>


        </div>
        </>
      ) :
      //  Section start which displays info only when nothing is fetched from API
       <>
       <div className='articles ml-4 mt-6'>
          <div className="search">
              <input 
                  className='bg-slate-800 w-1/2 text-sm py-2 px-3 rounded-2xl'
                  value={topic}
                  onChange={event => setTopic(event.target.value)}
                  onKeyDown={searchTopic}
                  placeholder="Search for a topic/keyword"
                  type="text"/>
          </div>

          <div className='todays-forecast basis-full bg-slate-700 rounded-2xl p-5 mr-8 mt-10 h-44 flex justify-center items-center'>
              <p className='heading-forecast text-xl text-slate-300 font-bold'>SEARCH FOR A TOPIC OR KEYWORD TO GET ARTICLES</p>
          </div>
        </div>

       </> 
      //  Section ends which displays info only when nothing is fetched from API
      }

    
    </>
  )
}
