import React from "react";

interface EventPicType{
  id?: number;
  image: string | null;
}

interface Props{
  list:EventPicType[];
  onEdit:(item:EventPicType)=>void;
  onDelete:(id:number)=>void;
}

const EventPicList:React.FC<Props> = ({list,onEdit,onDelete}) => {
  return (
    <div className="tsk-event-list">
    <div className="tsk-card-header">
  <h3>Event Photo List</h3>
</div>


      <div className="tsk-event-scroll">
        {list.map(item=>(
          <div key={item.id} className="tsk-event-item">
  <img src={item.image || ""} alt="" />

  <div className="tsk-event-actions">
    <button className="tsk-edit-btn" onClick={()=>onEdit(item)}>
      Edit
    </button>
    <button className="tsk-delete-btn" onClick={()=>onDelete(item.id!)}>
      Delete
    </button>
  </div>
</div>

        ))}
      </div>
    </div>
  );
};

export default EventPicList;
