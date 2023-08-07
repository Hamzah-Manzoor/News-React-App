import { React, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../redux/counter';

export default function News() {

  const [topic, setTopic] = useState('');
  const [showTopic, setShowTopic] = useState('');
  const [render, setRender] = useState(0);

  const hasRun = useRef(false);
  const resultCount = useSelector((state) => state.counter.totalResults);
  const newsArray = useSelector((state) => state.counter.newsArray);
  const dispatch = useDispatch();

  const searchTopic = (event) => {
    if (event.key === 'Enter') {
      
      dispatch(fetchNews({category: "general", q: topic}));
      setShowTopic(topic);
      setRender(1);
      setTopic('');

      
    }
  }

  useEffect(() => {
    if (!hasRun.current) {
      dispatch(fetchNews({category: "general", q: ""}));
      hasRun.current = true;
    }
  }, []);

  return (

    <div className='home-page mt-5 mx-4'>


      <div className='user-control'>
        <div className="search">
          <input 
              className='bg-slate-800 w-1/2 text-sm py-2 px-3 rounded-2xl'
              value={topic}
              onChange={event => setTopic(event.target.value)}
              onKeyDown={searchTopic}
              placeholder="Search for a topic/keyword"
              type="text"/>
        </div>
        {render ? (
          <div className="loaction text-xl font-bold pb-2 text-gray-400 mt-3">
              <p>Showing results for: {showTopic} ({resultCount} results)</p>
          </div>
        ) : null }
      </div>


      <div className='general-news flex flex-row flex-wrap mr-2'>
        {newsArray.map((news, id) => (
          <>
            {/* {news.author !== "BBC Sport" ? ( */}
              <div className='bg-slate-700 rounded-2xl py-2 my-4 px-5 flex flex-col sm:flex-row sm:justify-between 
              h-fit sm:items-center hover:bg-slate-800 active:bg-slate-900 focus:bg-slate-900 focus:border-blue-500' key={id}>

                <div className='name-temp sm:basis-2/5 flex flex-col justify-between items-center'>
                  <div className='name font-bold text-2xl mb-7'>
                    {news.title}
                  </div>

                  <div className='temp text-xl'>
                    {news.description}
                  </div>

                  <div className='btn mt-4 mb-3'>
                    <button className='button rounded-2xl inline-block align-middle font-bold text-base bg-blue-700 px-3 py-1 hover:bg-blue-800 focus:bg-slate-900 focus:border-blue-500 mr-2' 
                      onClick={() => window.open(news.url, '_blank')}>
                      Read more <span className='font-black'>&#x2192;</span>
                    </button>

                  </div>
                </div>

                <div className='image-btns sm:basis-3/5 justify-between items-center pl-4 pr-1 py-3'>
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

      {/* <div className='sports-news basis-1/3 mt-3'>
        <div className='heading text-center text-gray-400 text-xl font-bold'>Sports News</div>
        {newsArray.map((news, id) => (
          <>
            {news.author == "BBC Sport" ? (
              <div className='bg-slate-700 rounded-2xl py-2 my-4 px-5 flex flex-col sm:justify-between 
              h-fit sm:items-center hover:bg-slate-800 active:bg-slate-900 focus:bg-slate-900 focus:border-blue-500' key={id}>

                <div className='name-temp sm:basis-2/5 flex flex-col justify-between items-center'>
                  <div className='name font-bold text-2xl mb-7'>
                    {news.title}
                  </div>

                  <div className='temp text-xl'>
                    {news.description}
                  </div>

                  <div className='btn mt-4 mb-5'>
                    <button className='button rounded-2xl inline-block align-middle font-bold text-base bg-blue-700 px-3 py-1 hover:bg-blue-800 focus:bg-slate-900 focus:border-blue-500 mr-2' 
                      onClick={() => window.open(news.url, '_blank')}>
                      Read more <span className='font-black'>&#x2192;</span>
                    </button>

                  </div>
                </div>

                <div className='image-btns sm:basis-3/5 justify-between items-center px-4'>
                  <div className='image h-2/6'>
                    <img className='h-5/6' src={news.urlToImage} alt="Image" />
                  </div>
                </div>
              </div>
            ) : null }
          </>
        ))}
      </div> */}


    </div>
  )
}
