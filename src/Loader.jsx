import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide loader after 2 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="Loader" id="Loader"></div>
  );
};

export default Loader;
