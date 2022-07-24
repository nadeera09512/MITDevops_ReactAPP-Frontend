import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FunctionalButtons.css';

function FunctionalButtons({ text, navigateRoute }) {
  const navigate = useNavigate();
  return (
    <div className="funcButton-container">
      <button
        className="funcButton-button"
        onClick={(e) => {
          navigate(`/${navigateRoute}`);
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default FunctionalButtons;
