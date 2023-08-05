import { React, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../redux/counter';

export default function News() {

  const hasRun = useRef(false);
  const resultCount = useSelector((state) => state.counter.totalResults);
  const newsArray = useSelector((state) => state.counter.newsArray);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!hasRun.current) {
      dispatch(fetchNews());
      hasRun.current = true;
    }
  }, []);

  return (
    <div>
      <div>

        {newsArray.map((news, id) => (
          <div className='city-history bg-slate-700 rounded-2xl py-2 my-4 px-5 flex flex-col sm:flex-row sm:justify-between 
          h-fit sm:items-center hover:bg-slate-800 active:bg-slate-900 focus:bg-slate-900 focus:border-blue-500' key={id}>
            <div className='name-temp sm:basis-2/5 flex flex-row justify-between items-center'>
              <div className='name font-bold text-2xl'>
                {news.title}
              </div>

              <div className='temp font-bold text-2xl'>
                {news.description}
              </div>
            </div>

            <div className='image-btns sm:basis-3/5 flex flex-row justify-between items-center'>
              <div className='image'>
                <img className='h-5/6' src={news.urlToImage} alt="Image" />
              </div>
            </div>

          </div>  
        ))}

      </div>
    </div>
  )
}
