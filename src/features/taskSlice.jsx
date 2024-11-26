import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    loading: false,
    error: null,
    status: 'All'
}
export const fetchTodo = createAsyncThunk('tasks/fetchTodo', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const data = await res.json()

    return data.map(task =>({
        id: task.id,
        title: task.title,
        description:'',
        status: task.completed? "completed" : "To do"
    }))
})


const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
      addTask: (state, action) => {
        state.tasks.push(action.payload)
      }, 
      // editTask: (state, action) => {
      //   
      //   state.tasks = state.tasks.map( task => {
      //       task.id === action.payload.id ? action.payload : task
      //   })
      // }
      editTask: (state, action) => {
        // Destructure the properties from the payload
        const { id, title, description, status } = action.payload;
    
        state.tasks = state.tasks.map(task =>
            task.id === id
                ? { ...task, title, description, status } // Return the updated task
                : task // Return the unchanged task
        );
    },
    deleteTask: (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload)
    }
    
    
    },
    extraReducers: (builder) => {
      builder.addCase(fetchTodo.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.loading = false,
        state.tasks = action.payload
      })
      .addCase(fetchTodo.rejected,  (state, action) => {
        state.loading = false,
        state.error = action.error.message 
      })
    }
    
})

export const {addTask, editTask, deleteTask} = taskSlice.actions 
export default taskSlice.reducer;