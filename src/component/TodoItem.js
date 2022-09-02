import React, { useRef, useState } from 'react';
import { useDispatch } from "react-redux";
import useForm from '../hook/useForm';
import { addTask, deleteTask,editTask } from "../redux/taskSlice";
import Input from './Input';

const TodoItem = ({ id, title }) => {

	const dispatch = useDispatch();
    const [isEditting,setIsEditing]=useState(false)
    const initialValue={
        todo:""
    }
    const {values,handleInputChange}=useForm(initialValue)

    const ref=useRef()

	const removeTask=()=>{
		dispatch(
			deleteTask({
				id: id
			})
		)
	}

    const updateTask=()=>{
        setIsEditing(true)
		dispatch(
			editTask( {
                id:id,
                name:values.todo
                
            })
            );
	}

    

	return (
		<li className="task-item">
			<div>
				{title}
                {
                    isEditting && 
                    <Input name="todo"  value={values.todo} onChange={handleInputChange} />
                }
        
      

				<button  onClick={()=>{
					updateTask();
				}}>Edit</button>
			
			
				<button  onClick={()=>{
					removeTask();
				}}>Delete</button>
			</div>

		</li>
	);
};

export default TodoItem;