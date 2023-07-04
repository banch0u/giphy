import React from 'react';

const Card = () => {
  return (
    <article className=' rounded-t-lg overflow-hidden p-3'>
      <img
        src='https://media0.giphy.com/media/ftIql9fqsnZgyfnmod/giphy.gif?cid=2880a116brxtuz2jvcur8afrgk678vlman06clg7wkb3cp83&ep=v1_gifs_trending&rid=giphy.gif&ct=g'
        alt=''
        className='mb-2'
      />
      <h5 className='mb-1'>Tv Show Fun GIF by Happy Place</h5>
      <a
        href='https://giphy.com/happyplaceshow/'
        target='_blank'
        rel='noreferrer'
        className='flex items-center gap-2 text-sm'>
        <img
          src='https://media0.giphy.com/avatars/happyplaceshow/zPm9CDP5CbUI.gif'
          alt=''
          className='w-5 h-5 object- rounded-full'
        />
        Happy Place
      </a>
      <p className='text-right'>Uploaded: 2023-06-13 20:19:11</p>
    </article>
  );
};

export default Card;
