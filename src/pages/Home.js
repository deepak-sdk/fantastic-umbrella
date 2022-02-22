
import React from 'react';
import NavBar from '../components/NavBar'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories';
import Products from '../components/Products';
import Slider from "./Slider";


const Home = () => {
  return (
    <div>

      <Announcement />
      <NavBar />
      <Slider />
      <Categories/>
      <Products/>
    </div>
  );
};
export default Home;
