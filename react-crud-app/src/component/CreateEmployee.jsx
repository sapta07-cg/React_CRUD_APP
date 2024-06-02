import React, { useState } from 'react'

const CreateEmployee = () => {
    const[userDetail,setUserDetails]=useState({
      name:"",
      email:"",
      age:null,
      companyName:"",
      job_role:""
    })

    const inputEvent = (event) => {
      const { name, value } = event.target;
      setUserDetails((preValue) => {
        return {
          ...preValue,
          [name]: value,
        };
      });
    };
    const handleSubmit=()=>{}



  return (
    <div>
        <h1>Create Employee</h1>
        <div className='container'>
            <div className='row'>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label >Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your Name"
                  name="name"
                  value={userDetail.name}
                  onChange={inputEvent}
                />
              </div>
              <div className="form-group">
                <label >Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  value={userDetail.team_name}
                  onChange={inputEvent}
                />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter your age"
                  name="age"
                  value={userDetail.team_name}
                  onChange={inputEvent}
                />
              </div>
             
              <div className="form-group">
                <label >Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter company name"
                  name="companyName"
                  value={userDetail.incidentNumber}
                  onChange={inputEvent}
                />
              </div>
              <div className="form-group">
                <label >Gender</label>
                <select
                  id="team-select"
                  name="gender"
                  value={userDetail.status}
                  onChange={inputEvent}
                >
                  <option value="">--Please choose an option--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <label >Job Role</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="enter job role"
                  name="job_role"
                  value={userDetail.job_role}
                  onChange={inputEvent}
                />
              </div>
              <button type="submit" id="add-btn" className='btn btn-primary mt-5'>
                ADD
              </button>
            </form>
            </div>

        </div>
      
    </div>
  )
}

export default CreateEmployee
