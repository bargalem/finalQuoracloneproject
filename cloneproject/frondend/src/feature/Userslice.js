import {createSlice}from "@reduxjs/toolkit"

 

export const userSlice=createSlice({
name:"User",
initialState:{
    value:null
},

reducers:{

    login:(state,action)=>{
        state.User=action.payload
    },

    logout:(state)=>{
        state.User=null
    }
}

})


export const {login,logout}=userSlice.actions
export const selectUser=(state)=>state.User.User
export default userSlice
