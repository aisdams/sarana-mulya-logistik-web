import React, { useEffect, useState } from 'react';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Hide the loader after 5 seconds
  }, []);

  return isVisible ? (
    <div className="loader-container">
      {' '}
      <span className="loader"></span>{' '}
    </div>
  ) : null;
}
