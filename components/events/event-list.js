import EventItem from "./event-item";
import classes from "./event-list.module.css"

function EventList({items}){
    return(
        <div className={classes.wraper}>
            <h2>Featured Events</h2>
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

export default EventList;