import axios from 'axios';

const url = 'https://api.tvmaze.com/shows';
const urlSearch = ' https://api.tvmaze.com/search/shows?q=';

export const requestAllShows = () =>
  axios.get(`${url}`).then((resp) => {
    return resp.data;
  });

export const requestSearchResults = (query) =>
  axios.get(`${urlSearch}${query}`).then((resp) => {
    return resp.data;
  });

export const requestModalShow = (showId) =>
  axios.get(`${url}/${showId}?embed[]=cast&embed[]=crew`).then((resp) => {
    return resp.data;
  });
