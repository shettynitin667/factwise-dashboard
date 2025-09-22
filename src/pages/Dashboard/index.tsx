import React from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, ColGroupDef } from "ag-grid-community";

import styles from "./Dashboard.module.scss";

import mockData from "../../mockData.json"

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  position: string;
  salary: number;
  hireDate: string;
  age: number;
  location: string;
  performanceRating: number;
  projectsCompleted: number;
  isActive: boolean;
  skills: string[];
  manager: string | null;
}

interface HierarchicalEmployee extends Employee {
  children?: HierarchicalEmployee[];
  isManager?: boolean;
  teamSize?: number;
  avgTeamPerformance?: number;
  totalTeamSalary?: number;
  level?: number;
}


const GridData: React.FC = () => {
  const ChipRenderer = (params: any) => {
    return (
      <React.Fragment>
        {params.value.map((skill: string) => (
          <span key={skill} className={styles.chip}>
            {skill}
          </span>
        ))}
      </React.Fragment>
    );
  };

  // Define column definitions
  const columnDefs: (ColDef | ColGroupDef)[] = [
    { headerName: "ID", field: "id", width: 80 },
     {
      headerName: "Full Name",
      valueGetter: (params) => `👤 ${params.data.firstName} ${params.data.lastName}`,
      width: 200,
    },
    { headerName: "Email", field: "email", width: 250 },
    {
      headerName: "Skills",
      cellRenderer: ChipRenderer,
      field: "skills",
      width: 300,
    },
    { headerName: "Department", field: "department", width: 150, rowGroup: true, hide: true },
    { headerName: "Position", field: "position", width: 200 },
    { headerName: "Location", field: "location", width: 120 },
    { headerName: "Salary ($)", field: "salary", filter: "agNumberColumnFilter", width: 120, aggFunc: "sum" },
    {
      headerName: "Performance Rating",
      field: "performanceRating",
      filter: "agNumberColumnFilter",
      width: 150,
    },
    { headerName: "Hire Date", field: "hireDate", filter: "agDateColumnFilter", width: 200 },
    {
      headerName: "Projects Completed",
      field: "projectsCompleted",
      filter: "agNumberColumnFilter",
      width: 160,
    },
    {
      headerName: "Active?",
      field: "isActive",
      valueGetter: (params) => (params.data.isActive ? "🟢 Yes" : "🔴 No"),
      width: 100,
    },
  ];


  // Default column properties
  const defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
    resizable: true,
  };

  return (
    <div className={`${styles.gridContainer} theme-transition`}>
      <div 
        className={styles.container}
      >
        <AgGridReact
          rowData={mockData.employees} // Employee data based on view mode
          columnDefs={columnDefs} // Column definitions
          defaultColDef={defaultColDef} // Default column properties
          pagination={true}
          paginationPageSize={15}
          suppressRowClickSelection={true}
        //   autoGroupColumnDef={autoGroupColumnDef}
          rowSelection="multiple"
          animateRows={true}
        />
      </div>
    </div>
  );
};

export default GridData;