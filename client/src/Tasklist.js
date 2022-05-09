import React from 'react'
import { getUsers } from './redux/actions';
import Cardtask from './Cardtask'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import Addnewusers from "./Addnewuser"

const Tasklist = () => {
  const {users,loading}=useSelector(state=>state)
  const dispatch=useDispatch()
 useEffect(() => {
 
    const get=async()=>{
      await dispatch(getUsers())
    }
    get()

 }, [dispatch])
  return (
    <div> 
    <Addnewusers/>
      {
      
      loading?<h2>loading ... </h2>: users&&React.Children.toArray(users.map(el=> <Cardtask cards={el}/>))
    }</div>
  )
}

export default Tasklist