import SideBar from "./side-top-nav-bars";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function DataTable() {

    const data = [
        { CITY_ID: "01", CITY_CODE: "Guntur", CITY_NAME: "Gardens Branch", STATUS: "Active", DISTRICT_ID: "D1", ZONE: "Z1", PAYROLL_CITY_CODE: "PC1", SYNC_STATUS: "01", SYNC_DATA: "Guntur" },
        { CITY_ID: "02", CITY_CODE: "Vijayawada", CITY_NAME: "Main Branch", STATUS: "Active", DISTRICT_ID: "D2", ZONE: "Z2", PAYROLL_CITY_CODE: "PC2", SYNC_STATUS: "01", SYNC_DATA: "Vijayawada" },
        { CITY_ID: "03", CITY_CODE: "Hyd", CITY_NAME: "Hyd Branch", STATUS: "Active", DISTRICT_ID: "D3", ZONE: "Z3", PAYROLL_CITY_CODE: "PC3", SYNC_STATUS: "01", SYNC_DATA: "Hyd" },
        { CITY_ID: "04", CITY_CODE: "Nellore", CITY_NAME: "Nellore Branch", STATUS: "Active", DISTRICT_ID: "D4", ZONE: "Z4", PAYROLL_CITY_CODE: "PC4", SYNC_STATUS: "01", SYNC_DATA: "Nellore" },
        { CITY_ID: "05", CITY_CODE: "Vizag", CITY_NAME: "Vizag Branch", STATUS: "Active", DISTRICT_ID: "D5", ZONE: "Z5", PAYROLL_CITY_CODE: "PC5", SYNC_STATUS: "01", SYNC_DATA: "Vizag" },
        { CITY_ID: "06", CITY_CODE: "Tirupati", CITY_NAME: "Tirupati Branch", STATUS: "Active", DISTRICT_ID: "D6", ZONE: "Z6", PAYROLL_CITY_CODE: "PC6", SYNC_STATUS: "01", SYNC_DATA: "Tirupati" },
        { CITY_ID: "07", CITY_CODE: "Kurnool", CITY_NAME: "Kurnool Branch", STATUS: "Active", DISTRICT_ID: "D7", ZONE: "Z7", PAYROLL_CITY_CODE: "PC7", SYNC_STATUS: "01", SYNC_DATA: "Kurnool" },
        { CITY_ID: "08", CITY_CODE: "Anantapur", CITY_NAME: "Anantapur Branch", STATUS: "Active", DISTRICT_ID: "D8", ZONE: "Z8", PAYROLL_CITY_CODE: "PC8", SYNC_STATUS: "01", SYNC_DATA: "Anantapur" },
        { CITY_ID: "09", CITY_CODE: "Ongole", CITY_NAME: "Ongole Branch", STATUS: "Active", DISTRICT_ID: "D9", ZONE: "Z9", PAYROLL_CITY_CODE: "PC9", SYNC_STATUS: "01", SYNC_DATA: "Ongole" },
        { CITY_ID: "10", CITY_CODE: "Kadapa", CITY_NAME: "Kadapa Branch", STATUS: "Active", DISTRICT_ID: "D10", ZONE: "Z10", PAYROLL_CITY_CODE: "PC10", SYNC_STATUS: "01", SYNC_DATA: "Kadapa" },
        { CITY_ID: "11", CITY_CODE: "Machilipatnam", CITY_NAME: "Machili Branch", STATUS: "Active", DISTRICT_ID: "D11", ZONE: "Z11", PAYROLL_CITY_CODE: "PC11", SYNC_STATUS: "01", SYNC_DATA: "Machilipatnam" },
        { CITY_ID: "12", CITY_CODE: "Eluru", CITY_NAME: "Eluru Branch", STATUS: "Active", DISTRICT_ID: "D12", ZONE: "Z12", PAYROLL_CITY_CODE: "PC12", SYNC_STATUS: "01", SYNC_DATA: "Eluru" },
        { CITY_ID: "13", CITY_CODE: "Rajahmundry", CITY_NAME: "Rajahmundry Branch", STATUS: "Active", DISTRICT_ID: "D13", ZONE: "Z13", PAYROLL_CITY_CODE: "PC13", SYNC_STATUS: "01", SYNC_DATA: "Rajahmundry" },
        { CITY_ID: "14", CITY_CODE: "Rajahmundry", CITY_NAME: "Rajahmundry Branch", STATUS: "Active", DISTRICT_ID: "D13", ZONE: "Z13", PAYROLL_CITY_CODE: "PC13", SYNC_STATUS: "01", SYNC_DATA: "Rajahmundry" },
        { CITY_ID: "15", CITY_CODE: "Rajahmundry", CITY_NAME: "Rajahmundry Branch", STATUS: "Active", DISTRICT_ID: "D13", ZONE: "Z13", PAYROLL_CITY_CODE: "PC13", SYNC_STATUS: "01", SYNC_DATA: "Rajahmundry" },
        { CITY_ID: "16", CITY_CODE: "Rajahmundry", CITY_NAME: "Rajahmundry Branch", STATUS: "Active", DISTRICT_ID: "D13", ZONE: "Z13", PAYROLL_CITY_CODE: "PC13", SYNC_STATUS: "01", SYNC_DATA: "Rajahmundry" },
        { CITY_ID: "17", CITY_CODE: "Rajahmundry", CITY_NAME: "Rajahmundry Branch", STATUS: "Active", DISTRICT_ID: "D13", ZONE: "Z13", PAYROLL_CITY_CODE: "PC13", SYNC_STATUS: "01", SYNC_DATA: "Rajahmundry" },
    ];

        const [currentPage, setCurrentPage] = useState(1);
        const rowsPerPage = 16;


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
                <div className="headercontainer">
                    <div className="header">
                        <h1>City</h1>
                        <div className="buttons">
                            <button className="filter">
                                <i className="fa-solid fa-filter" style={{ color: "#054447", padding: "4px" }}></i> Filter <span className="notification">1</span>
                            </button>
                            <button className="export">
                                <i class="fa-solid fa-arrow-up" style={{ color: "#054447", padding: "4px" }}></i> Export
                            </button>
                            <button className="add-new-field">
                                <Link to="/add_new_field" style={{ color: "white", textDecoration: "none" }}>+ Add New Field</Link>
                            </button>
                        </div>

                    </div>
                    < hr className="header-below-line" />
                </div>

                {/* Table data */}



                <div className="table-scroll-container">
                    <table className="city-table">
                        <thead className="headings">
                            <tr id="table-tr">
                                <th><input type="checkbox" /></th>
                                <th style={{ color: "#84919a" }}>CITY ID</th>
                                <th style={{ color: "#84919a" }}>CITY CODE</th>
                                <th style={{ color: "#84919a" }}>CITY NAME</th>
                                <th style={{ color: "#84919a" }}>STATUS</th>
                                <th style={{ color: "#84919a" }}>DISTRICT ID</th>
                                <th style={{ color: "#84919a" }}>ZONE ID</th>
                                <th style={{ color: "#84919a" }}>PAYROLL CITY CODE</th>
                                <th style={{ color: "#84919a" }}>SYNC STATUS</th>
                                <th style={{ color: "#84919a" }}>SYNC DATA</th>
                                <th style={{ color: "#84919a" }}></th>
                            </tr>
                        </thead>

                        <tbody className="values-styling">
                            {currentRows.map((item, index) => (
                                <tr key={index}>
                                    <td><input type="checkbox" class="check-box" /></td>
                                    <td>{item.CITY_ID}</td>
                                    <td>{item.CITY_CODE}</td>
                                    <td>{item.CITY_NAME}</td>
                                    <td>{item.STATUS}</td>
                                    <td>{item.DISTRICT_ID}</td>
                                    <td>{item.ZONE}</td>
                                    <td>{item.PAYROLL_CITY_CODE}</td>
                                    <td>{item.SYNC_STATUS}</td>
                                    <td>{item.SYNC_DATA}</td>
                                    <td>
                                        <button className="icon-btn" title="Delete">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.5 5.00033H4.16667M4.16667 5.00033H17.5M4.16667 5.00033V16.667C4.16667 17.109 4.34226 17.5329 4.65482 17.8455C4.96738 18.1581 5.39131 18.3337 5.83333 18.3337H14.1667C14.6087 18.3337 15.0326 18.1581 15.3452 17.8455C15.6577 17.5329 15.8333 17.109 15.8333 16.667V5.00033H4.16667ZM6.66667 5.00033V3.33366C6.66667 2.89163 6.84226 2.46771 7.15482 2.15515C7.46738 1.84259 7.89131 1.66699 8.33333 1.66699H11.6667C12.1087 1.66699 12.5326 1.84259 12.8452 2.15515C13.1577 2.46771 13.3333 2.89163 13.3333 3.33366V5.00033M8.33333 9.16699V14.167M11.6667 9.16699V14.167" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </button>
                                        <button className="icon-btn" title="Edit">
                                            <Link to="/edit_field" style={{ color: "#69747c", textDecoration: "none" }}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.1667 2.49993C14.3856 2.28106 14.6455 2.10744 14.9314 1.98899C15.2174 1.87054 15.5239 1.80957 15.8334 1.80957C16.1429 1.80957 16.4494 1.87054 16.7354 1.98899C17.0214 2.10744 17.2812 2.28106 17.5001 2.49993C17.719 2.7188 17.8926 2.97863 18.011 3.2646C18.1295 3.55057 18.1904 3.85706 18.1904 4.16659C18.1904 4.47612 18.1295 4.78262 18.011 5.06859C17.8926 5.35455 17.719 5.61439 17.5001 5.83326L6.25008 17.0833L1.66675 18.3333L2.91675 13.7499L14.1667 2.49993Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </Link>
                                        </button>
                                        <button className="icon-btn view-styling" title="View">
                                            <svg width="60" height="25" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.8626 7.36301C15.0653 7.64701 15.1666 7.78967 15.1666 7.99967C15.1666 8.21034 15.0653 8.35234 14.8626 8.63634C13.9519 9.91367 11.6259 12.6663 8.49992 12.6663C5.37325 12.6663 3.04792 9.91301 2.13725 8.63634C1.93459 8.35234 1.83325 8.20967 1.83325 7.99967C1.83325 7.78901 1.93459 7.64701 2.13725 7.36301C3.04792 6.08567 5.37392 3.33301 8.49992 3.33301C11.6266 3.33301 13.9519 6.08634 14.8626 7.36301Z" stroke="#7B7B7B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10.5 8C10.5 7.46957 10.2893 6.96086 9.91421 6.58579C9.53914 6.21071 9.03043 6 8.5 6C7.96957 6 7.46086 6.21071 7.08579 6.58579C6.71071 6.96086 6.5 7.46957 6.5 8C6.5 8.53043 6.71071 9.03914 7.08579 9.41421C7.46086 9.78929 7.96957 10 8.5 10C9.03043 10 9.53914 9.78929 9.91421 9.41421C10.2893 9.03914 10.5 8.53043 10.5 8Z" stroke="#7B7B7B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M20.9148 4.27273L23.5057 11.6193H23.608L26.1989 4.27273H27.3068L24.1023 13H23.0114L19.8068 4.27273H20.9148ZM28.5298 13V6.45455H29.5355V13H28.5298ZM29.0412 5.36364C28.8452 5.36364 28.6761 5.29688 28.5341 5.16335C28.3949 5.02983 28.3253 4.86932 28.3253 4.68182C28.3253 4.49432 28.3949 4.33381 28.5341 4.20028C28.6761 4.06676 28.8452 4 29.0412 4C29.2372 4 29.4048 4.06676 29.544 4.20028C29.6861 4.33381 29.7571 4.49432 29.7571 4.68182C29.7571 4.86932 29.6861 5.02983 29.544 5.16335C29.4048 5.29688 29.2372 5.36364 29.0412 5.36364ZM34.1218 13.1364C33.4911 13.1364 32.9471 12.9972 32.4897 12.7188C32.0352 12.4375 31.6843 12.0455 31.4371 11.5426C31.1928 11.0369 31.0707 10.4489 31.0707 9.77841C31.0707 9.10795 31.1928 8.51705 31.4371 8.00568C31.6843 7.49148 32.0281 7.09091 32.4684 6.80398C32.9116 6.5142 33.4286 6.36932 34.0195 6.36932C34.3604 6.36932 34.6971 6.42614 35.0295 6.53977C35.3619 6.65341 35.6644 6.83807 35.9371 7.09375C36.2099 7.34659 36.4272 7.68182 36.5891 8.09943C36.7511 8.51705 36.832 9.03125 36.832 9.64205V10.0682H31.7866V9.19886H35.8093C35.8093 8.82955 35.7354 8.5 35.5877 8.21023C35.4428 7.92045 35.2354 7.69176 34.9656 7.52415C34.6985 7.35653 34.3832 7.27273 34.0195 7.27273C33.619 7.27273 33.2724 7.37216 32.9798 7.57102C32.69 7.76705 32.467 8.02273 32.3107 8.33807C32.1545 8.65341 32.0763 8.99148 32.0763 9.35227V9.93182C32.0763 10.4261 32.1616 10.8452 32.332 11.1889C32.5053 11.5298 32.7454 11.7898 33.0522 11.9688C33.359 12.1449 33.7156 12.233 34.1218 12.233C34.386 12.233 34.6246 12.196 34.8377 12.1222C35.0536 12.0455 35.2397 11.9318 35.396 11.7812C35.5522 11.6278 35.6729 11.4375 35.7582 11.2102L36.7298 11.483C36.6275 11.8125 36.4556 12.1023 36.2141 12.3523C35.9727 12.5994 35.6744 12.7926 35.3192 12.9318C34.9641 13.0682 34.565 13.1364 34.1218 13.1364ZM39.8448 13L37.8505 6.45455H38.9073L40.3221 11.4659H40.3903L41.788 6.45455H42.8619L44.2425 11.4489H44.3107L45.7255 6.45455H46.7823L44.788 13H43.7994L42.3675 7.97159H42.2653L40.8335 13H39.8448Z" fill="#7B7B7B" />
                                            </svg>


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
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                className={`page ${currentPage === i + 1 ? "active" : ""}`}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>


                    <button className="pagination-btn right-btn" onClick={goToNextPage} disabled={currentPage === totalPages}>
                        Next →
                    </button>
                </div>
                {/* / <span className="page">{totalPages} </span>  */}





            </div>






        </>
    );
}

export default DataTable;
