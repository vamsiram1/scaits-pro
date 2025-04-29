import SideBar from "./side-top-nav-bars";
import { Link } from 'react-router-dom';
import { useState } from 'react';   

function DataTable() {

    const data = [
        { CITY_ID: "01", CITY_CODE: "guntur", CITY_NAME: "Gardens Branch", STATUS: "Active", DISTRICT_ID: "D1", ZONE: "Z1", PAYROLL_CITY_CODE: "PC1", SYNC_STATUS: "01", SYNC_DATA: "Guntur" },
        { CITY_ID: "02", CITY_CODE: "vijayawada", CITY_NAME: "Main Branch", STATUS: "Active", DISTRICT_ID: "D2", ZONE: "Z2", PAYROLL_CITY_CODE: "PC2", SYNC_STATUS: "01", SYNC_DATA: "Vijayawada" },
        { CITY_ID: "03", CITY_CODE: "hyd", CITY_NAME: "Hyd Branch", STATUS: "Active", DISTRICT_ID: "D3", ZONE: "Z3", PAYROLL_CITY_CODE: "PC3", SYNC_STATUS: "01", SYNC_DATA: "Hyd" },
        { CITY_ID: "04", CITY_CODE: "nellore", CITY_NAME: "Nellore Branch", STATUS: "Active", DISTRICT_ID: "D4", ZONE: "Z4", PAYROLL_CITY_CODE: "PC4", SYNC_STATUS: "01", SYNC_DATA: "Nellore" },
        { CITY_ID: "05", CITY_CODE: "vizag", CITY_NAME: "Vizag Branch", STATUS: "Active", DISTRICT_ID: "D5", ZONE: "Z5", PAYROLL_CITY_CODE: "PC5", SYNC_STATUS: "01", SYNC_DATA: "Vizag" },
        { CITY_ID: "06", CITY_CODE: "tirupati", CITY_NAME: "Tirupati Branch", STATUS: "Active", DISTRICT_ID: "D6", ZONE: "Z6", PAYROLL_CITY_CODE: "PC6", SYNC_STATUS: "01", SYNC_DATA: "Tirupati" },
        { CITY_ID: "07", CITY_CODE: "kurnool", CITY_NAME: "Kurnool Branch", STATUS: "Active", DISTRICT_ID: "D7", ZONE: "Z7", PAYROLL_CITY_CODE: "PC7", SYNC_STATUS: "01", SYNC_DATA: "Kurnool" },
        { CITY_ID: "08", CITY_CODE: "anantapur", CITY_NAME: "Anantapur Branch", STATUS: "Active", DISTRICT_ID: "D8", ZONE: "Z8", PAYROLL_CITY_CODE: "PC8", SYNC_STATUS: "01", SYNC_DATA: "Anantapur" },
        { CITY_ID: "09", CITY_CODE: "ongole", CITY_NAME: "Ongole Branch", STATUS: "Active", DISTRICT_ID: "D9", ZONE: "Z9", PAYROLL_CITY_CODE: "PC9", SYNC_STATUS: "01", SYNC_DATA: "Ongole" },
        { CITY_ID: "10", CITY_CODE: "kadapa", CITY_NAME: "Kadapa Branch", STATUS: "Active", DISTRICT_ID: "D10", ZONE: "Z10", PAYROLL_CITY_CODE: "PC10", SYNC_STATUS: "01", SYNC_DATA: "Kadapa" },
        { CITY_ID: "11", CITY_CODE: "machilipatnam", CITY_NAME: "Machili Branch", STATUS: "Active", DISTRICT_ID: "D11", ZONE: "Z11", PAYROLL_CITY_CODE: "PC11", SYNC_STATUS: "01", SYNC_DATA: "Machilipatnam" },
        { CITY_ID: "12", CITY_CODE: "eluru", CITY_NAME: "Eluru Branch", STATUS: "Active", DISTRICT_ID: "D12", ZONE: "Z12", PAYROLL_CITY_CODE: "PC12", SYNC_STATUS: "01", SYNC_DATA: "Eluru" },
        { CITY_ID: "13", CITY_CODE: "rajahmundry", CITY_NAME: "Rajahmundry Branch", STATUS: "Active", DISTRICT_ID: "D13", ZONE: "Z13", PAYROLL_CITY_CODE: "PC13", SYNC_STATUS: "01", SYNC_DATA: "Rajahmundry" },
    ];

    const [currentPage, setCurrentPage] = useState(1);  
    const rowsPerPage = 12;   

    
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

    
    const totalPages = Math.ceil(data.length / rowsPerPage);

    
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <SideBar />
            <div className="dashboard-container">
                <div className="header">
                    <h1>City</h1>
                    <div className="buttons">
                        <button className="filter">
                            <span className="icon">🔍</span> Filter <span className="notification">0</span>
                        </button>
                        <button className="export">
                            <span className="icon">⬆️</span> Export
                        </button>
                        <button className="add-new-field">
                            <Link to="/add_new_field" style={{ color: "white", textDecoration: "none" }}>+ Add New Field</Link>
                        </button>
                    </div>
                </div>
                <hr className="narrow-hr" />

                {/* Table data */}
                <div className="table-scroll-container">
                    <table className="city-table">
                        <thead className="headings">
                            <tr id="table-tr">
                                <th><input type="checkbox" /></th>
                                <th style={{color:"#84919a"}}>CITY ID</th>
                                <th style={{color:"#84919a"}}>CITY CODE</th>
                                <th style={{color:"#84919a"}}>CITY NAME</th>
                                <th style={{color:"#84919a"}}>STATUS</th>
                                <th style={{color:"#84919a"}}>DISTRICT ID</th>
                                <th style={{color:"#84919a"}}>ZONE ID</th>
                                <th style={{color:"#84919a"}}>PAYROLL CITY CODE</th>
                                <th style={{color:"#84919a"}}>SYNC STATUS</th>
                                <th style={{color:"#84919a"}}></th>
                            </tr>
                        </thead>

                        <tbody className="values-styling">
                            {currentRows.map((item, index) => (
                                <tr key={index}>
                                    <td><input type="checkbox" /></td>
                                    <td>{item.CITY_ID}</td>
                                    <td>{item.CITY_CODE}</td>
                                    <td>{item.CITY_NAME}</td>
                                    <td>{item.STATUS}</td>
                                    <td>{item.DISTRICT_ID}</td>
                                    <td>{item.ZONE}</td>
                                    <td>{item.PAYROLL_CITY_CODE}</td>
                                    <td>{item.SYNC_STATUS}</td>
                                    <td>
                                        <button className="icon-btn" title="Delete">
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                        <button className="icon-btn" title="Edit">
                                            <Link to="/edit_field" style={{ color: "#69747c", textDecoration: "none" }}>
                                                <i className="fas fa-edit"></i>
                                            </Link>
                                        </button>
                                        <button className="icon-btn" title="View">
                                            <i className="fas fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                
                </div>


                    {/* Pagination buttons */}
                    <div className="pagination-container">
                        <button className="pagination-btn left-btn" onClick={goToPreviousPage} disabled={currentPage === 1}>
                            ← Previous
                        </button>

                        <div className="page-numbers">
                            <span className="page active">{currentPage}</span> / <span className="page">{totalPages}</span>
                        </div>

                        <button className="pagination-btn right-btn" onClick={goToNextPage} disabled={currentPage === totalPages}>
                            Next →
                        </button>
                    </div>

            </div>
        </>
    );
}

export default DataTable;
