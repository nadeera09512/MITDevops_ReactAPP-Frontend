import React, { useMemo, useEffect, useState } from 'react';
import { useTable } from 'react-table';
import './DataTable.css';
import * as routes from '../../Routes/routes.js';
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

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        Header: 'Action',
        accessor: 'action',
        Cell: ({ row }) => (
          <div>
            <button
              onClick={(e) => {
                navigate(
                  `${routes.updateStudentRoute().substring(0, 27)}/${
                    row.values.id
                  }/${row.values.fname}/${row.values.lname}/${row.values.age}`
                );
              }}
              style={{
                margin: '0 0.5vw',
                backgroundColor: 'rgba(1,100,34,0.7)',
                borderRadius: '10px',
                color: 'white',
                border: '0px',
                padding: '7px',
                cursor: 'pointer',
              }}
            >
              Update
            </button>
            <button
              onClick={(e) => {
                removeStudentData(row.values.id);
              }}
              style={{
                margin: '0 0.5vw',
                backgroundColor: 'rgba(100,0,0,0.7)',
                borderRadius: '10px',
                color: 'white',
                border: '0px',
                padding: '7px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </div>
        ),
      },
    ]);
  };
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, tableHooks);

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
