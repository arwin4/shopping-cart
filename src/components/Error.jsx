import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <>
      There was an error displaying this element.{' '}
      <Link to="/">Go back to the home page</Link>
    </>
  );
}
