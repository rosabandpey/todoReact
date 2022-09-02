import { createSlice } from "@reduxjs/toolkit";
const todoFromStorage=localStorage.getItem("todo")
export const tasksSlice = createSlice({
    name: "tasks",
    initialState:todoFromStorage ? [todoFromStorage] : [],
    reducers:{
        addTask: (state, action)=>{
            const newTask = {
                id: Math.random() * 100,
                name: action.payload
            }
            state.push(newTask);
            localStorage.setItem("todo", JSON.stringify(state));
        },
        deleteTask: (state, action)=>{
            return state.filter((item) => item.id !== action.payload.id);
        },
        editTask: (state, action)=>{
            return state.map((item) => item.id == action.payload.id ? action.payload:item);
        },

    }
});

export const {addTask, deleteTask,editTask} = tasksSlice.actions;

export default tasksSlice.reducer;