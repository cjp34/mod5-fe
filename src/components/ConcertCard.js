import React, {Fragment} from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const ConcertCard = (props) => {


    const addFollow = () => {
        alert('Added concert to follow list')
        let payload = {user: {'id': props.userBackend.id}, event: {'name': props.concert.name, 'img_url': props.concert.images[0].url, 'date': props.concert.dates.start.localDate, 'location': props.concert._embedded.venues[0].name, 'ticketmaster_id': props.concert.id, 'google_key': props.concert._embedded.venues[0].name.split(' ').join('+'), 'url': props.concert.url}}
        fetch('http://localhost:3000/events', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"                
            },
            body: JSON.stringify(payload)
        })
    }

    return(
        <Fragment>
            <Card style={{ width: '20rem', height: '32rem' }}>
            <Card.Img variant="top" src={props.concert.images[0].url} style={{width: "100%", height: "12rem", alignSelf: "center"}} />
                <Card.Body>
                    <Card.Title style={{fontSize: "auto"}}>{props.concert._embedded.attractions[0].name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>When: {props.concert.dates.start.localDate} </ListGroupItem>
                    <ListGroupItem>Location: {props.concert._embedded.venues[0].name}</ListGroupItem>
                    <ListGroupItem>
                        <button onClick={addFollow} className='button'>Add to follow list</button>
                    </ListGroupItem>
                </ListGroup>
                <Card.Body style={{alignItems: "center"}}>
                    <Card.Link href={props.concert.url} target="_blank" style={{textalign: "center", verticalAlign: "middle", margin: "auto"}}>Concert Website</Card.Link>
                    <Card.Link href={`https://www.google.com/maps/search/?api=1&query=${props.concert._embedded.venues[0].name.split(' ').join('+')}`}  target="_blank" style={{verticalAlign: "middle"}}>View on Map</Card.Link>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default ConcertCard;