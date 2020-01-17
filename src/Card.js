import React from 'react';

const Card = ({id, name, email}) => {
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'">
      <img  alt="Robots" src={`https://robohash.org/${id}?size=200x200`}/>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

export default Card;