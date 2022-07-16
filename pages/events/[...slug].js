import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import { getFilteredEvents } from "../../dummy-data";
function FilteredEventsPage() {
  const router = useRouter();
  const filter = router.query.slug;

  if (!filter) {
    return <p className="center">Loading</p>;
  }
  const numYear = +filter[0];
  const nummonth = +filter[1];

  if (
    isNaN(numYear) ||
    isNaN(nummonth) ||
    numYear > 2030 ||
    numYear < 2020 ||
    nummonth < 1 ||
    nummonth > 12
  ) {
    return <p className="center">please Enter valid filter</p>;
  }

  const matchEvents = getFilteredEvents({
    year: numYear,
    month: nummonth,
  });

  if(!matchEvents || matchEvents.length === 0){
    return <p className="center" >no Event found for chosen filters</p>
  }

  console.log(matchEvents);

  return (
    <div>
      <EventList items={matchEvents} />
    </div>
  );
}

export default FilteredEventsPage;
