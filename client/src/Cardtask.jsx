import React from 'react';
import {useDispatch} from 'react-redux'
import Editusers from './Editusers';
import { deleteUsers,getUsers } from './redux/actions';


const Task = ({ cards }) => {
const	dispatch=useDispatch()
	return (
		<div>
			<h2>{cards.FullName}</h2>
			<h3>{cards.Age}</h3>
			<button onClick={()=>{dispatch(deleteUsers(cards._id));dispatch(getUsers())}}>Deleted</button>
			<Editusers users={cards}/>
		</div>
	);
};

export default Task