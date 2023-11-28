import React, {useContext} from 'react';
// import icons
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from 'react-icons/im'
// import cursot context
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
  <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href="https://www.facebook.com" target='_blank'>
          <ImFacebook />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com" target='_blank'>
          <ImTwitter />
        </a>
      </li>
      <li>
        <a href="https://www.pinterest.com" target='_blank'>
          <ImPinterest />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com" target='_blank'>
          <ImYoutube />
        </a>
      </li>
    </ul>
  </div>
  );
};

export default Socials;
