import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { GiSoccerKick } from "react-icons/gi";
import { 
    Row, 
    Col, 
    Image, 
    ListGroup, 
    
} from 'react-bootstrap'

const PlayerScreen = () => {
    const [player, setPlayer] = useState({});

    const { id: playerId } = useParams();
    
    useEffect(() => {
        const fetchPlayer = async() => {
            const { data } = await axios.get(`/api/players/${playerId}`)
            setPlayer(data);
        }

        fetchPlayer();
    },[playerId])

  return (
    <>
    <Link className='btn btn-light my-3' to='/'>
        Go Back
    </Link>
    <Row>
        <Col md={4} >
            <Image src={player.image} alt={player.name} fluid />
        </Col>
        <Col md={4}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{player.name}</h3>
                </ListGroup.Item>
            </ListGroup>
        </Col>
    </Row>
    <Row>
        <Col md={6}>
            <div >
                <div style={{fontSize: "100px"}}><GiSoccerKick /></div>
                <div style={{fontSize: "50px"}}>{player.goals}</div>
                <div style={{fontSize: "50px"}}>Goals</div>
            </div>
        
        </Col>
        <Col md={6}></Col>
    </Row>
    </>
  )
}

export default PlayerScreen