import React from 'react';
const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const Projects = React.lazy(() => import('./Projects'));
const Resume = React.lazy(() => import('./Resume'));
const Contact = React.lazy(() => import('./Contact'));
const Test = React.lazy(() => import('./Test'));

export {
    About,
    Home,
    Projects,
    Resume,
    Contact,
    Test
}