import {configureStore} from "@reduxjs/toolkit"
 import { userSlice } from "../feature/Userslice"


export default configureStore({

reducer:{
    User:userSlice.reducer,
},

})