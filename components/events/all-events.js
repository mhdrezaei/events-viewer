import EventItem from "./event-item";
import classes from "./event-list.module.css"
import FilterEvents from "./filter-events";

function AllEvents({items}){
    return(
        <div className={classes.wraper}>
            <h2>All Events</h2>
            <FilterEvents/>
        <ul>
        {items.map((item) => (
             <EventItem 
                key={item.id}
                id={item.id}
                title={item.title}
                location={item.location}
                image={item.image}
                date={item.date}
            />

        ))}
        </ul>
        </div>
    );
}

export default AllEvents;