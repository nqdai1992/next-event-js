import { useRouter } from "next/router"
import { Fragment } from "react"
import { getAllEvents, getEventById } from "../../heplers/api-util"
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistic from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'


function EventDetailPage (props) {
    const event = props.event

    if (!event) {
        return <p>No event found!</p>
    }
    
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

export async function getStaticProps (context) {
    const { params } = context
    const eventId = params.id
    const event = await getEventById(eventId)

    if (!event) return { notFound: true }

    return {
        props: {
            event
        }
    }
}

export async function getStaticPaths () {
    const events = await getAllEvents();
    const paths = events.map(event => ({ params: { id: event.id }}))

    return {
        paths: paths,
        fallback: 'blocking'
    }
}