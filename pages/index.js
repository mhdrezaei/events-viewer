import { Fragment } from 'react';
import Head from 'next/head';
import { getFeaturedEvents } from '../dummy-data'

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';
import EventList from '../components/events/event-list';

function HomePage(props) {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);
  return (
    <Fragment>
      <Head>
        <title>Mohammad' Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
      <EventList items={featuredEvents}/>
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
