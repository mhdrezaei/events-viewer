import { useRouter } from "next/router";
import EventItem from "./event-item";
import classes from "./event-list.module.css"
import FilterEvents from "./filter-events";

function AllEvents({items}){
    const router = useRouter();

    const applyFillterHandle = (year , month)=>{
        console.log(year , month)
        router.push(`events/${year}/${month}`);

    }
    return(
        <div className={classes.wraper}>
            <h2>All Events</h2>
            <FilterEvents applyFillter={applyFillterHandle}/>
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