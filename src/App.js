
import './App.css';
import tasksImg from './images/tasks.png'
import ListTask from './Components/ListTask';
import Addtask from './Components/Addtask';
import { useState } from 'react';

function App() {
  const initialState =  {
    description: "",
    isDone: true
}
  const [task,setTask] = useState(initialState)
 
 
  console.log(task)
  return (
    <div className="App container">
      <img src={tasksImg} alt="tasks" style={{ width: '18rem' }} />
 
      <ListTask description={task.description} isDone={task.isDone} />
      <Addtask setTask={setTask} description={task.description} isDone={task.isDone} />

    </div>
  );
}

export default App;
