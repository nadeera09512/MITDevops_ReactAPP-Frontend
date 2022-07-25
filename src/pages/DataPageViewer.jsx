import React, { useEffect, useState } from 'react';
import ButtonsSection from '../sections/DataPage/ButtonsSection';
import DataTable from '../sections/DataPageViewer/DataTable';
import TitleComponent from '../Components/TitleComponent';
import { fetchStudentData } from '../Functions/dataFetch';
import LoadingPage from './LoadingPage';
import { useNavigate } from 'react-router-dom';

function DataPageViewer() {
  const navigate = useNavigate();
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
      <div className="dataBaseButton-container">
        <button
          className="dataBaseButton-button"
          onClick={(e) => {
            navigate(`/studentInventory/`);
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default DataPageViewer;
