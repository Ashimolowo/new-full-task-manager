import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/taskSlice";

const EditTask = ({ task }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();

  const handleEdit = () => {
        dispatch(editTask({
            id: task.id,
            title,
            description,
            status
        }))
     setIsEdit(false)
  }
  
  return (
    <div className="">
      {isEdit ? (
        <div className="absolute bg-white p-4 border rounded-md shadow-lg z-10">
          <h2 className="text-xl font-semibold mb-3 to-indigo-500">Edit Task</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Task Name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 "
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <textarea
              name=""
              id=""
              placeholder="Task Name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 "
              rows={"3"}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              name=""
              id=""
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button 
                onClick={handleEdit}
                className="w-full bg-indigo-600 to-white py-2 rounded-md hover:bg-indigo-700">
                save 
            </button>
            <button 
               onClick={() => setIsEdit(false)}
               className="w-full bg-pink-600 to-white py-2 rounded-md">
                cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsEdit(true)}
          className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-red-600"
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default EditTask;
