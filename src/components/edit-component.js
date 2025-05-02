import { Link } from 'react-router-dom';
import SideBar from './side-top-nav-bars';

function EditField() {
  return (
    <>
      <SideBar />

      <div className="field-container">
        <div className="field-popup">
          <div className="field-header">
            <h2>View</h2>
            <Link to="/">
              <button className="field-close-btn">&times;</button>
            </Link>
          </div>
        
          <div className="field-form-row">
            <div className="field-form-group small">
              <label>City ID</label>
              <input type="text" value="01" />
            </div>
            <div className="field-form-group small">
              <label>City Code</label>
              <input type="text" value="01" />
            </div>
            <div className="field-form-group big">
              <label>City Name</label>
              <input type="text" placeholder="Enter Value" />
            </div>
          </div>

          <div className="field-form-row">
            <div className="field-form-group small">
              <label>Status</label>
              <input type="text" value="01" />
            </div>
            <div className="field-form-group small">
              <label>District ID</label>
              <input type="text" value="01" />
            </div>
            <div className="field-form-group big">
              <label>Zone ID</label>
              <input type="text" placeholder="Enter Value" />
            </div>
          </div>

          <div className="field-form-row">
            <div className="field-form-group big">
              <label>Payroll City Code</label>
              <input type="text" placeholder="Enter Value" />
            </div>
            <div className="field-form-group small">
              <label>Sync Status</label>
              <input type="text" value="01" />
            </div>
            <div className="field-form-group small">
              <label>Sync Date</label>
              <input type="text" value="01" />
            </div>
          </div>

          <div className="field-button-group">
            <button className="field-delete-btn">Delete</button>
            <button className="field-edit-btn">Edit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditField;
