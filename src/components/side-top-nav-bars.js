    import { useState } from 'react';
    import chaitanyaLogo from '../assets/srichaitanya-png.png';
    import { Link,useLocation } from 'react-router-dom';
    

    function SideBar(){

        const [isDropDowVisible,setIsDropDownVisble]=useState(false);
        const toggleDropdown=()=>{
            setIsDropDownVisble(!isDropDowVisible);
        };



        const location=useLocation();
        

        

        return(
            <>
            
                <div className="whole-container">

                    {/* <!-- Side Bar  --> */}

                    <div className="sidebar">
                    <div className="logo">
                    <img src={chaitanyaLogo} className="logo-img" alt="Sri Chaitanya Logo" />
                    </div>

                    <ul className="menu">
                    <li className="menu-drop-downs " onClick={toggleDropdown}>
                        <span><i className="fas fa-user-graduate"></i> Students</span>
                        <i style={{display:isDropDowVisible?'block':'none'}} className="fas fa-chevron-down drop-down-arrow"></i>
                    </li>
                    <ul className="dropdown-container" id="student-dropdown" style={{display:isDropDowVisible?'block':'none'}}>
                        <li>State</li>  
                        <li>  <Link to='/' style={{color:location.pathname === "/"?"blue":"black", textDecoration:"none"}}>City</Link>   </li>
                        <li>Campus</li>
                        <li>Fee Payment Year</li>
                        <li>Fee Heads</li>
                        <li>Organization</li>
                        <li>Card Type</li>
                        <li>Stream</li>
                        <li>Program Name</li>
                        <li>Exam Program</li>
                        <li>Course Track</li>
                    </ul>

                    <li><i className="fas fa-laptop"></i> Application</li>
                    <li><i className="fas fa-user-tie"></i> Employee</li>
                    <li><i className="fas fa-bus"></i> Fleet</li>
                    <li><i className="fas fa-warehouse"></i> Warehouse</li>
                    <li><i className="fas fa-sms"></i> SMS</li>
                    <li><i className="fas fa-question-circle"></i> Question Bank</li>
                    <li><i className="fas fa-boxes"></i> Assets Management</li>
                    <li><i className="fas fa-credit-card"></i> Payment Services</li>
                    <li><i className="fas fa-video"></i> CCTV</li>
                    <li><i className="fas fa-users-cog"></i> HRMS</li>
                    </ul>

                    <ul className="footer">
                    <li><i className="fas fa-book"></i> Documentation</li>
                    <li><i className="fas fa-cog"></i> Settings</li>
                    </ul>
                    </div>





                    {/* navbar section */}

                    <div className="navbar">
                    <div className="left">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search..." />
                    </div>
                    <div className="right">
                    <span className="icon-text">
                        <i className="fas fa-comment-dots"></i> Feedback?
                    </span>
                    <i className="fas fa-bell"></i>
                    <i className="fa fa-question-circle"></i>
                    <i className="fas fa-user-circle"></i>
                    </div>
                    </div>

                    




                </div>

            
            
            </>

            // <>
            // <h1>heyy ram</h1>
            // </>
        );
    };



    export default SideBar;