import React, { useState, useEffect } from 'react';

function Welcome() {
  const message_welcome = ['Relocate', 'Explore', 'Connect','Meet'];
  const [message, set_message] = useState(0);

  useEffect(() => {
    const change_int = setInterval(() => {
      set_message(index_before =>
        (index_before + 1) % message_welcome.length
      );
    }, 3000); 

    return () => clearInterval(change_int); 
}, [message_welcome.length]);

return (
  <div id='message'>
    <h1>{message_welcome[message]}</h1>
  </div>
);
}

export default Welcome;
