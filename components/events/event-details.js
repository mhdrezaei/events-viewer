import classes from './event-details.module.css';
import DateIcon from '../icons/date-icon';
import AdreessIcon from '../icons/address-icon';
function EventDetail({title , image , date , address , description}){
    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    
      const imagePath = "/" + image;
    return (
    <div className={classes.wrap}>
            <div className={classes.container}>
                <div className={classes.eventimage}>
                    <img src={imagePath} alt={title}/>
                    <div className={classes.title}>
                        <h2>{title}</h2>
                    </div>
                    <div className={classes.moreinfo}>
                    <div className={classes.address} >
                        <span><AdreessIcon/></span>
                        <span>{address}</span>
                    </div>
                    <div className={classes.date} >
                        <span><DateIcon/></span>
                        <span>{date}</span>
                    </div>
                    </div>
                </div>
                
                    
                    <div className={classes.description} >
                        <p>{description}</p>
                    </div>
                
            </div>
            </div>
        
        )
}


export default EventDetail;