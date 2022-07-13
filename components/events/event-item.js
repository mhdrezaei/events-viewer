import Link from "next/link";
import classes from "./event-item.module.css";
import RightArrow from '../icons/arrow-right-icon';
import DateIcon from '../icons/date-icon';
import AdreessIcon from '../icons/address-icon';
function EventItem({ id, title, location, image, date }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;
  const imagePath = "/" + image;
  return (
    <li className={classes.item}>
      <img className={classes.image} src={imagePath} alt={title} />
      <div className={classes.detail}>
        <div className={classes.eventinfo}>
          <h2 className={classes.title}>{title}</h2>
          <div>
            <time className={classes.time}>
              <span><DateIcon/></span>
              {humanReadableDate}</time>
          </div>
          <div>
            <address className={classes.address}>
            <span><AdreessIcon/></span>
              {formatedAddress}</address>
          </div>
        </div>
        
      </div>
      <div className={classes.explore}>
          <Link className={classes.explore} href={exploreLink}>
           <a>
             <span>Explore event</span>
             <span ><RightArrow className={classes.icon} /></span>
            </a>
            
            </Link>
        </div>
    </li>
  );
}

export default EventItem;
