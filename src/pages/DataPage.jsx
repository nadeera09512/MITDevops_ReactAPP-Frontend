import React, { useEffect, useState } from 'react';
import ButtonsSection from '../sections/DataPage/ButtonsSection';
import DataTable from '../sections/DataPage/DataTable';
import TitleComponent from '../Components/TitleComponent';
import { fetchStudentData } from '../Functions/dataFetch';
import LoadingPage from './LoadingPage';

function DataPage() {
  const [studentData, setStudentData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await setStudentData(await fetchStudentData());
    };
    fetchData();
  }, [studentData]);
  return (
    <div>
      <TitleComponent title={'Student List'} />

      {studentData ? <DataTable tableData={studentData} /> : <LoadingPage />}
      <ButtonsSection />
    </div>
  );
}

export default DataPage;
