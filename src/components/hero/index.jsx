import React from 'react';
import Wrapper from '../UI/wrapper';

const Hero = () => {
  return (
    <section className='text-white'>
      <Wrapper>
        <div className='flex justify-center items-center h-[90vh] flex-col gap-2'>
          <h1 className='text-7xl font-bold'>Welcome to Giphy</h1>
          <h2 className='text-xl'>feel free to explore!</h2>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
