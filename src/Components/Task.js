import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import {  useDispatch } from 'react-redux';
import { Trash,PencilFill } from 'react-bootstrap-icons';
const Task = (props) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false)
    const [descriptionvalue, setDescriptionvalue] = useState(props.description)
    return (
      <tr>
         <td>{props.id}</td>
        
         {edit?<td> 
             <input type="text" value={descriptionvalue} placeholder={props.description} className="form-control" onChange={(e)=>setDescriptionvalue(e.target.value)}/>
             </td>
             :(<td>{props.description}</td>)}
         {edit?<td>"fff"</td>:(<td>{props.isDone}</td>)}
          <td>
          <Button variant="primary btn-danger" onClick={()=> dispatch({type:"REMOVE",id:props.id})} > 
          <Trash  /> REMOVE 
            </Button>
            <Button variant="primary btn-warning" onClick={()=> setEdit(!edit)} > 
            {edit?<PencilFill />: "EDIT"}
            </Button>
              </td>
      </tr>
    )
}

export default Task
