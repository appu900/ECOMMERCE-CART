import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"



const initialState = {
    items:[],
    status:null,
    isError:false,
    isLoding:false
}

export const fetchProducts = createAsyncThunk('fetchProducts',async (id=null,{rejectWithValue}) =>{
    try{
        const response = await axios.get("http://localhost:5000/products")
        return response?.data
    }catch(error){
        return rejectWithValue(error.response.data);
    }
    
})


const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{

    },
    extraReducers:(builder) =>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status = "sucess";
            state.items = action.payload;
        })
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.status = "pending";
            state.isLoding = true;
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            console.log('error occured - ',action.payload)
            state.isError = true;
            state.status = "rejected";
        })
    }
})


export default productSlice.reducer