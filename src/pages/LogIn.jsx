import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TitleComponent from '../Components/TitleComponent';
import { loginUser } from '../Functions/dataFetch';
import * as routes from '../Routes/routes.js';

function LogInPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    userName: '',
    password: '',
  });
  const set = (name) => {
    return ({ target: { value } }) => {
      setUserData((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const afterSubmit = async (e) => {
    e.preventDefault();
    await loginUser(userData).then((result) => {
      if (result === undefined) {
        alert('Incorrect username or password');
        navigate(0);
      }
      if (result.data.data.role === 'admin') {
        navigate(routes.adminRoute());
      } else if (result.data.data.role === 'viewer') {
        navigate(routes.userRoute());
      }
    });
  };

  return (
    <div>
      <div>
        <TitleComponent title={'LogIn'} />
        <div className="form-base">
          <form className="form-form" onSubmit={afterSubmit}>
            <label>
              UserName
              <input type="text" name="userName" onChange={set('userName')} />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                onChange={set('password')}
              />
            </label>
            <input type="submit" value="Proceed" className="form-button" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
