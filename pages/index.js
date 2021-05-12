import { getFeaturedEvents } from "../dummy-data";
import EventList from '../components/events/event-list'

function HomePage () {
  const featureEvent = getFeaturedEvents()

  return (
    <div>
      <EventList items={featureEvent} />
    </div>
  )
}

export default HomePage;