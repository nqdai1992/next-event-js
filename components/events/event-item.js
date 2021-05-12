import Link from "next/link"
import classes from  './event-item.module.css'
import Button from '../ui/Button'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import ArrowRight from '../icons/arrow-right'

function EventItem (props) {
    const { title, image, date, location, id } = props
    
    const formatedDate = new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: 'long',
        year: 'numeric'
    })

    const formatedLocation = location.replace(', ', '\n')

    const formatImageSource = '/' + image

    const explorLink = `/events/${id}`

    return (
        <li className={classes.item}>
            <img src={formatImageSource} alt="" />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{formatedDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formatedLocation}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={explorLink}>
                        <span>Explore Event</span> 
                        <span className={classes.icon}>
                            <ArrowRight />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem;