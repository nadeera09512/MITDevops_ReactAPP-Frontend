import React from 'react';
import { useNavigate } from 'react-router-dom';
import FunctionalButtons from '../../Components/FunctionalButtons';
import './ButtonsSection.css';
import * as routes from '../../Routes/routes.js';

function ButtonsSection() {
  const navigate = useNavigate();
  return (
    <div className="funcButton-container">
      <FunctionalButtons
        text={'Add Student'}
        navigateRoute={routes.addStudentRoute().substring(1)}
      />
      <FunctionalButtons
        text={'Add User'}
        navigateRoute={routes.addUserRoute().substring(1)}
      />
    </div>
  );
}

export default ButtonsSection;
