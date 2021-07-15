import React from 'react'
import { Button,Form } from 'react-bootstrap'
import {  useDispatch } from 'react-redux';
import { useState } from 'react';

const Addtask = (props) => {
  console.log(props)
const dispatch = useDispatch();
    return (
        <div>
            <Form>
     
            <Form.Group className="mb-3" controlId="description">
              <Form.Control type="txt" placeholder="description"  onChange={(e)=>props.setTask({description: e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="isDone" onChange={(e)=>props.setTask({isDone: e.target.value})}/>
            </Form.Group> 
            <Button variant="primary" onClick={()=> dispatch({type:"ADD",description:props.description,isDone:props.isDone})} > 
              ADD
            </Button>
          </Form>
          
        </div>
    )
}

export default Addtask
