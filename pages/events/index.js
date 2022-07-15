import AllEvents from "../../components/events/all-events";
import {getAllEvents} from "../../dummy-data"
function EventsPage(){

    const events = getAllEvents();
    return <AllEvents items={events} />
}

export default EventsPage;