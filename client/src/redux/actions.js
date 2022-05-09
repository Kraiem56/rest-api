import axios from "axios"
import { ADD, DELETE, EDIT, GET } from "./actionTypes"


export const getUsers=()=>async(dispatch)=>{
    try {
        const res=await axios.get("/get")
        dispatch({
            type:GET ,
            payload:res.data  
        })
    } catch (error) {
        alert("get error")
    }
}
export const deleteUsers=(_id)=>async(dispatch)=>{
    try {
        const res=await axios.delete(`/delete/${_id}`)
        dispatch({
            type:DELETE,
            payload:res.data
        })
    } catch (error) {
        alert('delete erroe')
    }
};
export const AddnewUsers=(newuser)=>async(dispatch)=>{
    try {
        const res =await axios.post("/post",newuser)
        dispatch({
            type:ADD,
            payload:res.data
        })
    } catch (error) {
        alert("Add Error")
    }

};
export const Editer=(editedUsers)=>async(dispatch)=>{
    try {
        const res=await axios.put(`/edit/${editedUsers._id}`,editedUsers)
        dispatch({
            type: EDIT,
            payload:res.data,
        })
    } catch (error) {
        alert("Add Error")
    }
}