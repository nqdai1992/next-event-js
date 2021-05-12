import { useRouter } from "next/router"
import { Fragment } from "react"
import { getEventById } from "../../dummy-data"
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistic from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'


function EventDetailPage () {
    const router = useRouter()
    
    const event = getEventById(router.query.id)

    if (!event) {
        return <p>No event found!</p>
    }
    console.log(event)
    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistic date={event.date} address={event.location} image={event.image} imageAlf={event.title}/>
            <EventContent>
                <p>
                    {event.description}
                </p>
            </EventContent>
        </Fragment>        
    )
}

export default EventDetailPage