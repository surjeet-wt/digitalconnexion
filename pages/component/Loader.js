import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = ({ delay }) => {
  const [showLoader, setShowLoader] = useState(false);

  setTimeout(() => {
    setShowLoader(true);
  }, delay || 300);

  return (
    showLoader && (
      <div className="spinner_custom d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  );
};

export default Loader;
