import React, { useState, useEffect } from 'react';



const Loader = () => {
    const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide loader after 2 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (!visible) return null; // Don't render anything if hidden
    // Render the loader
  return (
  <div class="Loader" id="Loader"></div>
  );
}
export default Loader;  