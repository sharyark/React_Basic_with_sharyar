import React, { useState } from 'react';

function Description({ user }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const renderDescription = () => {
    if (!showFullDescription) {
      // Display only the first three words
      const words = user.description.split(' ').slice(0, 3).join(' ');
      return (
        <p onClick={toggleDescription}>{words}...</p>
      );
    } else {
      // Display the full description
      return (
        <p onClick={toggleDescription}>{user.description}</p>
      );
    }
  };

  return (
    <div>
      {renderDescription()}
    </div>
  );
}

export default Description;
