import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventDetail from "../../components/events/event-details";
function SpecificEvent() {
  const router = useRouter();
  const event = router.query.eventId;
  console.log(event)
  const detail = getEventById(event);
console.log(detail)
  if(!detail){
    return <h2>the Event not found</h2>
  }

  return (
    <div>
          <EventDetail
        title={detail.title}
        image={detail.image}
        date={detail.date}
        address={detail.location}
        description={detail.description}
      />

    </div>
  );
}

export default SpecificEvent;
