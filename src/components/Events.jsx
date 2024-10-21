import React from 'react';
import Top from './Top';
import Boxes from './Boxes';
import UpComing from './UpComing';
import Workshops from './Workshops';
import SocialMedia from '../utils/SocialMedia';
import TestimonialforCourses from '../utils/TestimonialforCourses';
import Outdooractivites from '../components/Outdooractivites';
import Eventcarousel from './Eventscarousel';
import YoutubeVideos from './YoutubeVideos';

function Events() {
  return (
    <>
      <Top />
      <Eventcarousel />
      <Boxes />
      <UpComing />
      <Workshops />
      <YoutubeVideos />
      <SocialMedia />
      <TestimonialforCourses />
    </>
  );
}

export default Events;
