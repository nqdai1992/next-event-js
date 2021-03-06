import { getFeaturedEvents } from "../heplers/api-util";
import EventList from '../components/events/event-list'

function HomePage (props) {
  return (
      <EventList items={props.events} />
  )
}

export default HomePage;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}