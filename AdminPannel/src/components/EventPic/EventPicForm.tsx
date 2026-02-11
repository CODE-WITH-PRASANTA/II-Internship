import React, { useState, useEffect } from "react";

interface EventPicType{
  id?: number;
  image: string | null;
}

interface Props{
  onSubmit:(data:EventPicType)=>void;
  editItem:EventPicType | null;
}

const EventPicForm:React.FC<Props> = ({onSubmit,editItem}) => {

  const [image,setImage] = useState<string | null>(null);

  useEffect(()=>{
    if(editItem) setImage(editItem.image);
  },[editItem]);

  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    onSubmit({id:editItem?.id,image});
    setImage(null);
  };

  return (
  <form className="tsk-event-form" onSubmit={handleSubmit}>

  <div className="tsk-card-header">
    <h3>Upload Event Photo</h3>
  </div>

  <label className="tsk-file-upload">
    <input
      type="file"
      onChange={(e)=>{
        if(e.target.files){
          setImage(URL.createObjectURL(e.target.files[0]));
        }
      }}
    />
    <span>Select Event Image</span>
  </label>

  {/* IMAGE PREVIEW */}
  {image && (
    <div className="tsk-preview">
      <img src={image} alt="preview" />
    </div>
  )}

  <button className="tsk-event-btn">Submit</button>

</form>


  );
};

export default EventPicForm;
