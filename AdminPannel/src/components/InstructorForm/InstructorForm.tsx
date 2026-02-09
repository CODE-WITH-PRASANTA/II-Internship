import React, { useState, useEffect } from "react";
import TSKStarRating from "./InstructorRating";

interface InstructorType{
  id?: number;
  name: string;
  designation: string;
  about: string;
  rating: number;
  facebook: string;
  instagram: string;
  linkedin: string;
  image: string | null;
}

interface Props{
  onSubmit:(data:InstructorType)=>void;
  editItem:InstructorType | null;
}

const TSKInstructorForm:React.FC<Props> = ({onSubmit,editItem})=>{

  const [form,setForm] = useState<InstructorType>({
    name:"",
    designation:"",
    about:"",
    rating:0,
    facebook:"",
    instagram:"",
    linkedin:"",
    image:null
  });

  useEffect(()=>{
    if(editItem) setForm(editItem);
  },[editItem]);

  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    onSubmit(form);
  };

  return(
    <form className="tsk-form-card" onSubmit={handleSubmit}>

      {/* CARD HEADER */}
      <div className="tsk-card-header">
        <h3>Main Instructor Form</h3>
      </div>

      <input
        className="tsk-input"
        placeholder="Instructor Name"
        value={form.name}
        onChange={(e)=>setForm({...form,name:e.target.value})}
      />

      <input
        className="tsk-input"
        placeholder="Designation"
        value={form.designation}
        onChange={(e)=>setForm({...form,designation:e.target.value})}
      />

      <textarea
        className="tsk-textarea"
        placeholder="About Instructor"
        value={form.about}
        onChange={(e)=>setForm({...form,about:e.target.value})}
      />

      {/* RATING LABEL */}
      <label className="tsk-label">Rating</label>
      <TSKStarRating
        rating={form.rating}
        setRating={(r)=>setForm({...form,rating:r})}
      />

      <input
        className="tsk-input"
        placeholder="Facebook"
        value={form.facebook}
        onChange={(e)=>setForm({...form,facebook:e.target.value})}
      />

      <input
        className="tsk-input"
        placeholder="Instagram"
        value={form.instagram}
        onChange={(e)=>setForm({...form,instagram:e.target.value})}
      />

      <input
        className="tsk-input"
        placeholder="Linkedin"
        value={form.linkedin}
        onChange={(e)=>setForm({...form,linkedin:e.target.value})}
      />

      <input
        type="file"
        className="tsk-input"
        onChange={(e)=>{
          if(e.target.files){
            setForm({...form,image:URL.createObjectURL(e.target.files[0])});
          }
        }}
      />

      <button className="tsk-submit-btn">Submit</button>

    </form>
  );
};

export default TSKInstructorForm;
