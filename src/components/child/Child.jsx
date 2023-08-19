import React, { useState, useEffect } from 'react';

function Child({ formData, onEdit, onDelete, onSubmit, editIndex }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    if (editIndex !== null) {
      const editedEntry = formData[editIndex];
      setName(editedEntry.name);
      setAge(editedEntry.age);
      setRole(editedEntry.role);
    }
  }, [editIndex, formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && age && role) {
      onSubmit({ name, age, role });

      setName('');
      setAge('');
      setRole('');
    }
  };

  return (
    <>
        <div className="conatiner-fluid"  style={{backgroundColor:"#f1faee",height:"100vh"}}>
    <div className="conatiner p-3 ">
            <div className="row " style={{width:"100%"}}>
                <div className="col-lg-3 "></div>
                <div className="col-lg-6 ">
                    <form onSubmit={handleSubmit}  className="box p-5 border" style={{backgroundColor:"#bde0fe",borderRadius:"10px"}}>
                        <label className=''><b>Name :-</b></label>
                        <input type='text' id='name' value={name}    onChange={(e) => setName(e.target.value)} className='form-control my-2'/>
                        <label className=''><b>Age :-</b></label>
                        <input type='number' id='age' value={age}  onChange={(e) => setAge(e.target.value)} className='form-control my-2'/>
                        <label className=''><b>Role :-</b></label>
                        <input type='text' id='role' value={role} onChange={(e) => setRole(e.target.value)} className='form-control my-2'/>
                        <button type="submit" className="btn btn-primary"  >submit</button>
                    </form>
                </div>
                <div className="col-lg-3 "></div>
            </div>
        </div>
        
        <div className="conatiner">
            <h2 className="" style={{textAlign:"center"}}>Submitted Data</h2>
            
        
        

        <div style={{width:"100%"}} className="row">
          {formData.map((entry, index) => (
            
            
            
                <div  className='col-lg-2 m-3 p-3 border' style={{textAlign:"center",borderRadius:"10px",backgroundColor:"#bde0fe"}} key={index}>
                    <b>Name :</b> {entry.name}<br/> <b>Age : </b>{entry.age}<br/> <b>Role :</b> {entry.role}<br/>
                    <button className='btn btn-primary me-2 mt-2' onClick={() => onEdit(index)}>Edit</button>
                    <button className='btn btn-primary me-2 mt-2' onClick={() => onDelete(index)}>Delete</button>
                </div>
            
            
           
            
            
            
            
          ))}
        </div>
        </div>
    </div>

    </>
  );
}

export default Child;
