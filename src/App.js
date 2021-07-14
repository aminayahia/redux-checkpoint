
import './App.css';
import ListTask from './Components/ListTask';
import Addtask from './Components/Addtask';
import { useState } from 'react';
import { Button,Modal,Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const initialState =  {
    description: "",
    isDone: true
}
  const [task,setTask] = useState(initialState)
  const tasks = useSelector(state => task )
 //  const tasks = useSelector(state => state.map((el,index) => <div key={index}>{el}</div>))
  const dispatch = useDispatch()
  return (
    <div className="App">
    
   <Form>
     
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>description</Form.Label>
            <Form.Control type="txt" placeholder="description"  onChange={(e)=>setTask({description: e.target.value})}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="isDone" onChange={(e)=>setTask({isDone: e.target.value})}/>
          </Form.Group> 
          <Button variant="primary" onClick={()=> dispatch({type:"ADD",description:task.description,isDone:task.isDone})} > 
            Save Changeso
          </Button>
        </Form>
      
    </div>
  );
}

export default App;
