import Link from "next/link";
function EventItem({ id, title, location, image, date }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  const imagePath = "/" + image;
  return (
    <li>
      <img src={imagePath} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formatedAddress}</address>
          </div>
        </div>
        <div>
          {" "}
          <Link href={exploreLink}>Explore event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
