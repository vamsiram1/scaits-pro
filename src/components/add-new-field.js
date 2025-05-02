import SideBar from './side-top-nav-bars'
import { Link } from 'react-router-dom';

function NewField(){
    return(
        <>
        
            <SideBar/>
            
            
            
        <div class="new-field-container">
        <div class="popup">
            <div class="header">
                <h2>Add New Field</h2>
                <Link to="/"><button class="close-btn">&times;</button></Link>
            </div>

            <div class="form-row">
                <div class="form-group small">
                <label>City ID</label>
                <input type="text" value="01"/>
                </div>
                <div class="form-group small">
                <label>City Code</label>
                <input type="text" value="01"/>
                </div>
                <div class="form-group big">
                <label>City Name</label>
                <input type="text" placeholder="Enter Value"/>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group small">
                <label>Status</label>
                <input type="text" value="01"/>
                </div>
                <div class="form-group small">
                <label>District ID</label>
                <input type="text" value="01"/>
                </div>
                <div class="form-group big">
                <label>Zone ID</label>
                <input type="text" placeholder="Enter Value"/>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group big">
                <label>Payroll City Code</label>
                <input type="text" placeholder="Enter Value"/>
                </div>
                <div class="form-group small">
                <label>Sync Status</label>
                <input type="text" value="01"/>
                </div>
                <div class="form-group small">
                <label>Sync Date</label>
                <input type="text" value="01"/>
                </div>
            </div>

            <div class="button-group">
                <button class="delete-btn">Cancle</button>
                <button class="edit-btn">Add Field</button>
            </div>
            </div>

     

  
        </div>
            
        
        
        </>
    );
};
export default NewField;    