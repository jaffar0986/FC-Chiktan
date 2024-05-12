import React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col} from 'react-bootstrap';
import Player from '../components/Player';
import axios from 'axios';

const HomeScreen = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const { data } = await axios.get('/api/players');
      setPlayers(data);
    };

    fetchPlayers();
  },[]);

  return (
    <>
    <div>
        <h3>Forward</h3>
        <Row>
            { players.map((player) => (
                <Col key={player._id} sm={12} md={6} lg={4} xl={4}>
                    <Player player={player} />
                </Col>
            ))}
        </Row>
    </div>
    </>
    
  )
}

export default HomeScreen