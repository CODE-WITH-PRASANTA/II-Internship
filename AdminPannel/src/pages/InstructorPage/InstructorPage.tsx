import React, { useState } from "react";
import TSKInstructorForm from "../../components/InstructorForm/InstructorForm";
import TSKInstructorList from "../../components/InstructorForm/InstructorList";
import "./InstructorPage.css";

export interface InstructorType{
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

const TSKInstructorPage:React.FC = ()=>{

  const [data,setData] = useState<InstructorType[]>([]);
  const [editItem,setEditItem] = useState<InstructorType | null>(null);

  const saveInstructor = (item:InstructorType)=>{
    if(editItem){
      setData(data.map(d=>d.id===item.id ? item : d));
      setEditItem(null);
    }else{
      setData([...data,{...item,id:Date.now()}]);
    }
  };

  const deleteInstructor = (id:number)=>{
    setData(data.filter(d=>d.id!==id));
  };

  return(
    <div className="tsk-page-wrapper">

      {/* CENTERED CONTAINER */}
      <div className="tsk-container">
        <div className="tsk-grid-layout">
          <TSKInstructorForm
            onSubmit={saveInstructor}
            editItem={editItem}
          />

          <TSKInstructorList
            list={data}
            onEdit={setEditItem}
            onDelete={deleteInstructor}
          />
        </div>
      </div>

    </div>
  );
};

export default TSKInstructorPage;
