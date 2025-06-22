import { createSlice, nanoid } from "@reduxjs/toolkit"; //nanoid to  generate unique id
import { act } from "react";

const initialState = {
    todos: [{id:1,text:"hello World"}]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,  // initial state come form above 
    reducers:{ 
          // in reducers we write function 
   addTodo : (state,action)=>{
    const todo ={
        id:nanoid(),
        text: action.payload
}   
state.todos.push(todo)
   } ,

   removeTodo :(state,action)=>{
    state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
   } ,

   updateTodo:(state,action)=>{
    const {id , newText} = action.payload;

    const todoToUpdate = state.todos.find((todo)=> todo.id === id)
     if(todoToUpdate){
        todoToUpdate.text = newText;
     }
   }


    }
})


export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer