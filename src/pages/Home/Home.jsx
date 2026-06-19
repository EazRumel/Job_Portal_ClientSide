import React from 'react';
import Banner from '../../components/Banner';
import HotJobs from './HotJobs';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section className="mb-10 mt-10">
      <h3 className="text-blue-400 font-extrabold text-3xl text-center">Jobs for you and your future</h3>
      <hr className="mt-10" />
      <HotJobs></HotJobs>
      </section>
    </div>
  );
};

export default Home;