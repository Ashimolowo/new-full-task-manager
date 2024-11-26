import { useState } from "react";
import { useDispatch } from 'react-redux';
import {v4 as uuid4} from 'uuid'
import {addTask} from '../features/taskSlice'


const AddTask = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('To Do')
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            id: uuid4(),
            title,
            description,
            status
        }
        dispatch(addTask(newTask))
        setTitle('')
        setDescription('')
        setStatus('')
        
    }
    return ( 
    
        <form onSubmit={handleSubmit} className="mb-6 p-3">
            <h2 className="text-xl font-semibold mb-3 to-indigo-500">Add Task</h2>
            <div className="mb-4">
                <input 
                    type="text"
                    placeholder="Task Name"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 "
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <textarea 
                     name="" id=""
                    placeholder="Task Name"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 "
                    rows={'3'}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                   >
               </textarea>
            </div>
            <div className="mb-4">
                <select 
                    value={status}
                    onChange={e => setStatus(e.target.value)}
                    name="" id=""
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2">
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
            </div>
            <button 
                type="submit"
                className="w-full bg-indigo-600 to-white py-2 rounded-md hover:bg-indigo-700">Add Task</button>
        </form>
        
     );
}
 
export default AddTask;