
import TaskList from './components/TaskSlice';
import AddTask from './components/addTask';

function App() {


  return (
    <div className="min-h-screen bg-gray-100 p-5">
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-g">
      <h1 className = 'text-2xl font-bold mb-4 text-center text-indigo-600'>Task Management App</h1>
      <AddTask />
      <TaskList />
    </div>
     
    </div>
  )
}

export default App
