import { Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import Head from "next/head";
// import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
// import { getFeaturedPosts } from "../lib/posts-util";
import EventList from "../components/events/event-list";

function HomePage(props) {
  console.log(props.events)
  const [featuredEvents, setFeaturedEvents] = useState(props.events);
  // const url = "https://events-1bf5a-default-rtdb.firebaseio.com/events.json"
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    "https://events-1bf5a-default-rtdb.firebaseio.com/events.json",
    fetcher
    );
    console.log(data);
  
  useEffect(() => {
    const transformEvent = [];
    if (data) {
      for (let key in data) {
        transformEvent.push({
          id: key,
          title: data[key].title,
          descriptin: data[key].descriptin,
          image: data[key].image,
          date: data[key].date,
          location: data[key].location,
          isFeatured: data[key].isFeatured,
        });
      }
    }
    setFeaturedEvents(transformEvent);
  }, [data]);
  

  // useEffect(async () => {
  //   const fetchEvents = await fetch(
  //     "https://events-1bf5a-default-rtdb.firebaseio.com/events.json"
  //   );
  //   const response = await fetchEvents.json();

  //   const transformEvent = [];
  //   for (let data in response) {
  //     transformEvent.push({
  //       id: data,
  //       title: response[data].title,
  //       descriptin: response[data].descriptin,
  //       image: response[data].image,
  //       date : response[data].date,
  //       location : response[data].location,
  //       isFeatured : response[data].isFeatured
  //     });
  //   }
  //   setFeaturedEvents(transformEvent);
  //   console.log(transformEvent);
  // }, []);

  // const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);
  return (
    <Fragment>
      <Head>
        <title>Mohammad' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      {/* <FeaturedPosts posts={props.posts} /> */}
      {error && <div>failed to load</div> }
      {data ? <EventList items={featuredEvents} /> : <div>loading...</div> }
    </Fragment>
  );
}

export async function getStaticProps() {
  // const featuredPosts = getFeaturedPosts();
  const fetchEvents = await fetch(
    "https://events-1bf5a-default-rtdb.firebaseio.com/events.json"
  );
  const response = await fetchEvents.json();
  const transformEvent = [];
    for (let data in response) {
      transformEvent.push({
        id: data,
        title: response[data].title,
        descriptin: response[data].descriptin,
        image: response[data].image,
        date : response[data].date,
        location : response[data].location,
        isFeatured : response[data].isFeatured
      });
    }



  return {
    props: {
      events: transformEvent,
    },
    revalidate : 10
  };
}

export default HomePage;
