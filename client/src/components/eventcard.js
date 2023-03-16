import Card from 'react-bootstrap/Card';
// instead of boostrap card, need to import react table and generate data on table component
import Moment from "react-moment";

const EventCard = (props) => {
  // key={event.id}
  // name={event.name}
  // date={event.date} OR time={event.eventtime} ???
  // description={event.description}
  // category={event.category}
  // favorite={event.favorite}

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Date: {!props.time ? "TBD" : <Moment format={"DD/MM/YYYY"}>{props.time}</Moment>}</Card.Subtitle>
        <Card.Subtitle>Favorite: {props.favorite}</Card.Subtitle>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text>
          Category: {props.category}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default EventCard;