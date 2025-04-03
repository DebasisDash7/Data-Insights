import React, { useState, useMemo } from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import healthcareData from "../data";
import "../styles/Reports.css";

const Reports = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtering hospitals based on search query
  const filteredData = useMemo(() => {
    return healthcareData.filter((hospital) =>
      hospital.hospital.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const columns = useMemo(
    () => [
      { Header: "Hospital", accessor: "hospital" },
      { Header: "Patients Treated", accessor: "patients" },
      { Header: "Emergency Cases", accessor: "emergencyCases" },
      { Header: "Surgeries Performed", accessor: "surgeries" },
      { Header: "ICU Admissions", accessor: "icuAdmissions" },
      { Header: "Revenue ($)", accessor: "revenue" },
      { Header: "Doctor Consultations", accessor: "doctorVisits" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Only using `page`, removed `rows`
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
  } = useTable(
    { columns, data: filteredData, initialState: { pageSize: 10 } },
    useSortBy,
    usePagination
  );

  return (
    <div className="reports-container">
      <h2 className="reports-title">Hospital Performance Report</h2>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search hospitals..."
        className="search-box"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Table */}
      <div className="table-wrapper">
        <table {...getTableProps()} className="reports-table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => { // Using `page` instead of `rows`
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>

      {/* View Trends Button */}
      <button className="view-trends-btn" onClick={() => window.location.href = "/dashboard"}>
        View Trends
      </button>
    </div>
  );
};

export default Reports;
