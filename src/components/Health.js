import { React, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../redux/counter';

export default function Health() {

    const [topic, setTopic] = useState('');
    const [showTopic, setShowTopic] = useState('');
    const [render, setRender] = useState(0);

    const hasRun = useRef(false);
    const resultCount = useSelector((state) => state.counter.totalResults);
    const newsArray = useSelector((state) => state.counter.newsArray);
    const dispatch = useDispatch();

    const searchTopic = (event) => {
      if (event.key === 'Enter') {
        dispatch(fetchNews({category: "health", q: topic}));
        setShowTopic(topic);
        setRender(1);
        setTopic('');
      }
    }

    useEffect(() => {
        if (!hasRun.current) {
          dispatch(fetchNews({category: "health", q: ""}));
          hasRun.current = true;
        }
      }, []);

  return (
    <div className='health-page mt-5 mx-4'>

      <div className='user-control'>
        <div className="search">
          <input 
              className='bg-slate-800 w-1/2 text-sm py-2 px-3 rounded-2xl'
              value={topic}
              onChange={event => setTopic(event.target.value)}
              onKeyDown={searchTopic}
              placeholder="Search for a topic/keyword related to Health"
              type="text"/>
        </div>
        {render ? (
          <div className="loaction text-xl font-bold pb-2 text-gray-400 mt-3">
              <p>Showing results for: {showTopic} ({resultCount} results)</p>
          </div>
        ) : null }
      </div>

      <div className='health-news flex flex-row flex-wrap justify-center'>
        {newsArray.map((news, id) => (

              <div className='bg-slate-700 w-96 rounded-2xl py-2 mx-2 my-4 px-3 flex flex-col sm:justify-between 
              h-fit sm:items-center hover:bg-slate-800 active:bg-slate-900 focus:bg-slate-900 focus:border-blue-500' key={id}>

                <div className='image-btns justify-between items-center py-3'>
                  <div className='image h-2/6'>
                    {news.urlToImage ? ( 
                      <img className='h-5/6' src={news.urlToImage} alt="Could not fetch image" />
                    ): <img className='h-5/6' src='https://th.bing.com/th/id/R.50428446fe1a2469bed28c5db4166ca6?rik=wTrZv%2bwhoFkmXw&riu=http%3a%2f%2fdehayf5mhw1h7.cloudfront.net%2fwp-content%2fuploads%2fsites%2f114%2f2017%2f10%2f02065917%2fbreaking-news-shutterstock.jpg&ehk=0gOFnAI5ADyEz1nv2r7WHW7VmbfFq4t3MXwfIC9vNRc%3d&risl=&pid=ImgRaw&r=0' alt="Could not fetch image" /> }
                    
                  </div>
                </div>

                <div className='title font-bold text-2xl mb-7'>
                    {news.title}
                </div>

                <div className='description text-xl'>
                    {news.description}
                </div>

                <div className='btn mt-4 mb-3'>
                    <button className='button rounded-2xl inline-block align-middle font-bold text-base bg-blue-700 px-3 py-1 hover:bg-blue-800 focus:bg-slate-900 focus:border-blue-500 mr-2' 
                        onClick={() => window.open(news.url, '_blank')}>
                        Read more <span className='font-black'>&#x2192;</span>
                    </button>
                </div>

              </div>
        ))}
      </div>
    </div>
  )
}
