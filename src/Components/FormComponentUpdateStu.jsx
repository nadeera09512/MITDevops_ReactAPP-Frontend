import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateStudent } from '../Functions/dataFetch';
import './FormComponent.css';
import * as routes from '../Routes/routes.js';

function FormComponentUpdateStu() {
  const navigate = useNavigate();
  const { id, fname, lname, age } = useParams();
  const [stuRegData, setstuRegData] = useState({
    fname: fname,
    lname: lname,
    age: age,
  });
  const set = (name) => {
    return ({ target: { value } }) => {
      setstuRegData((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const afterSubmit = async () => {
    await updateStudent(stuRegData, id)
      .then(
        setstuRegData({
          id: '',
          fname: '',
          lname: '',
          age: '',
        })
      )
      .then(navigate(routes.adminRoute(), { replace: true }));
  };

  return (
    <div className="form-base">
      <form className="form-form" onSubmit={afterSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="fname"
            value={stuRegData.fname}
            onChange={set('fname')}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="lname"
            value={stuRegData.lname}
            onChange={set('lname')}
          />
        </label>
        <label>
          Age
          <input
            type="text"
            name="age"
            value={stuRegData.age}
            onChange={set('age')}
          />
        </label>
        <button type="submit" className="form-button">
          Proceed
        </button>
      </form>
    </div>
  );
}

export default FormComponentUpdateStu;
