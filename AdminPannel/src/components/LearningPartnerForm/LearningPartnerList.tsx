import React from "react";

interface PartnerType{
  id?:number;
  image:string | null;
}

interface Props{
  list:PartnerType[];
  onEdit:(item:PartnerType)=>void;
  onDelete:(id:number)=>void;
}

const LearningPartnerList:React.FC<Props> = ({list,onEdit,onDelete})=>{

  return(
    <div className="tsk-partner-list">

      <div className="tsk-partner-header">
        <h3>Learning Partner List</h3>
      </div>

      <div className="tsk-partner-scroll">
        {list.map(item=>(
          <div key={item.id} className="tsk-partner-item">
            <img src={item.image || ""} alt=""/>

            <div className="tsk-partner-actions">
              <button className="tsk-partner-edit" onClick={()=>onEdit(item)}>
                Edit
              </button>
              <button className="tsk-partner-delete" onClick={()=>onDelete(item.id!)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default LearningPartnerList;
