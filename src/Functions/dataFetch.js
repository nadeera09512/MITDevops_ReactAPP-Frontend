// import React from 'react';
import axios from 'axios';
import * as routes from '../Routes/routes.js';

const fetchStudentData = async () => {
  return await axios
    .get(routes.javaGetStudentsRoute(), {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
      },
      data: {},
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

const removeStudentData = async (id) => {
  return await axios
    .delete(`${routes.javaDeleteStudentsRoute().substring(0, 20)}${id}`, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
      },
      data: {},
    })
    .then((response) => {
      console.log(id);
      console.log('fine');
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

const setStudentData = async (studentData) => {
  console.log(studentData);
  return await axios
    .post(routes.javaAddStudent(), studentData, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
      },
      data: {},
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateStudent = async (studentData, id) => {
  studentData = { id, ...studentData };
  await axios
    .delete(`${routes.javaDeleteStudentsRoute().substring(0, 20)}${id}`, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
      },
      data: {},
    })
    .catch((error) => {
      console.log(error);
    });

  return await axios
    .post(routes.javaUpdateStudent(), studentData, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
      },
      data: {},
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

const addUser = async (userData) => {
  await axios
    .post(routes.mongoSignupRoute(), userData, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
      },
      data: {},
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

const loginUser = async (userData) => {
  return await axios
    .post(routes.mongoLoginRoute(), userData, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
      },
      data: {},
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export {
  fetchStudentData,
  removeStudentData,
  setStudentData,
  updateStudent,
  addUser,
  loginUser,
};
