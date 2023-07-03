import React from 'react';
import Wrapper from '../../UI/wrapper';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-white py-2'>
      <Wrapper>
        <div className='flex justify-between items-center'>
          <Link to={'/'} className='  inline-flex items-center'>
            <img
              src='https://www.svgrepo.com/show/330504/giphy.svg'
              alt=''
              className='h-11'
            />
            <h1 className='text-5xl font-bold'>GIPHY </h1>
          </Link>

          <form className='w-1/3'>
            <label
              for='default-search'
              class='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
              Search
            </label>
            <div class='relative'>
              <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  aria-hidden='true'
                  class='w-5 h-5 text-gray-500 dark:text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                </svg>
              </div>
              <input
                type='search'
                id='default-search'
                class='block w-full p-2 pl-10 text-sm border border-black rounded'
                placeholder='Search...'
                required
              />
            </div>
          </form>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
