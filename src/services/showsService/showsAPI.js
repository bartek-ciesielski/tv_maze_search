import axios from 'axios';

const url = 'http://api.tvmaze.com/shows';
const urlSearch = ' http://api.tvmaze.com/search/shows?q=';
const urlShow = 'http://api.tvmaze.com/shows/';

export const requestAllShows = () =>
  axios.get(`${url}`).then((resp) => {
    return resp.data;
  });

export const requestSearchResults = (query) =>
  axios.get(`${urlSearch}${query}`).then((resp) => {
    return resp.data;
  });

export const requestModalShow = (showId) =>
  axios.get(`${urlShow}${showId}?embed[]=cast&embed[]=crew`).then((resp) => {
    return resp.data;
  });
