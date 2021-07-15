import React from 'react'
//import {connect} from "react-redux"
import Task from './Task';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap'
const ListTask = () => {
    const tasks = useSelector(state => state )
    console.log(tasks)
    return (
        
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Description</th>
                <th>isDone</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {tasks.map(el => {
                    return  <Task key={el.id} id={el.id} description={el.description} isDone={el.isDone} />
                })}
            </tbody>
        </Table>
    )
}

export default ListTask
