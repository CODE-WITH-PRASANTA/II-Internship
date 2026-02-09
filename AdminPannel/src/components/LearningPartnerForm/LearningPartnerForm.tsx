import React, { useState, useEffect } from "react";

interface PartnerType{
  id?:number;
  image:string | null;
}

interface Props{
  onSubmit:(data:PartnerType)=>void;
  editItem:PartnerType | null;
}

const LearningPartnerForm:React.FC<Props> = ({onSubmit,editItem})=>{

  const [image,setImage] = useState<string | null>(null);

  useEffect(()=>{
    if(editItem) setImage(editItem.image);
  },[editItem]);

  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    onSubmit({id:editItem?.id,image});
    setImage(null);
  };

  return(
    <form className="tsk-partner-form" onSubmit={handleSubmit}>
      <div className="tsk-partner-header">
        <h3>Upload Learning Partner</h3>
      </div>

      <label className="tsk-partner-upload">
        <input
          type="file"
          onChange={(e)=>{
            if(e.target.files){
              setImage(URL.createObjectURL(e.target.files[0]));
            }
          }}
        />
        <span>Select Partner Logo</span>
      </label>

      {image && (
        <div className="tsk-partner-preview">
          <img src={image} alt="preview"/>
        </div>
      )}

      <button className="tsk-partner-btn">Submit</button>
    </form>
  );
};

export default LearningPartnerForm;
