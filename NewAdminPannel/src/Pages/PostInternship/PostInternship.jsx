import React, { useState } from "react";
import "./PostInternship.css";

const PostInternship = () => {

const [step,setStep] = useState(1)

const nextStep = () => {
if(step < 5){
setStep(step + 1)
}
}

const prevStep = () => {
if(step > 1){
setStep(step - 1)
}
}

return (

<div className="internship-wrapper">

{/* ================= FORM SECTION ================= */}

<div className="internship-form">

<h2 className="form-title">Post Internship</h2>

<div className="form-scroll">

{/* STEP 1 */}

{step === 1 && (
<div className="form-step">

<label>Internship Title *</label>
<input type="text" placeholder="Enter Internship Title"/>

<label>Internship Description *</label>
<textarea placeholder="Enter Internship Description"></textarea>

</div>
)}

{/* STEP 2 */}

{step === 2 && (
<div className="form-step">

<label>Time Duration *</label>
<input type="text" placeholder="Example : 3 Months"/>

<label>Department</label>
<input type="text" placeholder="Enter Department"/>

</div>
)}

{/* STEP 3 */}

{step === 3 && (
<div className="form-step">

<label>Modules</label>
<textarea placeholder="Enter Modules"></textarea>

<label>Project</label>
<textarea placeholder="Enter Project Details"></textarea>

</div>
)}

{/* STEP 4 */}

{step === 4 && (
<div className="form-step">

<label>Tools</label>
<input type="text" placeholder="Example : React, Python"/>

</div>
)}

{/* STEP 5 */}

{step === 5 && (
<div className="form-step">

<label>Internship Type *</label>

<div className="radio-group">

<label>
<input type="radio" name="type"/> On Campus Internship
</label>

<label>
<input type="radio" name="type"/> Virtual Internship
</label>

<label>
<input type="radio" name="type"/> Both
</label>

</div>

</div>
)}

</div>

{/* STEP BUTTONS */}

<div className="step-buttons">

<button
className="prev-btn"
onClick={prevStep}
disabled={step === 1}
>
Previous
</button>

<button
className="next-btn"
onClick={nextStep}
>
{step === 5 ? "Submit" : "Next"}
</button>

</div>

</div>

{/* ================= TABLE SECTION ================= */}

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

<tr>
<td>Frontend Developer</td>
<td>3 Months</td>
<td>Web Development</td>
<td>Virtual</td>
<td>
<button className="edit-btn">Edit</button>
<button className="delete-btn">Delete</button>
</td>
</tr>

<tr>
<td>UI UX Design</td>
<td>2 Months</td>
<td>Design</td>
<td>On Campus</td>
<td>
<button className="edit-btn">Edit</button>
<button className="delete-btn">Delete</button>
</td>
</tr>

<tr>
<td>Data Science</td>
<td>6 Months</td>
<td>AI</td>
<td>Both</td>
<td>
<button className="edit-btn">Edit</button>
<button className="delete-btn">Delete</button>
</td>
</tr>

</tbody>

</table>

</div>

</div>

</div>

);

};

export default PostInternship;