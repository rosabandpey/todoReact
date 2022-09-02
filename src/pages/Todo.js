import React, { useState } from "react";
import { Col, Row } from "antd";
import Input from "../component/Input";
import Button from "../component/Button";
import List from "../component/List";
import useForm from "../hook/useForm";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../redux/taskSlice";
import TodoItem from "../component/TodoItem";

export default function Todo() {
    
    const initialValue={
        todo:""
    }
    const {values,handleInputChange}=useForm(initialValue)
    const dispatch = useDispatch();
    const todos=useSelector(s=>s.tasks)

    const addTodos=()=>{
        dispatch(
			addTask( values.todo)
		);
    }

    
   

  return (
    <>
      <Row>
        <Col span={24}>
          <div id="myDIV">
            <h2 style={{ margin: 24 }}>My To Do List</h2>
            <Input name="todo"  value={values.todo} onChange={handleInputChange} />
            <Button label="Add" onClick={addTodos}/>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <ol>
          {/* {todos ? return [] : */}
              { todos && todos.map(item=>(
                  <TodoItem id={item.id} title={item.name}  />
                  
              ))}
          {/* } */}
          </ol>
        </Col>
      </Row>
    </>
  );
}
