import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.linkedin.com/in/ankit-raj-gupta-207353201'><BsLinkedin /></a>
    </div>
    <div>
      <a href='https://www.facebook.com/arg7957'><FaFacebookF /></a>
    </div>
    <div>
      <a href='https://instagram.com/ankit.r.g?igshid=Yzg5MTU1MDY='><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;
