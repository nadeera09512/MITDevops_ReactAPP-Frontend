import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setStudentData } from '../Functions/dataFetch';
import './FormComponent.css';
import * as routes from '../Routes/routes.js';

function FormComponentAddStu() {
  const navigate = useNavigate();
  const [stuRegData, setstuRegData] = useState({
    id: Math.floor(Math.random() * 1000000),
    fname: '',
    lname: '',
    age: '',
  });
  const set = (name) => {
    return ({ target: { value } }) => {
      setstuRegData((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const afterSubmit = async () => {
    await setStudentData(stuRegData)
      .then(
        setstuRegData({
          id: '',
          fname: '',
          lname: '',
          age: '',
        })
      )
      .then(navigate(routes.adminRoute()));
  };

  return (
    <div className="form-base">
      <form className="form-form" onSubmit={afterSubmit}>
        <label>
          First Name
          <input type="text" name="fname" onChange={set('fname')} />
        </label>
        <label>
          Last Name
          <input type="text" name="lname" onChange={set('lname')} />
        </label>
        <label>
          Age
          <input type="text" name="age" onChange={set('age')} />
        </label>
        <button type="submit" className="form-button">
          Proceed
        </button>
      </form>
    </div>
  );
}

export default FormComponentAddStu;
