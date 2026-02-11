import React, { useState } from "react";
import EventPicForm from "../../components/EventPic/EventPicForm";
import EventPicList from "../../components/EventPic/EventPicList";
import "./EventPicturePage.css";

export interface EventPicType{
  id?: number;
  image: string | null;
}

const EventPicturePage:React.FC = () => {

  const [data,setData] = useState<EventPicType[]>([]);
  const [editItem,setEditItem] = useState<EventPicType | null>(null);

  const savePic = (item:EventPicType)=>{
    if(editItem){
      setData(data.map(d=>d.id===item.id?item:d));
      setEditItem(null);
    }else{
      setData([...data,{...item,id:Date.now()}]);
    }
  };

  const deletePic=(id:number)=>{
    setData(data.filter(d=>d.id!==id));
  };

  return (
    <div className="tsk-event-wrapper">
      <div className="tsk-event-grid">
        <EventPicForm onSubmit={savePic} editItem={editItem}/>
        <EventPicList list={data} onEdit={setEditItem} onDelete={deletePic}/>
      </div>
    </div>
  );
};

export default EventPicturePage;
