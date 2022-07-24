import React from 'react';
import FormComponentAddStu from '../Components/FormComponentAddStu';
import TitleComponent from '../Components/TitleComponent';

function AddStudentPage() {
  return (
    <div>
      <TitleComponent title={'Add a new student'} />
      <FormComponentAddStu />
    </div>
  );
}

export default AddStudentPage;
