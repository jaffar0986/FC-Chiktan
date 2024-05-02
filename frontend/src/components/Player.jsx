import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Player = ({ player }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/player/${player._id}`}>
        <Card.Img src={player.image} variant='top' />
      </Link>

      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
            <div>
            <Link to={`/player/${player._id}`} > {/* Align items */}
          <Card.Title as="div">
            <strong>{player.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text>
          Position: {player.position}
        </Card.Text>
            </div>
        
            <div className="text-end">
        <Link to={`/player/${player._id}`}>
         {/* Right-align number */}
            <strong style={{ fontSize: '80px' }}>{player.number}</strong> {/* Increase font size */}
          
        </Link>
        </div>
        </div>
        
        
      </Card.Body>
    </Card>
  );
};

export default Player;
