import React, { useMemo, useEffect, useState } from 'react';
import { useTable } from 'react-table';
import './DataTable.css';
import {
  fetchStudentData,
  removeStudentData,
} from '../../Functions/dataFetch.js';
import { useNavigate } from 'react-router-dom';

function DataTable({ tableData }) {
  const navigate = useNavigate();
  const columns = useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'FirstName',
        accessor: 'fname',
      },
      { Header: 'LastName', accessor: 'lname' },
      { Header: 'Age', accessor: 'age' },
    ],
    []
  );
  // console.log(tableData);
  // console.log('w');
  const data = useMemo(() => [...tableData.data], [tableData.data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        margin: '10vh',
      }}
    >
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
