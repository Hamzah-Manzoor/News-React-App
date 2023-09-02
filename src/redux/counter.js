import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalResults: 0,
  newsArray: [],
}


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    fetchNews: (state, action) => {
      // console.log("Your category is: " + action.payload.category + " and topic is: " + action.payload.q);
      var url = `https://newsapi.org/v2/top-headlines?category=${action.payload.category}&q=${action.payload.q}&language=en&apiKey={Insert API KEY Here}`;
      // var url = 'https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=27eb38d051304121b022b2b760dfa9d3';
      // category=general&
      // language=en&
      // 'pageSize=30&' #no. of results.
      var xhReq = new XMLHttpRequest();
      xhReq.open("GET", url, false);
      xhReq.send(null);

      state.newsArray.splice(0,state.totalResults);
      state.totalResults = JSON.parse(xhReq.responseText).totalResults;
      if (state.totalResults == 0) {
        alert("No Results found, Please try searching for another topic.");
      } else {

        if (JSON.parse(xhReq.responseText).code){
          alert("Maximum request limit reached, Please try again later.");
        } else {
          var lengthOfArray = JSON.parse(xhReq.responseText).articles.length;
          state.totalResults = lengthOfArray;
          var news = JSON.parse(xhReq.responseText).articles;
  
          // console.log("This is res: " + xhReq.responseText[0]);
          // console.log("This is news: " + news[0].title);
  
          for (var i = 0; i < lengthOfArray; i++){
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
        }

      }
    },
    fetchArticles: (state = initialState, action) => {
      // console.log("Your category is: " + action.payload);
      var url = `https://newsapi.org/v2/everything?q=${action.payload}&language=en&sortBy=popularity&apiKey=27eb38d051304121b022b2b760dfa9d3`;

      var xhReq = new XMLHttpRequest();
      xhReq.open("GET", url, false);
      xhReq.send(null);

      // state.totalResults = JSON.parse(xhReq.responseText).totalResults;
    
      state.newsArray.splice(0,state.totalResults); //Clearing any previous data if any
      state.totalResults = JSON.parse(xhReq.responseText).totalResults;
      if (state.totalResults == 0) {
        alert("No Results found, Please try searching for another topic.");
      } else {

        if (JSON.parse(xhReq.responseText).code){
          alert("Maximum request limit reached, Please try again later.");
        } else {
          var lengthOfArray = JSON.parse(xhReq.responseText).articles.length;
          state.totalResults = lengthOfArray;
          var news = JSON.parse(xhReq.responseText).articles;
          for (var i = 0; i < lengthOfArray; i++){
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
        }
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { fetchNews, fetchArticles } = counterSlice.actions

export default counterSlice.reducer
