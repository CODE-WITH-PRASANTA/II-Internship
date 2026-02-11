import React, { useState } from "react";
import LearningPartnerForm from "../../components/LearningPartnerForm/LearningPartnerForm";
import LearningPartnerList from "../../components/LearningPartnerForm/LearningPartnerList";
import "./LearningPartner.css";

export interface PartnerType{
  id?:number;
  image:string | null;
}

const LearningPartner:React.FC = ()=>{

  const [data,setData] = useState<PartnerType[]>([]);
  const [editItem,setEditItem] = useState<PartnerType | null>(null);

  const savePartner=(item:PartnerType)=>{
    if(editItem){
      setData(data.map(d=>d.id===item.id?item:d));
      setEditItem(null);
    }else{
      setData([...data,{...item,id:Date.now()}]);
    }
  };

  const deletePartner=(id:number)=>{
    setData(data.filter(d=>d.id!==id));
  };

  return(
    <div className="tsk-partner-wrapper">
      <div className="tsk-partner-grid">
        <LearningPartnerForm onSubmit={savePartner} editItem={editItem}/>
        <LearningPartnerList list={data} onEdit={setEditItem} onDelete={deletePartner}/>
      </div>
    </div>
  );
};

export default LearningPartner;
