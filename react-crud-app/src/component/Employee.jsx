
import { useDispatch, useSelector, } from 'react-redux'
import { fetchTodo } from '../redux/slice/todoSlice';

const Employee = () => {
    const dispatch=useDispatch();
    const handleClick=()=>{
        console.log("Clicked the button")
        dispatch(fetchTodo())
    }

    const empData=useSelector((state)=>state)

    if(empData.todo.loading){
      return <h1>Loading........</h1>
    }

    if(empData.todo.isError){
      return <h1>Something went wrong....</h1>
    }

  return (
    <div>
        <h1>CG Employee details</h1>
        <button type="button" className="btn btn-success"onClick={handleClick}>List of Employee</button>

        <div>
          <h2>Employee List</h2>
          <ul>
            {empData.todo.users && empData.todo.users.map((item,index)=>
            <li key={index}>{item.name}</li>)}
          </ul>

        </div>
    </div>
  )
}

export default Employee
