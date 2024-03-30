// Properties.js
import React from "react";

const Properties = ({ responseData }) => {
  return (
    <div>
      <h2>New Page</h2>
      {responseData ? (
        <div>
          <p>API Response Data:</p>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      ) : (
        <p>No response data available</p>
      )}
    </div>
  );
};

export default Properties;
