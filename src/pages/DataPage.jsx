import React, { useEffect, useState } from 'react';
import ButtonsSection from '../sections/DataPage/ButtonsSection';
import DataTable from '../sections/DataPage/DataTable';
import TitleComponent from '../Components/TitleComponent';
import { fetchStudentData } from '../Functions/dataFetch';
import LoadingPage from './LoadingPage';
import './DataPage.css';
import { useNavigate } from 'react-router-dom';

function DataPage() {
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
      <TitleComponent title={'Students List'} />

      {studentData ? <DataTable tableData={studentData} /> : <LoadingPage />}
      <ButtonsSection />
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

export default DataPage;
