import EventItem from "./event-item";

function EventList({items}){
    return(
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
    );
}

export default EventList;