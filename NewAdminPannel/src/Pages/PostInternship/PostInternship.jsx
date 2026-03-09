import React, { useState, useEffect } from "react";
import API from "../../api/api";
import "./PostInternship.css";

const PostInternship = () => {

  const [step, setStep] = useState(1);

  const [data,setData] = useState([]);

  const [form,setForm] = useState({
    title:"",
    description:"",
    duration:"",
    department:"",
    modules:"",
    project:"",
    tools:"",
    type:""
  });

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const nextStep = async () => {

    if(step === 5){
      await submitData();
      return;
    }

    if (step < 5) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };


  /* CREATE INTERNSHIP */

  const submitData = async ()=>{

    try{

      const res = await API.post("/interns/create",form);

      setData([...data,res.data]);

      setForm({
        title:"",
        description:"",
        duration:"",
        department:"",
        modules:"",
        project:"",
        tools:"",
        type:""
      });

      setStep(1);

    }catch(error){
      console.log(error);
    }

  };


  /* GET INTERNSHIPS */

  const fetchInternships = async ()=>{

    try{

      const res = await API.get("/interns/all");

      setData(res.data);

    }catch(error){
      console.log(error);
    }

  };


  /* DELETE */

  const deleteInternship = async (id)=>{

    try{

      await API.delete(`/interns/delete/${id}`);

      setData(data.filter((item)=>item._id !== id));

    }catch(error){
      console.log(error);
    }

  };


  useEffect(()=>{
    fetchInternships();
  },[]);



  return (
    <div className="internship-wrapper">

      <div className="internship-form">
        <h2 className="form-title">Post Internship</h2>

        <div className="form-scroll">

          {step === 1 && (
            <div className="form-step">

              <label>Internship Title *</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter Internship Title"
              />

              <label>Internship Description *</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Enter Internship Description"
              />

            </div>
          )}


          {step === 2 && (
            <div className="form-step">

              <label>Time Duration *</label>
              <input
                name="duration"
                value={form.duration}
                onChange={handleChange}
                placeholder="Example : 3 Months"
              />

              <label>Department</label>
              <input
                name="department"
                value={form.department}
                onChange={handleChange}
                placeholder="Enter Department"
              />

            </div>
          )}


          {step === 3 && (
            <div className="form-step">

              <label>Modules</label>
              <textarea
                name="modules"
                value={form.modules}
                onChange={handleChange}
                placeholder="Enter Modules"
              />

              <label>Project</label>
              <textarea
                name="project"
                value={form.project}
                onChange={handleChange}
                placeholder="Enter Project Details"
              />

            </div>
          )}


          {step === 4 && (
            <div className="form-step">

              <label>Tools</label>
              <input
                name="tools"
                value={form.tools}
                onChange={handleChange}
                placeholder="Example : React, Python"
              />

            </div>
          )}


          {step === 5 && (
            <div className="form-step">

              <label>Internship Type *</label>

              <div className="radio-group">

                <label>
                  <input
                    type="radio"
                    name="type"
                    value="On Campus"
                    onChange={handleChange}
                  />
                  On Campus Internship
                </label>

                <label>
                  <input
                    type="radio"
                    name="type"
                    value="Virtual"
                    onChange={handleChange}
                  />
                  Virtual Internship
                </label>

                <label>
                  <input
                    type="radio"
                    name="type"
                    value="Both"
                    onChange={handleChange}
                  />
                  Both
                </label>

              </div>

            </div>
          )}

        </div>


        <div className="step-buttons">

          <button className="prev-btn" onClick={prevStep} disabled={step === 1}>
            Previous
          </button>

          <button className="next-btn" onClick={nextStep}>
            {step === 5 ? "Submit" : "Next"}
          </button>

        </div>
      </div>



      <div className="internship-table">

        <h2 className="table-title">Posted Internships</h2>

        <div className="table-scroll">

          <table>

            <thead>
              <tr>
                <th>Title</th>
                <th>Duration</th>
                <th>Department</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {data.map((item)=>(
                <tr key={item._id}>

                  <td>{item.title}</td>
                  <td>{item.duration}</td>
                  <td>{item.department}</td>
                  <td>{item.type}</td>

                  <td>
                    <button
                      className="delete-btn"
                      onClick={()=>deleteInternship(item._id)}
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default PostInternship;