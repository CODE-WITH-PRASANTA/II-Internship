import React from "react";

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
  list:InstructorType[];
  onEdit:(item:InstructorType)=>void;
  onDelete:(id:number)=>void;
}

const TSKInstructorList:React.FC<Props> = ({list,onEdit,onDelete}) => {

  const renderStars = (rating:number)=>{
    return (
      <div className="tsk-ins-stars">
        {[1,2,3,4,5].map(n=>(
          <span key={n} className={rating>=n ? "active":""}>★</span>
        ))}
      </div>
    );
  };

  return(
    <div className="tsk-ins-list-card">

      <div className="tsk-ins-header">
        <h3>Manage Instructors</h3>
      </div>

      <div className="tsk-ins-scroll">
        {list.map(item=>(
          <div key={item.id} className="tsk-ins-item">

            <img className="tsk-ins-avatar" src={item.image || ""} alt="" />

            <div className="tsk-ins-details">
              <p><strong>Name :</strong> {item.name}</p>
              <p><strong>Designation :</strong> {item.designation}</p>

              {renderStars(item.rating)}

              <div className="tsk-ins-social">
  <p><strong>Facebook :</strong> {item.facebook}</p>
  <p><strong>Instagram :</strong> {item.instagram}</p>
  <p><strong>LinkedIn :</strong> {item.linkedin}</p>
</div>

            </div>

            <div className="tsk-ins-actions">
              <button className="tsk-ins-edit" onClick={()=>onEdit(item)}>Edit</button>
              <button className="tsk-ins-delete" onClick={()=>onDelete(item.id!)}>Delete</button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default TSKInstructorList;
