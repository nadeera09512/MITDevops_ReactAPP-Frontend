import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TitleComponent from '../Components/TitleComponent';
import { addUser } from '../Functions/dataFetch';

function AddUser() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    userName: '',
    password: '',
    role: '',
  });

  const set = (name) => {
    return ({ target: { value } }) => {
      setUserData((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const handleChange = (e) => {
    setUserData((oldValues) => ({ ...oldValues, role: e.target.value }));
    // this.setUserData((oldValues) => ({ ...oldValues, role: role }));
  };

  const afterSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    await addUser(userData)
      .then(setUserData({ userName: '', password: '', role: '' }))
      .then(navigate('/studentInventory'))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <TitleComponent title={'Add User'} />
      <div className="form-base">
        <form className="form-form" onSubmit={afterSubmit}>
          <label>
            UserName
            <input type="text" name="userName" onChange={set('userName')} />
          </label>
          <label>
            Password
            <input type="password" name="password" onChange={set('password')} />
          </label>
          <label className="form-role">
            Role
            <div className="form-checkboxLine">
              <label>
                <input
                  type="checkbox"
                  name="admin"
                  value="admin"
                  onChange={(e) => handleChange(e)}
                />
                Admin
              </label>
              <label>
                <input
                  type="checkbox"
                  name="viewer"
                  value="viewer"
                  onChange={(e) => handleChange(e)}
                />
                Viewer
              </label>
            </div>
          </label>
          <input type="submit" value="Proceed" className="form-button" />
        </form>
      </div>
    </div>
  );
}

export default AddUser;
