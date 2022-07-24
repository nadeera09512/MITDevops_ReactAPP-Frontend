// const routes = () => {
//   this.adminRoute = process.env.REACT_APP_ADMIN_ROUTE;
//   this.userRoute = process.env.REACT_APP_USER_ROUTE;
//   this.addStudentRoute = process.env.REACT_APP_ADD_STUDENT_ROUTE;
//   this.addUserRoute = process.env.REACT_APP_ADD_USER_ROUTE;
//   this.loadingRoute = process.env.REACT_APP_ADD_LOADING_ROUTE;
//   this.updateStudentRoute = process.env.REACT_APP_UPDATE_STUDENT;
// };

const adminRoute = () => {
  return process.env.REACT_APP_ADMIN_ROUTE;
};
const userRoute = () => {
  return process.env.REACT_APP_USER_ROUTE;
};

const addStudentRoute = () => {
  return process.env.REACT_APP_ADD_STUDENT_ROUTE;
};

const addUserRoute = () => {
  return process.env.REACT_APP_ADD_USER_ROUTE;
};

const loadingRoute = () => {
  return process.env.REACT_APP_ADD_LOADING_ROUTE;
};

const updateStudentRoute = () => {
  return process.env.REACT_APP_UPDATE_STUDENT;
};

const javaRoute = () => {
  return process.env.REACT_APP_JAVA;
};

const javaGetStudentsRoute = () => {
  return process.env.REACT_APP_JAVA_GET_STUDENTS;
};

const javaDeleteStudentsRoute = () => {
  return process.env.REACT_APP_JAVA_DELETE_STUDENT;
};

const javaAddStudent = () => {
  return process.env.REACT_APP_JAVA_ADD_STUDENT;
};

const javaUpdateStudent = () => {
  return process.env.REACT_APP_JAVA_UPDATE_STUDENT;
};

const mongoRoute = () => {
  return process.env.REACT_APP_MONGO;
};

const mongoSignupRoute = () => {
  return process.env.REACT_APP_MONGO_SIGNUP;
};

const mongoLoginRoute = () => {
  return process.env.REACT_APP_MONGO_LOGIN;
};

export {
  adminRoute,
  userRoute,
  addStudentRoute,
  addUserRoute,
  loadingRoute,
  updateStudentRoute,
  javaRoute,
  javaGetStudentsRoute,
  javaDeleteStudentsRoute,
  javaAddStudent,
  javaUpdateStudent,
  mongoRoute,
  mongoSignupRoute,
  mongoLoginRoute,
};
