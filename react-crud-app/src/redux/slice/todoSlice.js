import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

//Action
export const fetchTodo=createAsyncThunk('fetchTodo',async()=>{
    const response=await fetch("http://localhost:8000/user")
    const result=await response.json();
    console.log("Response from API", result);
    return result;
})

//add action
export const addTodo=createAsyncThunk('addTodo',async (data)=>{
    const response=await fetch("http://localhost:8000/user",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    })

    try{
        const result=await response.json();
        return result;

    }catch(e){
        console.log("Error",e);
    }
     

})

const initialState = {
    users:[],
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
            state.users=action.payload;
        })
        builder.addCase(fetchTodo.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            console.log("Error",action.payload);
        })
        builder.addCase(addTodo.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(addTodo.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.users.push(action.payload);
        })
        builder.addCase(addTodo.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            console.log("Error",action.payload);
        })

    }
})  

export default todoSlice.reducer;