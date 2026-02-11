import React from "react";

interface Props{
  rating:number;
  setRating:(rating:number)=>void;
}

const TSKStarRating:React.FC<Props> = ({rating,setRating})=>{
  return(
    <div className="tsk-stars">
      {[1,2,3,4,5].map(n=>(
        <span key={n}
          className={rating>=n?"active":""}
          onClick={()=>setRating(n)}
        >★</span>
      ))}
    </div>
  );
};

export default TSKStarRating;
