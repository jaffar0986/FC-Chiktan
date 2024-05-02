import React from 'react'
import { Row, Col} from 'react-bootstrap'
import players from '../Players'
import Player from '../components/Player'

const HomeScreen = () => {
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