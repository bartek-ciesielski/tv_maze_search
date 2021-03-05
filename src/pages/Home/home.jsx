import React from 'react';
import SearchForm from '../../modules/SearchForm/searchForm';
import ShowsList from '../../modules/Shows/showsList.jsx';
import './home.css';

const Home = () => {
  return (
    <React.Fragment>
      <SearchForm />
      <ShowsList />
    </React.Fragment>
  );
};

export default Home;
