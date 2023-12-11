import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const diff = differenceInDays(new Date(taskObj.deadline), new Date());
  const bgColor = diff < 3 ? "bg-red-100" : "bg-blue-200"

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim:
         <span className={bgColor}>
          {Math.abs(diff)} gün 
          {diff > 0 ? " önce" : " sonra"}
         </span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (-
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
