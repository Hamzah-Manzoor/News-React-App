import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalResults: 0,
  newsArray: [],
}


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    fetchNews: (state) => {
    
      var url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=27eb38d051304121b022b2b760dfa9d3';
      var xhReq = new XMLHttpRequest();
      xhReq.open("GET", url, false);
      xhReq.send(null);

      state.totalResults = JSON.parse(xhReq.responseText).totalResults;
      var news = JSON.parse(xhReq.responseText).articles;

      for (var i = 0; i < state.totalResults; i++){
        let newsObject = {
          author: news[i].author, 
          title: news[i].title, 
          description: news[i].description, 
          url: news[i].url, 
          urlToImage: news[i].urlToImage, 
          publishedAt: news[i].publishedAt
        };
        state.newsArray.push(newsObject);
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { fetchNews } = counterSlice.actions

export default counterSlice.reducer