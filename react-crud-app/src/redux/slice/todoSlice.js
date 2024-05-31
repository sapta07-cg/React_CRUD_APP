import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

//Action
export const fetchTodo=createAsyncThunk('fetchTodo',async()=>{
    const response=await fetch("https://reqres.in/api/users?page=1")
    return response.json();
})

const initialState = {
    isLoading:false,
    data:null,
    isError: false
  }

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchTodo.pending,(state)=>{
            state.isLoading=true;

        })
        builder.addCase(fetchTodo.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        })
        builder.addCase(fetchTodo.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            console.log("Error",action.payload);
        })

    }
})  

export default todoSlice.reducer;