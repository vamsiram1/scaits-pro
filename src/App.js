// import logo from './logo.svg';
import './App.css';
import React from 'react';
import './styling/side-top-nav-bars.css';
import './styling/data-component.css';
import './styling/add-new-field.css';
import './styling/edit-comp-styling.css';

// import SideBar from './components/side-top-nav-bars';
import DataTable from './components/data-component';
import NewField from './components/add-new-field';
import EditField from './components/edit-component';

import { BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route  path="/"  element={<DataTable/>}/>
        <Route path='/add_new_field'  element={<NewField/>} />
        <Route path='/edit_field' element={<EditField/>}/>
        
      </Routes>
    </BrowserRouter>
     </>
  );
}

export default App;
