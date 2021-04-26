import React from 'react';
import { useParams } from 'react-router';

const Hallo = () => {
  const {name} = useParams();
  console.log(name);
  return (
    <div>Hallo {name}</div>
  )
}

export default Hallo;