import React from 'react';
import Wrapper from '../UI/wrapper';
import Card from '../card';

const Feed = () => {
  return (
    <section className='text-white'>
      <Wrapper>
        <div className='grid grid-cols-3 gap-9'>
          <Card />
        </div>
      </Wrapper>
    </section>
  );
};

export default Feed;
