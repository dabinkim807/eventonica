import Card from 'react-bootstrap/Card';
import Moment from "react-moment";

const EventCard = (props) => {
  // key={event.id}
  // title={event.title}
  // location={event.location}
  // time={event.eventtime}

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Date: {!props.time ? "TBD" : <Moment format={"DD/MM/YYYY"}>{props.time}</Moment>}</Card.Subtitle>
        <Card.Text>
          {props.location}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default EventCard;