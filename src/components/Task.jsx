import { useState } from "react";

export const Task = ({
  id,
  title,
  deleteTaskFunc,
  toggleDoneTaskFunc,
  completed,
}) => {
  const deleteBtnOnClick = () => {
    deleteTaskFunc(id);
  };

  const [isDoneOk, setIsDoneOk] = useState(true);

  const doneBtnOnClick = () => {
    if (completed) {
      toggleDoneTaskFunc(id);
      setIsDoneOk(true);
    } else {
      toggleDoneTaskFunc(id);
      setIsDoneOk(false);
    }
  };

  const result = isDoneOk ? "" : "text-decoration-line-through";

  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      {/*
      HINTS: if task is completed, below "span" will show like this 
        <span className="text-decoration-line-through">{title}</span>
        But if task is not completed : 
        <span>{title}</span>
      */}
      <span className={result}>{title}</span>
      <button className="btn btn-success" onClick={doneBtnOnClick}>
        Done
      </button>
      <button className="btn btn-danger" onClick={deleteBtnOnClick}>
        Delete
      </button>
    </div>
  );
};
