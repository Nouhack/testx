
import React from 'react';

const Card = React.memo(function Card(props) {
  console.log('rerender from card');
  return (
    <div className='test'>
      hello from card
    </div>
  );
});

export default Card;
